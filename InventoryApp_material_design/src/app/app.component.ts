import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public constructor(
    private router: Router
  ) {
    this.connectivityListners();
  }

  ngOnInit() {
    if (localStorage.getItem('userRole') == 'INVENTORY_MANAG') {
      this.router.navigate(['/inventory']);
    } else if (localStorage.getItem('userRole') == 'DISPATCHER') {
      this.router.navigate(['/dispatch']);
    } else {
      this.router.navigate(['/loginUrl']);
    }
  }


  public checkonline: boolean;

  @ViewChild('showOfflineAlert') public showOfflineAlert: ModalDirective;
  public showChildModal() {
    this.showOfflineAlert.show();
  }

  connectivityListners() {
    document.addEventListener('offline', this.offlineFunction.bind(this), false);
    document.addEventListener('online', this.onlineFunction.bind(this), false);
  }


  offlineFunction() {
    this.checkonline = false;
    this.showOffileAlert();
  }

  onlineFunction() {
    this.checkonline = true;
    this.showOfflineAlert.hide();
  }

  showOffileAlert() {
    if (!this.checkonline) {
      this.showOfflineAlert.show();
    }
  }
  onCancel(){
    this.showOfflineAlert.hide();
    this.router.navigate(['/loginUrl']);
  }
}

