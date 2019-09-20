import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'generate-QR',
    templateUrl: './qr-search.component.html',
    styleUrls: ['./qr-search.component.css']
})

export class SearchQrComponent {

    qrCode = '';
    submitted = false;
    constructor(
        public dialog: MatDialog,
        private readonly router: Router
        , public _appService: AppService) {

    }

    getQrCode() {
        if (this.qrCode.length > 0) {
            this._appService.getQrCode(this.qrCode).subscribe((data: any) => {
                if (data.data != null) {
                    this.qrCode = '';
                    this.openDialog('QR Code reprinted successfully')
                } else {
                    this.openDialog("Please enter valid QR Code")
                }
            })
        } else {
            this.submitted = true;
            setTimeout(() => {
                this.submitted = false;
            }, 2000)
        }
    }

    openDialog(text) {
        const dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        dialogRef.afterClosed().subscribe(result => {
            this.qrCode=''
        });
        localStorage.setItem('msg', text)

    }


    gotoPreviousPage() {
        setTimeout(() => {
            this.router.navigate(['./inventory'])
        })
    }

}



@Component({
    selector: 'dialog-content-example-dialog',
    template: `<img class="mat-typography img1" src="assets/img/logom.png" alt="MedicalBulkBuy" width="90%"   >
    <mat-dialog-content class="mat-typography" style="border-bottom:1px solid #ddd;border-top:1px solid #ddd; text-align:center">
     
    <h5 style="padding: 18px;margin: 0px;font-size: 14px;font-family: sans-serif;">{{msgText}}</h5>
    </mat-dialog-content>
   
    <mat-dialog-actions align="center" >
    <button mat-stroked-button [mat-dialog-close]="true" cdkFocusInitial > 
    <mat-icon>done</mat-icon>
    Ok
</button>
    </mat-dialog-actions>
  `,
})
export class DialogComponent {
    msgText: any;
    ngOnInit() {
        this.msgText = localStorage.getItem('msg');
    }
}
