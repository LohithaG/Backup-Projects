import { Component, Type, OnInit, ViewEncapsulation, ViewChild, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import * as moment from 'moment';
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
    providers: [ContactDriverService]
})

export class ChatComponent {
    private serverUrl = 'http://192.168.3.120:8080/solar-ws';
    private stompClient;
    public notificationData: INotifications = new Notifications("", "", "", "", "", "", "", "", "", "", null, null, "");
    public activePageTitle: string;
    public notificationMessage: String;
    driverListArray: Array<any> = [];
    public driverErrorMsg: String;
    public chatErrorMsg: String;
    public driverNamesList = [{ value: '', label: '' }];
    admin_id = "1";
    driver_id = localStorage.getItem('driverData');
    user_name = localStorage.getItem('DriverName');
    constructor(private contactDriverService: ContactDriverService, private router: Router) {
        this.callingWebSocket();
    }

    ngOnInit() {
        this.activePageTitle = "Contact Admin";
        this.contactDriverService.getAllNotifications(this.driver_id, this.admin_id).subscribe(res => {
            this.webSocket(res);
        })
    }

    chatMessages;
    webSocket(res) {
        this.chatMessages = res;
        this.chatMessages.sort(this.comp);
        console.log(this.chatMessages);
    }

    public comp(a, b) {
        return new Date(a.dateNotified).getTime() - new Date(b.dateNotified).getTime();
    }


    callingWebSocket() {
        const ws = new SockJS(this.serverUrl);
        this.stompClient = Stomp.over(ws);
        let that = this;
        let admin_id = this.admin_id;
        let driver_Id = localStorage.getItem('driverData');
        this.stompClient.connect({}, function (frame) {
            that.sample(admin_id, driver_Id);
        });
    }

    sample(admin_id, driver_id) {
        let that = this;
        let subscription = that.stompClient.subscribe('/topic/' + admin_id + '/' + driver_id, (message) => {
            if (message) {
                that.chatMessages.push(JSON.parse(message.body));
                console.log(JSON.stringify(that.chatMessages));
            }
        });
    }

    user_id = localStorage.getItem("userData");

    sendMessagesToDriver(message: any) {
        if (message) {
            let present_date = new Date();
            this.chatErrorMsg = "";
            this.notificationData.userName = this.user_name;
            this.notificationData.from_id = this.driver_id;
            this.notificationData.to_id = this.admin_id;
            this.notificationData.data = message;
            this.notificationData.isNew = "1";
            this.notificationData.channel = "web_socket";
            this.notificationData.fromComponentName = "driver";
            this.notificationData.toComponentName = "administrator";
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

}
