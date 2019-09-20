import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { VendorService } from '../vendors.service'
import { endponitConfig } from '../../../environments/endpoint';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
declare var $: any;
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'datatables-users-list',
  templateUrl: './vendors-list.component.html',
  styles: []
})
export class VendorsListComponent implements OnInit {
  @ViewChild('lgModal') public lgModal: ModalDirective;

  loading = false;

  public users;

  public vendorWidget = true;
  vendorlistMessage: string;
  vendorlistErrMessage: string
  public serviceErrorResponse;
  public serviceErrorData;
  headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))

  deleteData; deleteRow; vendorName;
  dataTableId='#DataTable table'
  deleted() {
    const data = this.deleteData;
    const row = this.deleteRow;
    this.vendorService.deleteVendor(data.id).subscribe(
      (josndata: any) => {
        if (josndata.error == null) {
          if ($.fn.DataTable.isDataTable(this.dataTableId)) {
            const table = $(this.dataTableId).DataTable();
            $('td', row).parents('tr').remove();
            table.ajax.reload();
          }
          this.lgModal.hide();
          window.scrollTo(0, 0)
          this.vendorlistMessage = 'Vendor deleted successfully';
          setTimeout(() => { this.vendorlistMessage = '' }, 3000);
        } else {
          this.lgModal.hide();
          window.scrollTo(0, 0)
          this.vendorlistErrMessage = josndata.error.message;
          setTimeout(() => { this.vendorlistErrMessage = '' }, 3000);
        }
      },
      error => {
        this.serviceErrorResponse = error.exception;
        this.lgModal.hide();

        this.serviceErrorData = true;
      });
  }
  options = {
    dom: 'Bfrtip',
    buttons: [
      {
        text: '<i class="fa fa-refresh"></i> Refresh',
        className: 'btn btn-sm dataTableCustomButtonMargin',
        action: (e, dt, node, config) => {
          if ($.fn.DataTable.isDataTable(this.dataTableId)) {
            const table = $(this.dataTableId).DataTable();
            this.loading = true;
            table.ajax.reload();
            setTimeout(() => {
              this.loading = false
            }, 2000);
          }
        }
      }
    ],
    ajax: (data, callback, settings) => {
      this.http.get(endponitConfig.VENDORS_API_ENDPOINT_NEW + 'getAllDetails', { headers: this.headers })
        .map(this.extractData)
        .subscribe((jsondata) => {
          callback({ aaData: jsondata == null ? [] : jsondata })
        })
    },
    columns: [
      { data: 'id', responsivePriority: 1 }, { data: 'name', responsivePriority: 2 },
      {
        data: null,
        orderable: false,
        className: 'editcenter',
        defaultContent: '<a class="editor_edit"> <i class="fa fa-edit"></i></a>  /  '
        + '<a class="editor_remove"><i class="fa fa-trash-o"></i></a>',
        responsivePriority: 3
      }
    ],
    rowCallback: (row: Node, data: any | Object, index: number) => {
      $('td', row).unbind('click');
      $('a.editor_edit', row).bind('click', () => {
        this.editUser(data);
      });

      $('a.editor_remove', row).bind('click', () => {
        this.lgModal.show();
        this.vendorName = data.name;
        this.deleteData = data;
        this.deleteRow = row;
      });
      return row;
    },
  };

  constructor(private readonly vendorService: VendorService, private readonly route: ActivatedRoute, private readonly http: HttpClient, private readonly router: Router) {
    if (localStorage.getItem('vendorWidget') != null) {
      localStorage.getItem('vendorWidget').split(',').forEach(element => {
        if (element === 'Add User' || element === 'add user') {
          this.vendorWidget = false;
        }
      });
    }
  }




  ngOnInit() {
    history.pushState(null, null, location.href);
    window.onpopstate = (event) => {
      history.go(1);
    };
    this.route.params.subscribe(params => {

      if (params['data'] !== undefined) {
        if (params['data'] === 'ASuccess') {
          this.vendorlistMessage = 'Vendor Name created successfully';
          setTimeout(() => { this.vendorlistMessage = '' }, 3000);
        } else if (params['data'] === 'USuccess') {
          this.vendorlistMessage = 'Vendor Name updated successfully';
          setTimeout(() => { this.vendorlistMessage = '' }, 3000);
        }
      }
    })

  }


  // Edit a User record
  public editUser(vendor: any) {
    const link = ['/vendors/editVendor', vendor.id];
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
