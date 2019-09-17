/**
 * Created by griga on 7/11/16.
 */


import { Routes, RouterModule, Data } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/app-layouts/main-layout.component';
import { AuthLayoutComponent } from './shared/layout/app-layouts/auth-layout.component';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuard } from './+auth/guards/index';


export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [

            { path: '', redirectTo: 'loads', pathMatch: 'full' },
            {
                path: 'loads',
                loadChildren: 'app/+loads/loads.module#LoadsModule',
                data: { pageTitle: 'loads', roles: ['DRIVER', 'ADMIN'] }, canActivate: [AuthGuard]
            },
            {
                path: 'skiddrop',
                loadChildren: 'app/+skids/skids.module#SkidsModule'
            },
            {
                path: 'chat',
                loadChildren: 'app/+chat/chat.module#ChatModule',
            },
            {
                path: 'maps',
                loadChildren: 'app/+maps/maps.module#MapsModule',
                data: { roles: ['DRIVER', 'ADMIN'] }, canActivate: [AuthGuard]
            },
            {
                path: 'notifications',
                loadChildren: 'app/+notifications/notifications.module#NotificationModule',
                data: { pageTitle: 'Notifications', roles: ['USER', 'ADMIN'] }, canActivate: [AuthGuard]
            },
            {
                path: 'inspection',
                loadChildren: 'app/+inspection/inspection.module#InspectionModule',
                data: { pageTitle: 'inspection', roles: ['DRIVER', 'ADMIN'] }, canActivate: [AuthGuard]
            },
            {
                path: 'post-inspection',
                loadChildren: 'app/+post-inspection/post-inspection.module#PostInspectionModule',
                data: { pageTitle: 'Post Inspection', roles: ['DRIVER', 'ADMIN'] }, canActivate: [AuthGuard]
            },
            {
                path: 'fuel',
                loadChildren: 'app/+fuel/fuel.module#FuelModule',
                //data: { roles: ['DRIVER', 'ADMIN'] }, canActivate: [AuthGuard]
            },
            {
                path: 'food',
                loadChildren: 'app/+food/food.module#FoodModule',
                //data: { roles: ["DRIVER", 'ADMIN'] }, canActivate: [AuthGuard]
            },
            {
                path: 'expenses',
                loadChildren: 'app/+expenses/expenses.module#ExpensesModule',
                data: { roles: ["DRIVER", "ADMIN"] }, canActivate: [AuthGuard]
            },
        ]
    },

    {
        path: 'login',
        loadChildren: './+auth/+login/login.module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: './+auth/+register/register.module#RegisterModule',
    },
    {
        path: 'forgot-password',
        loadChildren: './+auth/+forgot/forgot.module#ForgotModule'
    },
    {
        path: 'locked',
        loadChildren: './+auth/+locked/locked.module#LockedModule'
    },
    {
        path: 'otp',
        loadChildren: './+auth/+otp/otp.module#OtpModule',
    },
    {
        path: 'error',
        loadChildren: './+auth/+error/error.module#ErrorModule',
    },

    { path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/+auth/auth.module#AuthModule' },


    // {path: '**', redirectTo: 'miscellaneous/error404'}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
