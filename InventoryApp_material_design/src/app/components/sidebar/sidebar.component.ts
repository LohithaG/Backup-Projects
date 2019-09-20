import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/inventory/view', title: 'HOME', icon: 'home', class: '' },
    { path: '/inventory/details', title: 'Inventory Details', icon: 'table', class: '' },
    { path: '/product/view', title: 'product View', icon: 'table', class: '' },
    { path: '/product/return', title: 'product return', icon: 'table', class: '' },
    { path: '/loginUrl', title: 'Sign out', icon: 'table', class: '' }
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];
    userType
    constructor() { }

    ngOnInit() {

        this.userType=localStorage.getItem('userRole')
        // if (localStorage.getItem('userRole') === 'INVENTORY_MANAG') {
        //     this.userType = 'Inventory';
        // } else {
        //     this.userType = 'Dispatch';
        // }

        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
