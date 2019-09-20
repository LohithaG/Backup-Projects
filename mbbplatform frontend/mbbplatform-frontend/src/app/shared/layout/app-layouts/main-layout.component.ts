import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { FadeZoomInTop } from "../../animations/fade-zoom-in-top.decorator";
import { ModalDirective } from 'ngx-bootstrap';
import { Router } from '@angular/router';
import { UserIdleService } from 'app/angular-user-idle.service';
declare var $: any;
@FadeZoomInTop()
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styles: []
})
export class MainLayoutComponent implements OnInit {

  @ViewChild('lgModal') public lgModal: ModalDirective;
  constructor(private userIdle: UserIdleService, private router: Router) {
  }
  time;
  ngOnInit() {
    //Start watching for user inactivity.

    this.userIdle.startWatching();
    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(count => {
      //debugger;
      $('.modal-backdrop').css({ opacity: 0, position: 'unset' });
      this.time = count
      this.lgModal.show()
    }
    );

    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => {
      this.userIdle.stopTimer();
      this.userIdle.stopWatching()
      this.lgModal.hide()
      $('.modal-backdrop').css({ position: 'unset' });
      setTimeout(() => {
        this.router.navigate(['/auth/login'])
      }, 1000);
    }
    );

  }
  stop() {
    this.userIdle.stopTimer();
  }

  stopWatching() {
    this.userIdle.stopWatching();
  }

  startWatching() {
    this.userIdle.startWatching();
  }

  restart() {
    this.lgModal.hide()
    this.userIdle.resetTimer();
  }

  stay() {
    this.userIdle.stopTimer();
    $('.modal-backdrop').parent().css({ position: 'unset' });
    setTimeout(() => {
      this.lgModal.hide();
    }, 100)

  }

  goToLogin() {
    this.userIdle.stopTimer();
    this.userIdle.stopWatching()

    this.lgModal.hide()
    $('.modal-backdrop').css({ position: 'unset' });
    setTimeout(() => {
      this.router.navigate(['/auth/login'])
    }, 1000)
  }

}