import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PlatformLocation } from '@angular/common'

@Component({
  selector: 'app-add-product-display',
  templateUrl: './add-product-display.component.html',
  styleUrls: ['./add-product-display.component.css']
})
export class AddProductDisplayComponent implements OnInit {

  constructor(
    public platformLocation: PlatformLocation,
    private router: Router
  ) {

  }


  ngOnInit() {
    this.platformLocation.onPopState(() => {
      this.router.navigate(['inventory/inventory-manager'])
    });
  }



}




