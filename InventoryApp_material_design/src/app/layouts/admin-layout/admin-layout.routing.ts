import { Routes } from '@angular/router';



export const AdminLayoutRoutes: Routes = [
    // { path: 'inventory', redirectTo: 'inventory' },
    { path: 'inventory', loadChildren: '../../+inventory/inventory-manager.module#inventoryManagerModule' },
    { path: 'sku', loadChildren: '../../+sku-management/sku-management.module#SKUModule' },
    { path: 'product', loadChildren: '../../+product-management/product-management.module#ProductManagementModule' },
    { path: 'qr', loadChildren: '../../+qr-management/qr-management.module#QrManagementModule' },
    { path: 'dispatch', loadChildren: '../../+dispatch/dispatch-manager.module#dispatchManagerModule' },
];
