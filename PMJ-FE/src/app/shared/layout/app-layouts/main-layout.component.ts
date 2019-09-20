import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { FadeZoomInTop } from "../../animations/fade-zoom-in-top.decorator";
import { ModalDirective } from 'ngx-bootstrap';
import { Router } from '@angular/router';

declare var $: any;
@FadeZoomInTop()
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styles: []
})
export class MainLayoutComponent implements OnInit {

  @ViewChild('lgModal') public lgModal: ModalDirective;
  constructor(private router: Router) {
  }

  ngOnInit() {

  }


  goToLogin() {
    this.lgModal.hide()
    $('.modal-backdrop').css({ position: 'unset' });
    setTimeout(() => {
      this.router.navigate(['/auth/login'])
    }, 1000)
  }

}