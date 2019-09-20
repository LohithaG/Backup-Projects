import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../product-services.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-inventory-dispatcher-view',
  templateUrl: './inventory-dispatcher-view.component.html',
  styleUrls: ['./inventory-dispatcher-view.component.css']
})
export class InventoryDispatcherViewComponent implements OnInit, OnDestroy {

  public product;
  public statusSuccess;
  public failedStatus;
  public productErrorStatus;
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() { 
    this.route.params.forEach((params: Params) => {
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
        this.productErrorStatus = 'Failed to fetch product details'
      }
    })
  }

  onDispatch(productId, StatusId) {
    this.productService.updateProductStatus(productId, StatusId).subscribe(data => {
      if (data.data != null) {
        this.statusSuccess = 'Status changed successfully'
      } else {
        this.failedStatus = 'Status change failed'
      }
    })
  }

  ngOnDestroy() {
  }
}
