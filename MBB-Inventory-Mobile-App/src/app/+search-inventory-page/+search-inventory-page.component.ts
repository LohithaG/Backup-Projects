import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-search-inventory-page',
  templateUrl: './+search-inventory-page.component.html',
  styleUrls: ['./+search-inventory-page.component.css']
})
export class searchInventoryPageComponent implements OnInit, OnDestroy {
  public paramValue;
  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.paramValue = params['id'];
      }
    })
  }

  onSearch(BarcodeId) {
    if (this.paramValue == 'dispatch') {
      this.router.navigate(['/inventory-view/dispatcher-view', BarcodeId]);
    } else if (this.paramValue == 'update') {
      this.router.navigate(['/inventory-update/update', BarcodeId])
    } else {
      this.router.navigate(['/inventory-view/view', BarcodeId])
    }
  }

  ngOnDestroy() {
    this.paramValue = '';
  }

}
