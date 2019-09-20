import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from './product-table.component';
import { SmartadminDatatableModule } from "../shared/ui/datatable/smartadmin-datatable.module";
import { UtilsModule } from '../shared/utils/utils.module';
import { SmartadminModule } from '../shared/smartadmin.module';
import { barcodeScanner } from '../+barcode-scanner/barcode-scanner.service';

@NgModule({
  imports: [
    CommonModule,
    SmartadminDatatableModule,
    UtilsModule,
    SmartadminModule
  ],
  declarations: [ProductTableComponent],
  exports: [ProductTableComponent],
  providers: [barcodeScanner]
})
export class ProductTableModule { }
