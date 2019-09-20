import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { UserService } from '../user.service'
import { environment } from '../../../../environments/environment';
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

  public userWidget = true;
  userlistMessage: string;
  public serviceErrorResponse;
  public serviceErrorData;
  @ViewChild('lgModal') public lgModal: ModalDirective;


  options = {
    dom: 'Bfrtip',
    buttons: [
      {
        text: '<i class="fa fa-refresh"></i> Refresh',
        className: 'btn bg-color-blueLight  txt-color-white btn-sm dataTableCustomButtonMargin',
        action: function (e, dt, node, config) {
          if ($.fn.DataTable.isDataTable('#DataTable table')) {
            var table = $('#DataTable table').DataTable();
            table.ajax.reload();
          }
        }
      }
    ],
    ajax: (data, callback, settings) => {
      this.http.get(environment.USER_API_ENDPOINT + 'getAllUsers')
        .map(this.extractData)
        .subscribe((jsondata) => {
          callback({
            aaData: jsondata ? jsondata : [],
          })
        })
    },
    columns: [
      {
        data: 'empCode',
        responsivePriority: 5,
        render: (data) => {
          if (data === null) {
            return '-'
          } else {
            return data.empCode
          }
        }
      },
      { data: 'userName', responsivePriority: 3 },
      { data: 'roles[0].name', responsivePriority: 4 },
      {
        data: null,
        orderable: false,
        className: 'editcenter',
        //  defaultContent: '<a  class="editor_edit">Edit</a>'
        defaultContent: '<a class="editor_edit"> <i class="fa fa-edit"></i></a> /'
        + '<a  class="editor_remove"><i class="fa fa-trash-o"></i></a>',
        responsivePriority: 2
      }
    ],
    rowCallback: (row: Node, data: any | Object, index: number) => {

      const self = this;
      // Unbind first in order to avoid any duplicate handler
      // (see https://github.com/l-lin/angular-datatables/issues/87)
      $('td', row).unbind('click');

      $('a.editor_edit', row).bind('click', () => {
        self.editUser(data);
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

  userName: any;
  userId: any;
  deleteRow: any;
  deleted() {
    const row = this.deleteRow;
    this.userService.deleteUser(this.userId).subscribe(
      (josndata: any) => {
        if (josndata.error == null) {
          if ($.fn.DataTable.isDataTable('#DataTable table')) {
            var table = $('#DataTable table').DataTable();
            let info = table.page.info();
            $('td', row).parents('tr').remove();
            table.ajax.reload();
            this.lgModal.hide();
            window.scrollTo(0, 0)
            this.userlistMessage = 'User deleted successfully';
            setTimeout(() => { this.userlistMessage = '' }, 3000);
          }
        } else {
          this.userlistMessage = josndata.error.message;
          setTimeout(() => {
            this.userlistMessage = '';
            this.lgModal.hide();
          }, 3000);
        }
      },
      error => {
        this.serviceErrorResponse = error.exception;
        this.serviceErrorData = true;
      });

  }


  constructor(private userService: UserService, private route: ActivatedRoute, private http: HttpClient, private router: Router) {
  }


  ngOnInit() {
    this.route.params.subscribe(params => {

      if (params['data'] !== undefined) {
        if (params['data'] === 'ASuccess') {
          this.userlistMessage = 'User created successfully';
          setTimeout(() => { this.userlistMessage = '' }, 3000);
        } else if (params['data'] === 'USuccess') {
          this.userlistMessage = 'User updated successfully';
          setTimeout(() => { this.userlistMessage = '' }, 3000);
        } else if (params['data'] === 'DSuccess') {

        }
      }
    })

    window.scrollTo(0, 0)

  }


  // Edit a User record
  public editUser(user: any) {
    const link = ['/admin/users/editUser', user.id];
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
    return Observable.throw(errMsg);
  }
}
