import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { LayoutService } from "../../layout/layout.service";

@Component({

  selector: 'sa-login-info',
  templateUrl: './login-info.component.html',
})
export class LoginInfoComponent implements OnInit {

  user: any = {};

  constructor(
    private userService: UserService,
    private layoutService: LayoutService) {
  }
  username: any
  userType: any;
  ngOnInit() {
    // this.userService.getLoginInfo().subscribe(user => {
    //   this.user = user
    // })
    this.username = sessionStorage.getItem('userName')
    this.userType = sessionStorage.getItem('userRole')

  }

  toggleShortcut() {
    this.layoutService.onShortcutToggle()
  }

}
