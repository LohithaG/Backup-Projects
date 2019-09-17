import { Component, Type, OnInit, ViewEncapsulation, ViewChild, Input, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ILoad } from '../../models/load';

import 'rxjs/add/operator/toPromise';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import * as $ from 'jquery';
// import { Ng2MessagePopupComponent, Ng2PopupComponent } from 'ng2-popup';

import { IMyOptions, IMyDateModel } from 'mydatepicker';
import { ModalDirective } from 'ngx-bootstrap';
import { FuelService } from '../../services/fuel.service';

import { endponitConfig } from '../../../../environments/endpoints';

import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as moment from 'moment';
/**
 * This component gets all loads data.
 */
@Component({
  templateUrl: './fuel.list.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [FuelService],
  styles: [`
    .popup-header,
    .popup-body,
    .popup-footer {
        padding: 15px;
        text-align: center;
    }

    .popup-header {
        font-weight: bold;
        font-size: 18px;
        border-bottom: 1px solid #ccc;
    }

    .ng2-popup-overlay {
        display: flex;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.2);
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        display: none;
    }
  `]
})

export class FuelListComponent {

  public fuelDeleteSuccess;
  public fuelDeleteFailure;
  public fuelDeleteResponse: any;
  public fuelList: any;
  public fuel: any;
  public error: string;
  public pseudoServer = [];
  public filterQuery = '';
  public rowsOnPage = 10;
  public sortBy = 'firstName';
  public sortOrder = 'asc';
  public fuelListView;
  public serviceErrorResponse;
  public serviceErrorData;

  public activePageTitle: string;
  public userlistMessage;

  message: string;
  private fuelHeaders: Headers;

  @ViewChild('fuelviewPopup') public fuelviewPopup: ModalDirective;


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
      this.http.get(endponitConfig.FUEL_API_ENDPOINT, { headers: this.fuelHeaders })
        .map(this.extractData)
        .catch(error => {
          // In a real world app, we might use a remote logging infrastructure
          // We'd also dig deeper into the error to get a better message
          const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
          console.error(errMsg); // log to console instead

          if (error.status == 404) {
            error = error.json();
            this.serviceErrorResponse = error.exception;
            this.serviceErrorData = true;
            return Observable.throw(error);
          } else {
            // this.navigateToLogin( this.errorMessage)
            localStorage.setItem('status', '401')
            // 401 unauthorized response so log user out of client
            window.location.href = '/#/error';
            return Observable.throw(errMsg);
          }
        })
        .subscribe((jsondata) => {
          callback({
            aaData: jsondata,
          })
        })
    },
    columns: [
      { data: 'name', responsivePriority: 1 }, { data: 'address', responsivePriority: 4 },
      { data: 'latitude', responsivePriority: 3 }, { data: 'longitude', responsivePriority: 5 }, {
        data: null,
        orderable: false,
        className: 'editcenter',
        //  defaultContent: '<a  class="editor_edit">Edit</a>'
        defaultContent:
          '<a class="editor_edit"> <i class="fa fa-edit"></i></a>/ <a class=" editor_view" ><i class="fa fa-eye" (click)="mypopup()"></i></a> / <a  class="editor_remove"><i class="fa fa-trash-o"></i></a>',
        responsivePriority: 2
      }
    ],
    rowCallback: (row: Node, data: any | Object, index: number) => {

      const self = this;
      // Unbind first in order to avoid any duplicate handler
      // (see https://github.com/l-lin/angular-datatables/issues/87)
      $('td', row).unbind('click');

      $('a.editor_edit', row).bind('click', () => {
        // self.editUser(data);
        self.goToUpdatefuelDetials(data)
      });
      $('a.editor_view', row).bind('click', () => {
        self.gotoViewfuelDetails(data);
      });

      $('a.editor_remove', row).bind('click', () => {
        if (data.id == Number(localStorage.getItem('userData'))) {
          window.alert('Logged in User can not be deleted')
        } else {
          this.fuelService
            .deleteFuel(data)
            .then(response => {
              console.log(response)
              if (response.data != null) {
                if ($.fn.DataTable.isDataTable('#DataTable table')) {
                  var table = $('#DataTable table').DataTable();
                  let info = table.page.info();
                  $('td', row).parents('tr').remove();
                  table.ajax.reload();
                  //    setTimeout(()=>{
                  //     table.page(info.page).draw('page'); 
                  //    },500)
                }
                this.fuelDeleteSuccess = response.data
                setTimeout(() => {
                  this.fuelDeleteSuccess = '';
                }, 3000);


              } else {
                this.fuelDeleteFailure = response.error.message;
                setTimeout(() => {
                  this.fuelDeleteFailure = '';
                }, 3000)
              }
            }, error => {
              this.serviceErrorResponse = error.exception;
              this.serviceErrorData = true;
            })
            .catch(error => this.error = error);
        }
      });
      return row;
    },
  };

  public showChildModal(): void {
    this.fuelviewPopup.show();
  }

  constructor(private http: Http, private fuelService: FuelService, private router: Router) {
    this.activePageTitle = 'fuels';
    this.fuelDeleteResponse = '';


    this.fuelHeaders = new Headers();
    this.fuelHeaders.append('Content-Type', 'application/json');
    this.fuelHeaders.append('Authorization', localStorage.getItem('Authentication'));
  }

  ngOnInit() {
    this.getAllfuels();

  }



  private extractData(res) {
    const body = res.json();
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

  /**
   * This method gets all fuel details
   */
  public getAllfuels(): void {
    try {
      this.fuelService.getFuel().toPromise().then((cars) => {
        this.fuelList = cars;
        console.log(this.fuelList)
      });
    } catch (error) {
      console.error('error occured in getting all fuels  details' + error)
    }
  }
  /**
  * This method gets fuel details by Id
  */
  getfuelDataByID(id: string) {

    for (const fuel of this.fuelList) {
      if (fuel.id === id) {
        this.fuel = fuel;
      }
    }

  }

  /**
  *  This method adds new fuel details
  */
  public goToAddfuel() {
    const link = ['/fuel/addfuel'];
    this.router.navigate(link);

  }

  /**
   *  This method updates fuel details
   */
  public goToUpdatefuelDetials(data) {
    const link = ['/fuel/updateFuelStation', data.id];
    this.router.navigate(link);

  }
  /**
 *  This method deletes fuel details
 */


  public deletefuel(fuel: any, event: any): void {
    // event.stopPropagation();
    try {
      //   this.fuelService
      //     .deletefuel(fuel).then(response => {
      //       if (response.error == null) {
      //         this.router.navigate(['/fuels']);
      //       }

      //     });
      this.getAllfuels();
    } catch (error) {
      console.error('error occured in deleting truck' + error)
    }
    finally {
      this.getAllfuels();
    }

  }
  public delete() {
    this.fuelDeleteResponse = false;

  }

  /**
     * View fuel
     */

  public gotoViewfuelDetails(viewObj: any) {
    this.fuelListView = viewObj;
    this.fuelviewPopup.show();
  }

  /**
   * This method navigates the screen to home Page (dashboard)
   */
  public goToHome() {
    const link = ['/dashboard'];
    this.router.navigate(link);
  }
}
