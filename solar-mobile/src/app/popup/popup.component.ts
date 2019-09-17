import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.css'],
})

export class PopupComponent {
    @ViewChild('showOfflineAlert') public showOfflineAlert: ModalDirective;
    @Input() popupMessage;
    @Input() popupRoute;
    @Input() title;

    constructor(private router: Router) {
    }
    public click() {
        this.showOfflineAlert.show()
    }
    hide() {
        this.showOfflineAlert.hide();
        this.router.navigate([this.popupRoute]);
    }
}
