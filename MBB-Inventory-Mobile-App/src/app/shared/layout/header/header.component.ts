import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HealthJsonApiService } from './health.service';
import { AuthService } from '../../../+auth/auth.service';

declare var $: any;

@Component({
  selector: 'sa-header',
  templateUrl: './header.component.html',
  styles: [`.headerLogo { padding-top: 10px;
    padding-right: 2px;}`]
})
export class HeaderComponent implements OnInit {

  public state: any;

  constructor(private router: Router, private healthJsonApiService: HealthJsonApiService, private authService: AuthService) {
  }

  ngOnInit() {
  }


  searchMobileActive = false;

  toggleSearchMobile() {
    this.searchMobileActive = !this.searchMobileActive;

    $('body').toggleClass('search-mobile', this.searchMobileActive);
  }

  homeView() {
    if(localStorage.getItem("userRole") =='INVENTORY_MANAG') {
      this.router.navigate(['/inventory/inventory-manager']);
    }else  if(localStorage.getItem("userRole") =='DISPATCHER') {
      this.router.navigate(['/dispatcher/dispatcher-module']);
    }
  }

  onSubmit() {
    this.router.navigate(['/miscellaneous/search']);

  }
}
