import { Component, Type, OnInit, ViewEncapsulation, ViewChild, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import * as moment from 'moment';
import { DriverService } from '../../../+drivers/services/driver.service';
import { Driver } from '../../../+drivers/models/driver.data';
import { IDriver } from '../../../+drivers/models/driver';
import { INotifications } from '../../../+notifications/models/notifications';
import { Notifications } from '../../../+notifications/models/notifications.data';
import { ContactDriverService } from '../../services/contactDriver.services';
declare var SockJS;
declare var Stomp;
declare var $;

/**
 * This component adds new Load
 */
@Component({
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css'],
    providers: [ContactDriverService, DriverService]
})

export class ChatComponent {
    private serverUrl = 'http://192.168.3.114:8080/solar-ws';
    private stompClient;
    driver: any = { id: '' };
    public notificationData: any = {};
    public activePageTitle: string;
    public notificationMessage: String;
    driverListArray: Array<any> = [];
    public driverErrorMsg: String;
    public chatErrorMsg: String;
    public driverNamesList = [{ value: '', label: '' }];
    chatMessages: any = [];
    sender_id = localStorage.getItem("userData");
    user_name = localStorage.getItem('UserName');
    // user_name = 'ramu';
    constructor(private driverService: DriverService, private contactDriverService: ContactDriverService, private router: Router) {

    }

    ngOnInit() {
        this.activePageTitle = "Contact Driver";
        this.getAllDrivers();
        this.callingWebSocket();

        // this.contactDriverService.getAllNotifications(this.driver.id).subscribe(res => {
        //     this.webSocket(res);
        // })
    }

    webSocket(res) {
        this.chatMessages = res;
        this.chatMessages.sort(this.comp);
        var objDiv = document.getElementById("scroll");
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    public comp(a, b) {
        return new Date(a.dateNotified).getTime() - new Date(b.dateNotified).getTime();
    }

    callingWebSocket() {
        const ws = new SockJS(this.serverUrl);
        this.stompClient = Stomp.over(ws);
        let that = this;
        let driverID = this.driver.id;
        this.stompClient.connect({}, function (frame) {
            that.sample(driverID);
        });
    }

    subscription;
    sample(driverID) {
        let that = this;
        if (that.subscription) {
            that.subscription.unsubscribe();
        }
        that.subscription = that.stompClient.subscribe('/topic/1' + '/' + driverID, (message) => {
            if (message) {
                that.chatMessages.push(JSON.parse(message.body));
            }
        });
    }

    private getAllDrivers(): void {
        this.driverService.getDrivers().subscribe(drivers => {
            this.driverListArray = drivers;
            let driverNamesList = new Array(this.driverListArray.length);
            for (let i = 0; i < this.driverListArray.length; i++) {
                driverNamesList[i] = {
                    value: this.driverListArray[i].id,
                    label: this.driverListArray[i].firstName + " " + this.driverListArray[i].lastName
                };
            }
            this.driverNamesList = driverNamesList.slice(0);
        });
    }

    sendMessagesToDriver(driverId: any, message: any) {
        if (driverId == "") {
            this.driverErrorMsg = "Please Select Driver";
            this.chatErrorMsg = "Please Enter Your Message";
        }
        if (driverId != "" && message) {
            let present_date = new Date();
            this.chatErrorMsg = "";
            this.notificationData.userName = this.user_name;
            this.notificationData.from_id = "1";
            this.notificationData.to_id = driverId;
            this.notificationData.data = message;
            this.notificationData.isNew = "1";
            this.notificationData.channel = "web_socket";
            this.notificationData.fromComponentName = "administrator";
            this.notificationData.toComponentName = "driver";
            this.notificationData.componentAction = "chat_message";
            this.notificationData.dateNotified = moment(present_date).format();
            this.notificationData.dateReceived = moment(present_date).format();
            this.contactDriverService.addChatNotifications(this.notificationData);
            $('#notification-msg').val('');
            this.notificationMessage = "";
            var chatDiv = document.getElementById("msg");
        }
        else {
            this.chatErrorMsg = "Please Enter Your Message";
        }
    }

    getDriverChatMessages(driverId: String) {
        if (driverId == "" || driverId === undefined) {
        } else {
            this.sample(this.driver.id);
            this.driverErrorMsg = "";
            this.chatErrorMsg = "";
            this.contactDriverService.getAllNotifications(driverId).subscribe(res => {
                this.webSocket(res);
            })
        }
    }

}
