import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product-services.service';
import { ActivatedRoute, Params } from '@angular/router';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-inventory-view-page',
  templateUrl: './inventory-view-page.component.html',
  styleUrls: ['./inventory-view-page.component.css']
})
export class InventoryViewPageComponent implements OnInit, OnDestroy {
  public product: any;
  public errorStatus;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      console.log(params['id'])
      if (params['id'] !== undefined) {
        this.getProductById(params['id']);
      }
    })
  }

  getProductById(id) {
    this.productService.getProductByBarcodeId(id).subscribe(data => {
      if (data.data != null) {
        this.product = data.data;
      } else {
        this.errorStatus = 'Failed to fetch product details';
        setTimeout(() => {
          this.errorStatus = '';
        }, 3000)
      } 
    })
  }

  ngOnDestroy() {
    this.product = '';
  }
}
