
import { SmartadminDatatableModule } from "../shared/ui/datatable/smartadmin-datatable.module";
import { UtilsModule } from '../shared/utils/utils.module';
import { NgModule } from '@angular/core';
import { SmartadminModule } from '../shared/smartadmin.module';
import { RouterModule, Routes } from '@angular/router';
import { InventoryManagerComponent } from './inventory-manager.component';
import { InventoryDetailsComponent } from './+inventory-details/inventory-details.component'
import { barcodeScanner } from '../+barcode-scanner/barcode-scanner.service';

const routes: Routes = [
    {
        path: 'inventory-manager',
        component: InventoryManagerComponent
    },
    {
        path: 'inventory-details',
        component: InventoryDetailsComponent
    }]

@NgModule({
    imports: [RouterModule.forChild(routes), SmartadminDatatableModule, UtilsModule, SmartadminModule],
    declarations: [InventoryManagerComponent, InventoryDetailsComponent],
    exports: [],
    providers: [barcodeScanner],
})
export class inventoryManagerModule { }
