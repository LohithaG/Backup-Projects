import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UserService } from '../user.service'
import { endponitConfig } from '../../../environments/endpoint';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ModalDirective } from 'ngx-bootstrap';
declare var $: any;

@Component({
    selector: 'datatables-users-list',
    templateUrl: './users-list.component.html',
    styles: []
})
export class UsersListComponent implements OnInit {
    public users;
    loading = false;
    public userWidget = true;
    userlistMessage: string;
    public serviceErrorResponse;
    public serviceErrorData;
    @ViewChild('lgModal') public lgModal: ModalDirective;
    headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))
    userName;
    dataTableId = '#DataTable table';
    options = {
        dom: 'Bfrtip',
        buttons: [
            {
                text: '<i class="fa fa-refresh"></i> Refresh',
                className: 'btn btn-sm dataTableCustomButtonMargin moreColumns',
                action: (e, dt, node, config) => {
                    if ($.fn.DataTable.isDataTable(this.dataTableId)) {
                        const table = $(this.dataTableId).DataTable();
                        table.search("").draw();
                        table.ajax.reload();
                        this.loading = true;
                        setTimeout(() => {
                            this.loading = false
                        }, 1000);
                    }
                }
            },
            { extend: 'colvis', text: 'More Columns', className: 'moreColumns' },
        ],
        ajax: (data, callback, settings) => {
            this.http.get(endponitConfig.USER_API_ENDPOINT + 'getAllUsers', { headers: this.headers })
                .map(this.extractData)
                .subscribe((jsondata) => {
                    callback({ aaData: jsondata == null ? [] : jsondata })
                })
        },
        columns: [
            { data: 'name' },
            { data: 'email' },
            { data: 'phone' },
            {
                data: 'facilityId.facilityName',
                render: (data) => {
                    if (data) {
                        return data
                    } else {
                        return '-'
                    }
                }
            },
            { data: 'roles[0].name' },
            {
                data: 'notificationStatus',
                "className": "text-center",
                render: (data) => {
                    if (data) {
                        return '<a> <i class="fa fa-check"></i></a>'
                    } else {
                        return '-'
                    }
                }
            },
            {

                data: null,
                orderable: false,
                className: 'editcenter',
                render: (data) => {
                    const userId = Number(sessionStorage.getItem('userData'))
                    if (this.userRole === 'SUPERADMIN') {
                        if (userId == data.id) {
                            return '<a class="editor_edit"> <i class="fa fa-edit"></i></a>'
                        } else {
                            return '<a class="editor_edit"> <i class="fa fa-edit"></i></a> /'
                                + '<a class="editor_remove"><i class="fa fa-trash-o"></i></a>'
                        }
                    }
                    if (this.userRole === 'ADMIN') {
                        if (data.roles[0].name == 'SUPERADMIN') {
                            return '-'
                        } else if (userId == data.id) {
                            return '<a class="editor_edit"> <i class="fa fa-edit"></i></a>'
                        }
                        else {
                            return '<a class="editor_edit"> <i class="fa fa-edit"></i></a> /'
                                + '<a class="editor_remove"><i class="fa fa-trash-o"></i></a>'
                        }
                    }
                },
            }
        ],
        columnDefs: [
            {
                "targets": [2],
                "visible": false,
                "searchable": true
            },
        ],
        rowCallback: (row: Node, data: any | Object, index: number) => {
            $('td', row).unbind('click');
            $('a.editor_edit', row).bind('click', () => {
                this.editUser(data);
            });

            $('a.editor_remove', row).bind('click', () => {
                if (data.id === Number(sessionStorage.getItem('userData'))) {
                    window.alert('Logged in user can not be deleted')
                } else {
                    this.lgModal.show();
                    this.userName = data.name;
                    this.userId = data.id;
                    this.deleteRow = row;
                }
            });
            return row;
        },
    };
    userId; deleteRow;
    deleted() {
        const row = this.deleteRow;
        this.userService.deleteUser(this.userId).subscribe(
            (josndata: any) => {
                if (josndata.error == null) {
                    if ($.fn.DataTable.isDataTable(this.dataTableId)) {
                        const table = $(this.dataTableId).DataTable();
                        $('td', row).parents('tr').remove();
                        table.ajax.reload();
                    }
                    this.lgModal.hide();
                    window.scrollTo(0, 0)
                    this.userlistMessage = 'User deleted successfully';
                    setTimeout(() => { this.userlistMessage = '' }, 3000);
                } else {
                    this.lgModal.hide();
                    window.scrollTo(0, 0)
                    this.userlistMessage = josndata.error.message;
                    setTimeout(() => { this.userlistMessage = '' }, 3000);
                }
            },
            error => {
                this.serviceErrorResponse = error.exception;
                this.serviceErrorData = true;
            });

    }

    constructor(private readonly userService: UserService, private readonly route: ActivatedRoute, private readonly http: HttpClient, private readonly router: Router) {
        if (localStorage.getItem('userWidget') != null) {
            localStorage.getItem('userWidget').split(',').forEach(element => {
                if (element === 'Add User' || element === 'add user') {
                    this.userWidget = false;
                }
            });
        }
    }



    userRole;
    ngOnInit() {
        this.userRole = sessionStorage.getItem('userRole')
        this.route.params.subscribe(params => {

            if (params['data'] !== undefined) {
                if (params['data'] === 'ASuccess') {
                    this.userlistMessage = 'User created successfully';
                    setTimeout(() => { this.userlistMessage = '' }, 3000);
                } else if (params['data'] === 'USuccess') {
                    this.userlistMessage = 'User updated successfully';
                    setTimeout(() => { this.userlistMessage = '' }, 3000);
                }
            }
        })

    }


    // Edit a User record
    public editUser(user: any) {
        const link = ['/users/editUser', user.id];
        this.router.navigate(link);
    }


    private extractData(res) {
        const body = res;
        if (body) {
            return body.data
        } else {
            return {}
        }
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throwError(errMsg);
    }
}
