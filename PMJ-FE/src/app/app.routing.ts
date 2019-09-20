
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from "./shared/layout/app-layouts/main-layout.component";
import { AuthLayoutComponent } from "./shared/layout/app-layouts/auth-layout.component";
import { ModuleWithProviders } from "@angular/core";
import { AuthGuard } from './+auth/guards/index';
import { UserRoleGuard } from './+auth/guards/userRole.guard';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '', redirectTo: 'target-actual', pathMatch: 'full'
            },

            {
                path: 'target-actual',
                loadChildren: 'app/+target-actual/target-actual.module#TargetActualModule',

                data: { roles: ['ADMIN', 'SUPERADMIN'], pageTitle: 'Target vs Actual' }, canActivate: [AuthGuard, UserRoleGuard]
            },
            {
                path: 'performance-analysis',
                loadChildren: 'app/+performance-analysis/performance-analysis.module#PerformanceAnalysisModule',
                data: { roles: ['ADMIN', 'SUPERADMIN'], pageTitle: 'Performance Analysis' }, canActivate: [AuthGuard, UserRoleGuard]
            },
            {
                path: 'salesperson',
                loadChildren: 'app/salesperson/salesperson.module#SalespersonModule',
                data: { roles: ['ADMIN', 'SUPERADMIN'] }, canActivate: [AuthGuard, UserRoleGuard]
            },
            {
                path: 'margins',
                loadChildren: 'app/+margins/margin.module#MarginsModule',
                data: { roles: ['ADMIN', 'SUPERADMIN'], pageTitle: 'Margins' }, canActivate: [AuthGuard, UserRoleGuard]
            },
            {
                path: 'ticket-size',
                loadChildren: 'app/+ticket-size/ticket-size.module#TicketSizeModule',
                data: { roles: ['ADMIN', 'SUPERADMIN'] }, canActivate: [AuthGuard, UserRoleGuard]
            },
            {
                path: 'file-upload',
                loadChildren: 'app/+file-upload/file-upload.module#FileUploadModule',
                data: { roles: ['ADMIN', 'SUPERADMIN'] }, canActivate: [AuthGuard, UserRoleGuard]
            },
            {
                path: 'growth',
                loadChildren: 'app/+growth-calculations/growth-calcaulations.module#GrowthCalculationsModule',
                data: { roles: ['ADMIN', 'SUPERADMIN'], pageTitle: 'Growth Calculations' }, canActivate: [AuthGuard, UserRoleGuard]
            },
            {
                path: 'conversion-factors',
                loadChildren: 'app/+conversion-factors/conversion-factors.module#ConversionFactorsModule',
                data: { roles: ['ADMIN', 'SUPERADMIN'] }, canActivate: [AuthGuard, UserRoleGuard]
            },
            {
                path: 'error/:error',
                loadChildren: './+error/+error/error.module#ErrorModule'
            },
            {
                path: 'service-error/',
                loadChildren: './+error/+service-error/service-error.module#ServiceErrorModule'
            },
            {
                path: 'admin',
                loadChildren: 'app/+admin/admin.module#AdminModule',
                data: { pageTitle: 'Admin', roles: ['ADMIN'] }, canActivate: [AuthGuard]
            },

        ]
    },

    { path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/+auth/auth.module#AuthModule' }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
