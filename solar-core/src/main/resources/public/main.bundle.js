webpackJsonp([23,49],{

/***/ 1004:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(455);


/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Global; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Global = (function () {
    function Global() {
        // var socket = new SockJS(endponitConfig.WEBSOCKET_ENDPOINT);
        // Global.stompClient = Stomp.over(socket);
        // Global.stompClient.connect({}, (frame) => {
        // });
    }
    return Global;
}());
Global.offlineMessage = [];
Global = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], Global);

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userRoleGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var userRoleGuard = (function () {
    function userRoleGuard(router) {
        this.router = router;
    }
    userRoleGuard.prototype.canActivate = function (route, state) {
        var userRole = localStorage.getItem('userRole');
        var roles = route.data['roles'];
        var checkLoop = true;
        for (var i = 0; i < roles.length; i++) {
            if (checkLoop) {
                if (roles[i] === userRole) {
                    checkLoop = false;
                    return true;
                }
            }
        }
        this.router.navigate(['/login']);
        return false;
    };
    userRoleGuard.prototype.canActivateChild = function (route, state) {
        var userRole = localStorage.getItem('userRole');
        var roles = route.data['roles'];
        var checkLoop = true;
        for (var i = 0; i < roles.length; i++) {
            if (checkLoop) {
                if (roles[i] === userRole) {
                    checkLoop = false;
                    return true;
                }
            }
        }
        this.router.navigate(['/login']);
        return false;
    };
    return userRoleGuard;
}());
userRoleGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], userRoleGuard);

var _a;
//# sourceMappingURL=userRole.guard.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__languages_model__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_api_json_api_service__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18nService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var I18nService = (function () {
    function I18nService(jsonApiService, ref) {
        this.jsonApiService = jsonApiService;
        this.ref = ref;
        this.state = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.initLanguage(__WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].defaultLocale || 'us');
        this.fetch(this.currentLanguage.key);
    }
    I18nService.prototype.fetch = function (locale) {
        var _this = this;
        this.jsonApiService.fetch("/langs/" + locale + ".json")
            .subscribe(function (data) {
            _this.data = data;
            _this.state.next(data);
            _this.ref.tick();
        });
    };
    I18nService.prototype.initLanguage = function (locale) {
        var language = __WEBPACK_IMPORTED_MODULE_3__languages_model__["a" /* languages */].find(function (it) {
            return it.key == locale;
        });
        if (language) {
            this.currentLanguage = language;
        }
        else {
            throw new Error("Incorrect locale used for I18nService: " + locale);
        }
    };
    I18nService.prototype.setLanguage = function (language) {
        this.currentLanguage = language;
        this.fetch(language.key);
    };
    I18nService.prototype.subscribe = function (sub, err) {
        return this.state.subscribe(sub, err);
    };
    I18nService.prototype.getTranslation = function (phrase) {
        return this.data && this.data[phrase] ? this.data[phrase] : phrase;
    };
    return I18nService;
}());
I18nService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__core_api_json_api_service__["a" /* JsonApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_api_json_api_service__["a" /* JsonApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]) === "function" && _b || Object])
], I18nService);

var _a, _b;
//# sourceMappingURL=i18n.service.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_notification_service__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SoundService = SoundService_1 = (function () {
    function SoundService(alertNotificationService) {
        this.alertNotificationService = alertNotificationService;
        this.config = {
            basePath: __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].sound_path,
            mainExt: '.mp3',
            alternateExt: '.ogg',
        };
    }
    SoundService.prototype.get = function (name) {
        var _this = this;
        if (SoundService_1.cache[name]) {
            return Promise.resolve(SoundService_1.cache[name]);
        }
        else {
            return new Promise(function (resolve, reject) {
                var audioElement = document.createElement('audio');
                if (navigator.userAgent.match('Firefox/')) {
                    audioElement.setAttribute('src', _this.config.basePath + name + _this.config.alternateExt);
                }
                else {
                    audioElement.setAttribute('src', _this.config.basePath + name + _this.config.mainExt);
                }
                audioElement.addEventListener('error', reject);
                audioElement.load();
                SoundService_1.cache[name] = audioElement;
                resolve(audioElement);
            });
        }
    };
    SoundService.prototype.play = function (name) {
        if (__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].sound_on) {
            this.get(name).then(function (audio) {
                audio.play();
            });
        }
    };
    SoundService.prototype.mute = function () {
        __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].sound_on = false;
        this.alertNotificationService.smallBox({
            title: "MUTE",
            content: "All sounds have been muted!",
            color: "#a90329",
            timeout: 4000,
            icon: "fa fa-volume-off"
        });
    };
    SoundService.prototype.soundOn = function () {
        __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].sound_on = true;
        this.alertNotificationService.smallBox({
            title: "UNMUTE",
            content: "All sounds have been turned on!",
            color: "#40ac2b",
            sound_file: 'voice_alert',
            timeout: 5000,
            icon: "fa fa-volume-up"
        });
    };
    return SoundService;
}());
SoundService.cache = {};
SoundService = SoundService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__utils_notification_service__["a" /* AlertNotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__utils_notification_service__["a" /* AlertNotificationService */]) === "function" && _a || Object])
], SoundService);

var SoundService_1, _a;
//# sourceMappingURL=sound.service.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_info_login_info_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__ = __webpack_require__(523);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__login_info_login_info_component__["a" /* LoginInfoComponent */], __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__["a" /* LogoutComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__login_info_login_info_component__["a" /* LoginInfoComponent */], __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__["a" /* LogoutComponent */]]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commands_help_component__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sound_sound_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__speech_recognition_api__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__voice_recognition_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_notification_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_body_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layout_layout_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoiceControlService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var VoiceControlService = VoiceControlService_1 = (function () {
    function VoiceControlService(componentFactoryResolver, app, soundService, voiceRecognitionService, alertNotificationService, bodyService, router, layoutService) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.app = app;
        this.soundService = soundService;
        this.voiceRecognitionService = voiceRecognitionService;
        this.alertNotificationService = alertNotificationService;
        this.bodyService = bodyService;
        this.router = router;
        this.layoutService = layoutService;
        this.state = {
            enabled: !!__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].voice_command,
            available: false,
            autoStart: !!__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].voice_command_auto,
            localStorage: !!__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].voice_localStorage,
            lang: __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].voice_command_lang,
            started: false,
        };
        this.helpShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.state.available = !!__WEBPACK_IMPORTED_MODULE_4__speech_recognition_api__["a" /* SpeechRecognition */];
        if (__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].voice_command_auto) {
            this.voiceControlOn();
        }
        this.voiceRecognitionService.events.subscribe(function (event) {
            switch (event.type) {
                case 'start':
                    _this.bodyService.removeClass("service-not-allowed");
                    _this.bodyService.addClass("service-allowed");
                    break;
                case 'error':
                    _this.bodyService.removeClass("service-allowed");
                    _this.bodyService.addClass("service-not-allowed");
                    break;
                case 'match':
                    _this.alertNotificationService.smallBox({
                        title: event.payload,
                        content: "loading...",
                        color: "#333",
                        sound_file: 'voice_alert',
                        timeout: 2000
                    });
                    break;
                case 'no match':
                    _this.alertNotificationService.smallBox({
                        title: "Error: <strong>" + ' " ' + event.payload + ' " ' + "</strong> no match found!",
                        content: "Please speak clearly into the microphone",
                        color: "#a90329",
                        timeout: 5000,
                        icon: "fa fa-microphone"
                    });
                    break;
                case 'action':
                    _this.respondToAction(event);
                    break;
            }
        });
    }
    VoiceControlService.prototype.attachHelp = function () {
        if (this.state.available && !VoiceControlService_1.helpModal) {
            var component = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__commands_help_component__["a" /* CommandsHelpComponent */]);
            var viewContainerRef = this.app['_rootComponents'][0]._component.viewContainerRef;
            VoiceControlService_1.helpModal = viewContainerRef.createComponent(component, viewContainerRef.length);
        }
    };
    VoiceControlService.prototype.showHelp = function () {
        var _this = this;
        setTimeout(function () {
            // debugger
            VoiceControlService_1.helpModal._component.show();
            _this.helpShown.next(true);
        }, 50);
    };
    VoiceControlService.prototype.hideHelp = function () {
        VoiceControlService_1.helpModal && VoiceControlService_1.helpModal._component.hide();
    };
    VoiceControlService.prototype.voiceControlOn = function () {
        this.soundService.play('voice_on');
        if (!this.voiceRecognitionService.commandsList.length) {
            this.voiceRecognitionService.addCommands(__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].voice_commands);
        }
        this.voiceRecognitionService.start();
        this.state.started = true;
        this.bodyService.addClass('voice-command-active');
    };
    VoiceControlService.prototype.voiceControlOff = function () {
        this.soundService.play('voice_off');
        this.voiceRecognitionService.abort();
        this.state.started = false;
        this.bodyService.removeClass('voice-command-active');
    };
    VoiceControlService.prototype.respondToAction = function (action) {
        switch (action.actionType) {
            case 'voice':
                switch (action.payload) {
                    case 'help on':
                        this.showHelp();
                        break;
                    case 'help off':
                        this.hideHelp();
                        break;
                    case 'stop':
                        this.voiceControlOff();
                        this.alertNotificationService.smallBox({
                            title: "VOICE COMMAND OFF",
                            content: "Your voice commands has been successfully turned off. Click on the <i class='fa fa-microphone fa-lg fa-fw'></i> icon to turn it back on.",
                            color: "#40ac2b",
                            sound_file: 'voice_off',
                            timeout: 8000,
                            icon: "fa fa-microphone-slash"
                        });
                        break;
                }
                break;
            case 'navigate':
                this.router.navigate(action.payload);
                break;
            case 'layout':
                switch (action.payload) {
                    case 'show navigation':
                        this.layoutService.onCollapseMenu(false);
                        break;
                    case 'hide navigation':
                        this.layoutService.onCollapseMenu(true);
                        break;
                }
                break;
            case 'sound':
                switch (action.payload) {
                    case 'mute':
                        this.soundService.mute();
                        break;
                    case 'sound on':
                        this.soundService.soundOn();
                        break;
                }
                break;
        }
    };
    return VoiceControlService;
}());
VoiceControlService = VoiceControlService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__sound_sound_service__["a" /* SoundService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__sound_sound_service__["a" /* SoundService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__voice_recognition_service__["a" /* VoiceRecognitionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__voice_recognition_service__["a" /* VoiceRecognitionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__utils_notification_service__["a" /* AlertNotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__utils_notification_service__["a" /* AlertNotificationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__utils_body_service__["a" /* BodyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__utils_body_service__["a" /* BodyService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9__layout_layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__layout_layout_service__["a" /* LayoutService */]) === "function" && _h || Object])
], VoiceControlService);

var VoiceControlService_1, _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=voice-control.service.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_selector_language_selector_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n_pipe__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__i18n_service__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18nModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var I18nModule = (function () {
    function I18nModule() {
    }
    return I18nModule;
}());
I18nModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["f" /* BsDropdownModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__language_selector_language_selector_component__["a" /* LanguageSelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_2__i18n_pipe__["a" /* I18nPipe */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__language_selector_language_selector_component__["a" /* LanguageSelectorComponent */], __WEBPACK_IMPORTED_MODULE_2__i18n_pipe__["a" /* I18nPipe */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__i18n_service__["a" /* I18nService */]]
    })
], I18nModule);

//# sourceMappingURL=i18n.module.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_endpoints__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isLoggedIn = false;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.loggersheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        this.loggersheaders.append('Authorization', localStorage.getItem('Authentication'));
        this.loggersheaders.append('Content-Type', 'application/json');
    }
    /** User Authentication */
    AuthService.prototype.login = function (username, password) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        localStorage.setItem('Authentication', '');
        localStorage.setItem('Authentication', btoa(username + ':' + password));
        this.headers.append('Authorization', localStorage.getItem('Authentication'));
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__environments_endpoints__["a" /* endponitConfig */].USER_API_ENDPOINT + 'getUserByEmail/' + username, { headers: this.headers })
            .map(function (response) {
            return response.json();
        });
    };
    /** User Authentication */
    AuthService.prototype.userAuthentication = function (username, password) {
        localStorage.setItem('Authentication', '');
        var headers1 = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body = 'username=' + username + '&password=' + password;
        return this.http.post('login', body, { headers: headers1 }).map(function (response) {
            localStorage.setItem('Authentication', response.headers.get('Authorization'));
            return response;
        });
    };
    AuthService.prototype.getUserDetailsByEmail = function (email) {
        var headers1 = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers1.append('Authorization', localStorage.getItem('Authentication'));
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__environments_endpoints__["a" /* endponitConfig */].USER_API_ENDPOINT + 'getUserByEmail/' + email, { headers: headers1 }).map(function (response) {
            return response.json();
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.setItem('currentUser', '');
        localStorage.setItem('Authentication', '');
        localStorage.setItem('userData', '');
        localStorage.setItem('userRole', '');
        this.isLoggedIn = false;
    };
    AuthService.prototype.solarHealthItems = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__environments_endpoints__["a" /* endponitConfig */].SOLAR_ACTUTATOR_ENDPOINT + 'health', { headers: this.loggersheaders })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    AuthService.prototype.calendarHealthItems = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__environments_endpoints__["a" /* endponitConfig */].CALENDAR_ACTUTATOR_ENDPOINT + 'health', { headers: this.loggersheaders })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loggerItems = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__environments_endpoints__["a" /* endponitConfig */].SOLAR_ACTUTATOR_ENDPOINT + 'loggers', { headers: this.loggersheaders })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    AuthService.prototype.updateLoggerEffectiveLevell = function (loggerLevels) {
        var data = { 'configuredLevel': loggerLevels.effectiveLevel };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_endpoints__["a" /* endponitConfig */].SOLAR_ACTUTATOR_ENDPOINT + 'loggers/' +
            loggerLevels.loggerName, data, { headers: this.loggersheaders }).map(function (response) { }).catch(this.handleError);
    };
    AuthService.prototype.userRegister = function (userData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        //  this.headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_endpoints__["a" /* endponitConfig */].USER_API_ENDPOINT + 'registerUser', JSON.stringify(userData), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.userOTP = function (otp, userpassword) {
        var userId = localStorage.getItem('userData');
        if (!userId) {
            userId = ' ';
        }
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_endpoints__["a" /* endponitConfig */].USER_API_ENDPOINT + 'setPassword/' + userId + '/' + otp + '/' + userpassword, '', { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.userForgotPassword = function (email, phone) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_endpoints__["a" /* endponitConfig */].USER_API_ENDPOINT + 'forgotPassword/' + email + '/' + phone, '', { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.handleError = function (error) {
        if (error.status === 401) {
            localStorage.setItem('status', '401');
            // 401 unauthorized response so log user out of client
            window.location.href = '/#/error';
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error._body);
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = FadeZoomInTop;
/**
 * Created by griga on 12/26/16.
 */
function FadeZoomInTop() {
    var __ref__ = window['Reflect'];
    function parseMeta(metaInformation) {
        for (var _i = 0, metaInformation_1 = metaInformation; _i < metaInformation_1.length; _i++) {
            var metadata = metaInformation_1[_i]; //metadata is @Component metadata
            // decorator logic goes here
            // metadata.animations = [fadeZoomInTop()];
            // metadata.host = {"[@fadeZoomInTop]": ''};
        }
    }
    //value represents the annotation parameter(s)
    return function (target) {
        var metaInformation = __ref__.getOwnMetadata('annotations', target);
        if (metaInformation) {
            parseMeta(metaInformation);
        }
    };
}
//# sourceMappingURL=fade-zoom-in-top.decorator.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return languages; });
var languages = [
    {
        "key": "us",
        "alt": "United States",
        "title": "English (US)"
    },
    {
        "key": "fr",
        "alt": "France",
        "title": "Français"
    },
    {
        "key": "es",
        "alt": "Spanish",
        "title": "Español"
    },
    {
        "key": "de",
        "alt": "German",
        "title": "Deutsch"
    },
    {
        "key": "jp",
        "alt": "Japan",
        "title": "日本語"
    },
    {
        "key": "cn",
        "alt": "China",
        "title": "中文"
    },
    {
        "key": "zh",
        "alt": "Chinese",
        "title": "汉语/漢語"
    },
    {
        "key": "pt",
        "alt": "Portugal",
        "title": "Portugal"
    },
    {
        "key": "ru",
        "alt": "Russia",
        "title": "Русский язык"
    },
    {
        "key": "kr",
        "alt": "Korea",
        "title": "한국어"
    }
];
//# sourceMappingURL=languages.model.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthLayoutComponent = (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    return AuthLayoutComponent;
}());
AuthLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-auth-layout',
        template: __webpack_require__(724),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], AuthLayoutComponent);

//# sourceMappingURL=auth-layout.component.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_fade_zoom_in_top_decorator__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainLayoutComponent = (function () {
    function MainLayoutComponent(router) {
        this.router = router;
    }
    MainLayoutComponent.prototype.ngOnInit = function () {
    };
    return MainLayoutComponent;
}());
MainLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animations_fade_zoom_in_top_decorator__["a" /* FadeZoomInTop */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main-layout',
        template: __webpack_require__(726),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object])
], MainLayoutComponent);

var _a;
//# sourceMappingURL=main-layout.component.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_endpoints__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthJsonApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HealthJsonApiService = (function () {
    function HealthJsonApiService(http) {
        this.http = http;
    }
    HealthJsonApiService.prototype.fetch = function (url) {
        return this.http.get(this.getBaseUrl() + __WEBPACK_IMPORTED_MODULE_2__environments_endpoints__["a" /* endponitConfig */].API_URL + url)
            .delay(100)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HealthJsonApiService.prototype.getBaseUrl = function () {
        return location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/';
    };
    HealthJsonApiService.prototype.extractData = function (res) {
        var body = res.json();
        if (body) {
            return body.data || body;
        }
        else {
            return {};
        }
    };
    HealthJsonApiService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(errMsg);
    };
    return HealthJsonApiService;
}());
HealthJsonApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HealthJsonApiService);

var _a;
//# sourceMappingURL=health.service.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyService = (function () {
    function BodyService() {
        this.$body = $('body');
    }
    BodyService.prototype.addClass = function (className) {
        this.$body.addClass(className);
    };
    BodyService.prototype.removeClass = function (className) {
        this.$body.removeClass(className);
    };
    BodyService.prototype.toggleClass = function (className, state) {
        this.$body.toggleClass(className, state);
    };
    return BodyService;
}());
BodyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], BodyService);

//# sourceMappingURL=body.service.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommandsHelpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommandsHelpComponent = (function () {
    function CommandsHelpComponent() {
    }
    CommandsHelpComponent.prototype.ngOnInit = function () {
    };
    CommandsHelpComponent.prototype.show = function () {
        this.seeCommandsModal.show();
    };
    CommandsHelpComponent.prototype.hide = function () {
        this.seeCommandsModal.hide();
    };
    return CommandsHelpComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('seeCommandsModal'),
    __metadata("design:type", Object)
], CommandsHelpComponent.prototype, "seeCommandsModal", void 0);
CommandsHelpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-commands-help',
        template: __webpack_require__(743),
        styles: [],
    }),
    __metadata("design:paramtypes", [])
], CommandsHelpComponent);

//# sourceMappingURL=commands-help.component.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechRecognition; });
var SpeechRecognition = (window['SpeechRecognition'] || window['webkitSpeechRecognition'] || window['mozSpeechRecognition'] || window['msSpeechRecognition']);
//# sourceMappingURL=speech-recognition.api.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_notification_service__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var store = {
    // localStorage.getItem('sm-skin')
    smartSkin: 'smart-style-5' || __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].smartSkin,
    skin: __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].skins.find(function (_skin) {
        return _skin.name == (localStorage.getItem('sm-skin') || __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].smartSkin);
    }),
    skins: __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].skins,
    fixedHeader: localStorage.getItem('sm-fixed-header') == 'true',
    fixedNavigation: localStorage.getItem('sm-fixed-navigation') == 'true',
    fixedRibbon: localStorage.getItem('sm-fixed-ribbon') == 'true',
    fixedPageFooter: localStorage.getItem('sm-fixed-page-footer') == 'true',
    insideContainer: localStorage.getItem('sm-inside-container') == 'true',
    rtl: localStorage.getItem('sm-rtl') == 'true',
    menuOnTop: localStorage.getItem('sm-menu-on-top') == 'true',
    colorblindFriendly: localStorage.getItem('sm-colorblind-friendly') == 'true',
    shortcutOpen: false,
    isMobile: (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())),
    device: '',
    mobileViewActivated: false,
    menuCollapsed: false,
    menuMinified: false,
};
var LayoutService = (function () {
    function LayoutService(alertNotificationService) {
        var _this = this;
        this.alertNotificationService = alertNotificationService;
        localStorage.setItem('sm-skin', 'smart-style-1');
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.store = store;
        this.trigger();
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].fromEvent(window, 'resize').debounceTime(100).map(function () {
            _this.trigger();
        }).subscribe();
    }
    LayoutService.prototype.trigger = function () {
        this.processBody(this.store);
        this.subject.next(this.store);
    };
    LayoutService.prototype.subscribe = function (next, err, complete) {
        return this.subject.subscribe(next, err, complete);
    };
    LayoutService.prototype.onSmartSkin = function (skin) {
        this.store.skin = skin;
        this.store.smartSkin = skin.name;
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onFixedHeader = function () {
        this.store.fixedHeader = !this.store.fixedHeader;
        if (this.store.fixedHeader == false) {
            this.store.fixedRibbon = false;
            this.store.fixedNavigation = false;
        }
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onFixedNavigation = function () {
        this.store.fixedNavigation = !this.store.fixedNavigation;
        if (this.store.fixedNavigation) {
            this.store.insideContainer = false;
            this.store.fixedHeader = true;
        }
        else {
            this.store.fixedRibbon = false;
        }
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onFixedRibbon = function () {
        this.store.fixedRibbon = !this.store.fixedRibbon;
        if (this.store.fixedRibbon) {
            this.store.fixedHeader = true;
            this.store.fixedNavigation = true;
            this.store.insideContainer = false;
        }
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onFixedPageFooter = function () {
        this.store.fixedPageFooter = !this.store.fixedPageFooter;
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onInsideContainer = function () {
        this.store.insideContainer = !this.store.insideContainer;
        if (this.store.insideContainer) {
            this.store.fixedRibbon = false;
            this.store.fixedNavigation = false;
        }
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onRtl = function () {
        this.store.rtl = !this.store.rtl;
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onMenuOnTop = function () {
        this.store.menuOnTop = !this.store.menuOnTop;
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onColorblindFriendly = function () {
        this.store.colorblindFriendly = !this.store.colorblindFriendly;
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onCollapseMenu = function (value) {
        if (typeof value !== 'undefined') {
            this.store.menuCollapsed = value;
        }
        else {
            this.store.menuCollapsed = !this.store.menuCollapsed;
        }
        this.trigger();
    };
    LayoutService.prototype.onMinifyMenu = function () {
        this.store.menuMinified = !this.store.menuMinified;
        this.trigger();
    };
    LayoutService.prototype.onShortcutToggle = function (condition) {
        if (condition == null) {
            this.store.shortcutOpen = !this.store.shortcutOpen;
        }
        else {
            this.store.shortcutOpen = !!condition;
        }
        this.trigger();
    };
    LayoutService.prototype.dumpStorage = function () {
        localStorage.setItem('sm-skin', this.store.smartSkin);
        localStorage.setItem('sm-fixed-header', this.store.fixedHeader);
        localStorage.setItem('sm-fixed-navigation', this.store.fixedNavigation);
        localStorage.setItem('sm-fixed-ribbon', this.store.fixedRibbon);
        localStorage.setItem('sm-fixed-page-footer', this.store.fixedPageFooter);
        localStorage.setItem('sm-inside-container', this.store.insideContainer);
        localStorage.setItem('sm-rtl', this.store.rtl);
        localStorage.setItem('sm-menu-on-top', this.store.menuOnTop);
        localStorage.setItem('sm-colorblind-friendly', this.store.colorblindFriendly);
    };
    LayoutService.prototype.factoryReset = function () {
        this.alertNotificationService.smartMessageBox({
            title: "<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage",
            content: "Would you like to RESET all your saved widgets and clear LocalStorage?",
            buttons: '[No][Yes]'
        }, function (ButtonPressed) {
            if (ButtonPressed == "Yes" && localStorage) {
                localStorage.clear();
                location.reload();
            }
        });
    };
    LayoutService.prototype.processBody = function (state) {
        var $body = $('body');
        $body.removeClass(state.skins.map(function (it) { return (it.name); }).join(' '));
        $body.addClass(state.skin.name);
        $("#logo img").attr('src', state.skin.logo);
        $body.toggleClass('fixed-header', state.fixedHeader);
        $body.toggleClass('fixed-navigation', state.fixedNavigation);
        $body.toggleClass('fixed-ribbon', state.fixedRibbon);
        $body.toggleClass('fixed-page-footer', state.fixedPageFooter);
        $body.toggleClass('container', state.insideContainer);
        $body.toggleClass('smart-rtl', state.rtl);
        $body.toggleClass('menu-on-top', state.menuOnTop);
        $body.toggleClass('colorblind-friendly', state.colorblindFriendly);
        $body.toggleClass('shortcut-on', state.shortcutOpen);
        state.mobileViewActivated = $(window).width() < 979;
        $body.toggleClass('mobile-view-activated', state.mobileViewActivated);
        if (state.mobileViewActivated) {
            $body.removeClass('minified');
        }
        if (state.isMobile) {
            $body.addClass("mobile-detected");
        }
        else {
            $body.addClass("desktop-detected");
        }
        if (state.menuOnTop)
            $body.removeClass('minified');
        if (!state.menuOnTop) {
            $body.toggleClass("hidden-menu-mobile-lock", state.menuCollapsed);
            $body.toggleClass("hidden-menu", state.menuCollapsed);
            $body.removeClass("minified");
        }
        else if (state.menuOnTop && state.mobileViewActivated) {
            $body.toggleClass("hidden-menu-mobile-lock", state.menuCollapsed);
            $body.toggleClass("hidden-menu", state.menuCollapsed);
            $body.removeClass("minified");
        }
        if (state.menuMinified && !state.menuOnTop && !state.mobileViewActivated) {
            $body.addClass("minified");
            $body.removeClass("hidden-menu");
            $body.removeClass("hidden-menu-mobile-lock");
        }
    };
    return LayoutService;
}());
LayoutService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__utils_notification_service__["a" /* AlertNotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__utils_notification_service__["a" /* AlertNotificationService */]) === "function" && _a || Object])
], LayoutService);

var _a;
//# sourceMappingURL=layout.service.js.map

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./+auth/+error/+error404/error404.module": [
		1014,
		20
	],
	"./+auth/+error/+error500/error500.module": [
		1008,
		19
	],
	"./+auth/+error/error.module": [
		489,
		3
	],
	"./+auth/+forgot/forgot.module": [
		490,
		2
	],
	"./+auth/+locked/locked.module": [
		491,
		4
	],
	"./+auth/+login/login.module": [
		492,
		1
	],
	"./+auth/+otp/otp.module": [
		493,
		5
	],
	"./+auth/+register/register.module": [
		494,
		0
	],
	"./+error/error.module": [
		489,
		3
	],
	"./+forgot/forgot.module": [
		490,
		2
	],
	"./+locked/locked.module": [
		491,
		4
	],
	"./+login/login.module": [
		492,
		1
	],
	"./+otp/otp.module": [
		493,
		5
	],
	"./+register/register.module": [
		494,
		0
	],
	"./+reports/report.module": [
		1009,
		12
	],
	"./+template/template.module": [
		1010,
		10
	],
	"./+users/users.module": [
		1011,
		17
	],
	"./+widgets/widget.module": [
		1012,
		11
	],
	"app/+admin/admin.module": [
		1013,
		13
	],
	"app/+auth/auth.module": [
		1015,
		21
	],
	"app/+calendar/calendar.module": [
		1016,
		18
	],
	"app/+dashboard/dashboard.module": [
		1017,
		6
	],
	"app/+dc_manager/dc_manager.module": [
		1018,
		15
	],
	"app/+drivers/drivers.module": [
		1019,
		8
	],
	"app/+loads/loads.module": [
		1020,
		7
	],
	"app/+locations/locations.module": [
		1021,
		9
	],
	"app/+notifications/notifications.module": [
		1022,
		16
	],
	"app/+vendors/vendors.module": [
		1023,
		14
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 454;


/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_shared_global__ = __webpack_require__(125);






if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */], [__WEBPACK_IMPORTED_MODULE_5__app_shared_global__["a" /* Global */]]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_module__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_module__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ribbon_ribbon_component__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shortcut_shortcut_component__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layout_switcher_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_layouts_main_layout_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_layouts_empty_layout_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_layouts_auth_layout_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ribbon_route_breadcrumbs_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_utils_module__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartadminLayoutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var SmartadminLayoutModule = (function () {
    function SmartadminLayoutModule() {
    }
    return SmartadminLayoutModule;
}());
SmartadminLayoutModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__header_header_module__["a" /* HeaderModule */],
            __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_module__["a" /* NavigationModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_11__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_15__utils_utils_module__["a" /* UtilsModule */],
            __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__["e" /* TooltipModule */],
            __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__["f" /* BsDropdownModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__ribbon_ribbon_component__["a" /* RibbonComponent */],
            __WEBPACK_IMPORTED_MODULE_7__shortcut_shortcut_component__["a" /* ShortcutComponent */],
            __WEBPACK_IMPORTED_MODULE_8__layout_switcher_component__["a" /* LayoutSwitcherComponent */],
            __WEBPACK_IMPORTED_MODULE_9__app_layouts_main_layout_component__["a" /* MainLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_10__app_layouts_empty_layout_component__["a" /* EmptyLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_12__app_layouts_auth_layout_component__["a" /* AuthLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_14__ribbon_route_breadcrumbs_component__["a" /* RouteBreadcrumbsComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__header_header_module__["a" /* HeaderModule */],
            __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_module__["a" /* NavigationModule */],
            __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__ribbon_ribbon_component__["a" /* RibbonComponent */],
            __WEBPACK_IMPORTED_MODULE_7__shortcut_shortcut_component__["a" /* ShortcutComponent */],
            __WEBPACK_IMPORTED_MODULE_8__layout_switcher_component__["a" /* LayoutSwitcherComponent */],
        ]
    })
], SmartadminLayoutModule);

//# sourceMappingURL=layout.module.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activities_service__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_endpoints__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendar_shared_events_service__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_notification_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { CalendarWidgetComponent } from '../../../../+calendar/calendar-widget/calendar-widget.component';



var ActivitiesComponent = (function () {
    function ActivitiesComponent(service, el, renderer, activitiesService, router, eventsService, viewContainerRef, alertNotificationService) {
        this.service = service;
        this.el = el;
        this.renderer = renderer;
        this.activitiesService = activitiesService;
        this.router = router;
        this.eventsService = eventsService;
        this.viewContainerRef = viewContainerRef;
        this.alertNotificationService = alertNotificationService;
        this.userUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventListData = [];
        this.noNotifications = false;
        this.active = false;
        this.loading = false;
        this.activities = [];
        this.lastUpdate = new Date();
        this.grouped = [];
        // this.notificationCount();
        // this.calendar();
        //  this.webSocketConnection();
    }
    ActivitiesComponent.prototype.ngOnInit = function () {
        this.calendar();
        this.notificationCount();
        this.webSocketConnection();
    };
    ActivitiesComponent.prototype.notificationCount = function () {
        var _this = this;
        this.activitiesService.getNotifications().subscribe(function (data) {
            if (data.data) {
                _this.noNotifications = false;
                _this.notificationDataCount = data.data.length;
                _this.notificationDataCount = data.data.reduce(function (count, item) {
                    return count + (item['readStatus'] === 1 ? 1 : 0);
                }, 0);
                _this.currentActivity = data.data.sort(function (a, b) {
                    return a.lastUpdateTime < b.lastUpdateTime ? 1 : -1;
                }).slice(0, 5);
                if (_this.calendarDataCount == undefined || _this.notificationDataCount == undefined) {
                    _this.notificationDataCount = 0;
                    _this.calendarDataCount = 0;
                }
                // temp calender count is 0
                _this.calendarDataCount = 0;
                _this.count = Number(_this.notificationDataCount) + Number(_this.calendarDataCount);
                _this.notificationEventsList();
                _this.currentActivityHeader = _this.activitiesHeaders[0].data;
            }
            else {
                if (data.error.message) {
                    _this.notificationDataCount = 0;
                    _this.calendarDataCount = 0;
                    _this.count = 0;
                    _this.noNotifications = true;
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    ActivitiesComponent.prototype.notificationEventsList = function () {
        this.activitiesHeaders = [{ data: 'notifications', count: Number(this.notificationDataCount) }, { data: 'calendar', count: Number(this.calendarDataCount) }];
    };
    ActivitiesComponent.prototype.websocketNotificationCount = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Global */].stompClient.subscribe('/topic/' + localStorage.getItem('userData') + '/notificationCount', function (response) {
            _this.count = response.body;
            // this.notificationAlert()
            // console.log('websocketNotificationCount' + JSON.stringify(response))
            // this.notificationCount()
        });
    };
    ActivitiesComponent.prototype.calendar = function () {
        var _this = this;
        var startTime = __WEBPACK_IMPORTED_MODULE_7_moment__().startOf('day').toDate();
        var endTime = __WEBPACK_IMPORTED_MODULE_7_moment__().endOf('day').toDate();
        this.eventsService.getFilterDateEvents(__WEBPACK_IMPORTED_MODULE_7_moment__(startTime).format(), __WEBPACK_IMPORTED_MODULE_7_moment__(endTime).format()).then(function (response) {
            _this.notificationCount();
            _this.eventsListResponse = response;
            if (response) {
                // this.calendarDataCount = this.eventsListResponse.data.length;
                _this.eventListData = _this.eventsListResponse.data.sort(function (a, b) {
                    return a.start > b.start ? 1 : -1;
                });
                // .slice(0, 5);
            }
        });
    };
    ActivitiesComponent.prototype.onEventNavigation = function (date) {
        var dropdown = $('.ajax-dropdown', this.el.nativeElement);
        this.active = false;
        dropdown.fadeOut();
        var goDate = date.split('T');
        var link = ['/calendar', { date: goDate[0] }];
        this.router.navigate(link);
    };
    ActivitiesComponent.prototype.webSocketConnection = function () {
        var _this = this;
        var socket = new SockJS(__WEBPACK_IMPORTED_MODULE_3__environments_endpoints__["a" /* endponitConfig */].WEBSOCKET_ENDPOINT);
        __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Global */].stompClient = Stomp.over(socket);
        __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Global */].stompClient.connect({}, function (frame) {
            _this.getAllEventsCodes();
            _this.websocketNotificationCount();
        });
    };
    ActivitiesComponent.prototype.getAllEventsCodes = function () {
        var _this = this;
        this.activitiesService.getAllWebSocketConnections().subscribe(function (data) {
            if (data) {
                data.forEach(function (eventCode) {
                    _this.subscribeEventsOnSelection(eventCode);
                    // Global.stompClient.subscribe('/topic/' + localStorage.getItem('userData') + '/' + eventCode, (response) => {
                    //     console.log('websocket response' + JSON.stringify(response))
                    //     //  this.count = this.count + 1;
                    //     this.notificationCount();
                    //     this.notificationAlert(response.body)
                    // });
                });
            }
        }, function (error) {
        });
    };
    ActivitiesComponent.prototype.subscribeEventsOnSelection = function (eventCode) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Global */].stompClient.subscribe('/topic/' + localStorage.getItem('userData') + '/' + eventCode, function (response) {
            //  this.count = this.count + 1;
            //  this.websocketNotificationCount();
            _this.notificationCount();
            _this.notificationAlert(response.body);
        });
    };
    ActivitiesComponent.prototype.notificationAlert = function (body) {
        this.alertNotificationService.smallBox({
            title: 'New Notification',
            content: body,
            color: '#296191',
            iconSmall: 'fa fa-thumbs-up bounce animated',
            timeout: 4000
        });
    };
    ActivitiesComponent.prototype.setActivity = function (activity) {
        this.currentActivityHeader = activity;
    };
    ActivitiesComponent.prototype.onToggle = function () {
        var _this = this;
        this.calendar();
        this.notificationCount();
        var dropdown = $('.ajax-dropdown', this.el.nativeElement);
        this.active = !this.active;
        if (this.active) {
            dropdown.fadeIn();
            this.documentSub = this.renderer.listenGlobal('document', 'mouseup', function (event) {
                if (!_this.el.nativeElement.contains(event.target)) {
                    dropdown.fadeOut();
                    _this.active = false;
                    _this.documentUnsub();
                }
            });
        }
        else {
            dropdown.fadeOut();
            this.documentUnsub();
        }
    };
    ActivitiesComponent.prototype.update = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.lastUpdate = new Date();
            _this.loading = false;
        }, 1000);
        this.active = false;
        $('.ajax-dropdown', this.el.nativeElement).fadeOut();
        var link = ['/notifications/notificationssettings'];
        this.router.navigate(link);
    };
    ActivitiesComponent.prototype.notificationsList = function () {
        var _this = this;
        this.activitiesService.updateNotificationReadStatus().subscribe(function (data) {
            _this.count = 0;
            _this.calendarDataCount = 0;
            _this.notificationDataCount = 0;
            _this.getNotificationCountAfterRead();
        }, function (error) {
        });
    };
    ActivitiesComponent.prototype.getNotificationCountAfterRead = function () {
        var _this = this;
        this.activitiesService.getNotificationCount().subscribe(function (data) {
            // if (data) {
            _this.notificationCount();
            _this.count = Number(data);
            _this.active = false;
            $('.ajax-dropdown', _this.el.nativeElement).fadeOut();
            var link = ['/notifications/notificationslist', { data: 'notificationsList' }];
            // let link = ['/notifications/notificationslist'];
            _this.router.navigate(link);
            // }
        }, function (error) {
        });
    };
    ActivitiesComponent.prototype.calendarEventsList = function () {
        this.active = false;
        $('.ajax-dropdown', this.el.nativeElement).fadeOut();
        var link = ['/notifications/notificationslist', { data: 'calendarsList' }];
        this.router.navigate(link);
        // let link = ['/notifications/notificationslist'];
        // this.router.navigate(link);
    };
    ActivitiesComponent.prototype.changeReadStatus = function (eventData) {
        var _this = this;
        if (eventData.readStatus === 1) {
            this.activitiesService.setReadStatus(eventData.id).subscribe(function (data) {
                eventData.readStatus = 0;
                _this.notificationDataCount--;
                _this.count = _this.notificationDataCount;
                _this.notificationEventsList();
            }, function (error) {
                console.log(error);
            });
        }
    };
    ActivitiesComponent.prototype.ngOnDestroy = function () {
        this.documentUnsub();
    };
    ActivitiesComponent.prototype.documentUnsub = function () {
        this.documentSub && this.documentSub();
        this.documentSub = null;
    };
    return ActivitiesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ActivitiesComponent.prototype, "userUpdated", void 0);
ActivitiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-activities',
        template: __webpack_require__(731),
        providers: [__WEBPACK_IMPORTED_MODULE_1__activities_service__["a" /* ActivitiesService */], __WEBPACK_IMPORTED_MODULE_5__calendar_shared_events_service__["a" /* EventsService */], __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Global */]],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Global */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Global */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__activities_service__["a" /* ActivitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__activities_service__["a" /* ActivitiesService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__calendar_shared_events_service__["a" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__calendar_shared_events_service__["a" /* EventsService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__utils_notification_service__["a" /* AlertNotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__utils_notification_service__["a" /* AlertNotificationService */]) === "function" && _h || Object])
], ActivitiesComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=activities.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_widget_chat_widget_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widgets_smartadmin_widgets_module__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat_users_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_chat_body_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_chat_form_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_utils_module__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_user_module__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aside_chat_aside_chat_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aside_chat_user_aside_chat_user_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_popover__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ngx_popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var ChatModule = (function () {
    function ChatModule() {
    }
    return ChatModule;
}());
ChatModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_14_ngx_popover__["PopoverModule"], __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap__["f" /* BsDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_9__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_10__utils_utils_module__["a" /* UtilsModule */], __WEBPACK_IMPORTED_MODULE_11__user_user_module__["a" /* UserModule */], __WEBPACK_IMPORTED_MODULE_3__widgets_smartadmin_widgets_module__["a" /* SmartadminWidgetsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__chat_widget_chat_widget_component__["a" /* ChatWidgetComponent */], __WEBPACK_IMPORTED_MODULE_5__chat_chat_component__["a" /* ChatComponent */], __WEBPACK_IMPORTED_MODULE_6__chat_chat_users_component__["a" /* ChatUsersComponent */], __WEBPACK_IMPORTED_MODULE_7__chat_chat_body_component__["a" /* ChatBodyComponent */], __WEBPACK_IMPORTED_MODULE_8__chat_chat_form_component__["a" /* ChatFormComponent */], __WEBPACK_IMPORTED_MODULE_12__aside_chat_aside_chat_component__["a" /* AsideChatComponent */], __WEBPACK_IMPORTED_MODULE_13__aside_chat_user_aside_chat_user_component__["a" /* AsideChatUserComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__chat_widget_chat_widget_component__["a" /* ChatWidgetComponent */], __WEBPACK_IMPORTED_MODULE_12__aside_chat_aside_chat_component__["a" /* AsideChatComponent */], __WEBPACK_IMPORTED_MODULE_13__aside_chat_user_aside_chat_user_component__["a" /* AsideChatUserComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__chat_service__["a" /* ChatService */]]
    })
], ChatModule);

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-footer',
        template: __webpack_require__(727)
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesMessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivitiesMessageComponent = (function () {
    function ActivitiesMessageComponent() {
    }
    ActivitiesMessageComponent.prototype.ngOnInit = function () { };
    return ActivitiesMessageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ActivitiesMessageComponent.prototype, "item", void 0);
ActivitiesMessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '[activitiesMessage]',
        template: __webpack_require__(728),
    }),
    __metadata("design:paramtypes", [])
], ActivitiesMessageComponent);

//# sourceMappingURL=activities-message.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesNotificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivitiesNotificationComponent = (function () {
    function ActivitiesNotificationComponent() {
    }
    ActivitiesNotificationComponent.prototype.ngOnInit = function () {
    };
    ActivitiesNotificationComponent.prototype.setClasses = function () {
        var classes = {
            'fa fa-fw fa-2x': true
        };
        classes[this.item.icon] = true;
        return classes;
    };
    return ActivitiesNotificationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ActivitiesNotificationComponent.prototype, "item", void 0);
ActivitiesNotificationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '[activitiesNotification]',
        template: __webpack_require__(729),
    }),
    __metadata("design:paramtypes", [])
], ActivitiesNotificationComponent);

//# sourceMappingURL=activities-notification.component.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesTaskComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivitiesTaskComponent = (function () {
    function ActivitiesTaskComponent() {
    }
    ActivitiesTaskComponent.prototype.ngOnInit = function () {
    };
    ActivitiesTaskComponent.prototype.setProgressClasses = function () {
        return {
            'progress-bar': true,
            'progress-bar-success': this.item.status == 'MINOR' || this.item.status == 'NORMAL',
            'bg-color-teal': this.item.status == 'PRIMARY' || this.item.status == 'URGENT',
            'progress-bar-danger': this.item.status == 'CRITICAL'
        };
    };
    return ActivitiesTaskComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ActivitiesTaskComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ActivitiesTaskComponent.prototype, "lastUpdate", void 0);
ActivitiesTaskComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '[activitiesTask]',
        template: __webpack_require__(730),
    }),
    __metadata("design:paramtypes", [])
], ActivitiesTaskComponent);

//# sourceMappingURL=activities-task.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollapseMenuComponent = (function () {
    function CollapseMenuComponent(layoutService) {
        this.layoutService = layoutService;
    }
    CollapseMenuComponent.prototype.onToggle = function () {
        this.layoutService.onCollapseMenu();
    };
    return CollapseMenuComponent;
}());
CollapseMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-collapse-menu',
        template: __webpack_require__(733)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */]) === "function" && _a || Object])
], CollapseMenuComponent);

var _a;
//# sourceMappingURL=collapse-menu.component.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullScreenComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullScreenComponent = (function () {
    function FullScreenComponent() {
    }
    FullScreenComponent.prototype.ngOnInit = function () {
    };
    FullScreenComponent.prototype.onToggle = function () {
        var $body = $('body');
        var documentMethods = {
            enter: ['requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullscreen', 'msRequestFullscreen'],
            exit: ['cancelFullScreen', 'mozCancelFullScreen', 'webkitCancelFullScreen', 'msCancelFullScreen']
        };
        if (!$body.hasClass("full-screen")) {
            $body.addClass("full-screen");
            document.documentElement[documentMethods.enter.filter(function (method) {
                return document.documentElement[method];
            })[0]]();
        }
        else {
            $body.removeClass("full-screen");
            document[documentMethods.exit.filter(function (method) {
                return document[method];
            })[0]]();
        }
    };
    return FullScreenComponent;
}());
FullScreenComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-full-screen',
        template: __webpack_require__(734)
    }),
    __metadata("design:paramtypes", [])
], FullScreenComponent);

//# sourceMappingURL=full-screen.component.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__health_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__(190);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(router, healthJsonApiService, authService) {
        this.router = router;
        this.healthJsonApiService = healthJsonApiService;
        this.authService = authService;
        this.searchMobileActive = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleSearchMobile = function () {
        this.searchMobileActive = !this.searchMobileActive;
        $('body').toggleClass('search-mobile', this.searchMobileActive);
    };
    HeaderComponent.prototype.homeView = function () {
        var userRole = localStorage.getItem('userRole');
        if (userRole != 'DCMANAGER') {
            this.router.navigate(['/dashboard']);
        }
    };
    HeaderComponent.prototype.onSubmit = function () {
        this.router.navigate(['/miscellaneous/search']);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-header',
        template: __webpack_require__(735),
        styles: [".headerLogo { padding-top: 10px;\n    padding-right: 2px;}"]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__health_service__["a" /* HealthJsonApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__health_service__["a" /* HealthJsonApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_popover__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__collapse_menu_collapse_menu_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recent_projects_recent_projects_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__full_screen_full_screen_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__activities_activities_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__activities_activities_message_activities_message_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__activities_activities_notification_activities_notification_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__activities_activities_task_activities_task_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_utils_module__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__speech_button_speech_button_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__i18n_i18n_module__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_user_module__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__voice_control_voice_control_module__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_bootstrap__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__health_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__auth_auth_service__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__activities_calendar_activities_message_calendar_activities_message_component__ = __webpack_require__(518);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var HeaderModule = (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_16__voice_control_voice_control_module__["a" /* VoiceControlModule */],
            __WEBPACK_IMPORTED_MODULE_17_ngx_bootstrap__["f" /* BsDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_12__utils_utils_module__["a" /* UtilsModule */], __WEBPACK_IMPORTED_MODULE_14__i18n_i18n_module__["a" /* I18nModule */], __WEBPACK_IMPORTED_MODULE_15__user_user_module__["a" /* UserModule */], __WEBPACK_IMPORTED_MODULE_3_ngx_popover__["PopoverModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__activities_activities_message_activities_message_component__["a" /* ActivitiesMessageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__activities_activities_notification_activities_notification_component__["a" /* ActivitiesNotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_10__activities_activities_task_activities_task_component__["a" /* ActivitiesTaskComponent */],
            __WEBPACK_IMPORTED_MODULE_5__recent_projects_recent_projects_component__["a" /* RecentProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__full_screen_full_screen_component__["a" /* FullScreenComponent */],
            __WEBPACK_IMPORTED_MODULE_4__collapse_menu_collapse_menu_component__["a" /* CollapseMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_7__activities_activities_component__["a" /* ActivitiesComponent */],
            __WEBPACK_IMPORTED_MODULE_11__header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_13__speech_button_speech_button_component__["a" /* SpeechButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_20__activities_calendar_activities_message_calendar_activities_message_component__["a" /* calendarActivitiesMessageComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_11__header_component__["a" /* HeaderComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_18__health_service__["a" /* HealthJsonApiService */], __WEBPACK_IMPORTED_MODULE_19__auth_auth_service__["a" /* AuthService */]]
    })
], HeaderModule);

//# sourceMappingURL=header.module.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recent_projects_service__ = __webpack_require__(473);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecentProjectsComponent = (function () {
    function RecentProjectsComponent(projectsService) {
        this.projectsService = projectsService;
    }
    RecentProjectsComponent.prototype.ngOnInit = function () {
        this.projects = this.projectsService.getProjects();
    };
    RecentProjectsComponent.prototype.clearProjects = function () {
        this.projectsService.clearProjects();
        this.projects = this.projectsService.getProjects();
    };
    return RecentProjectsComponent;
}());
RecentProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-recent-projects',
        template: __webpack_require__(736),
        providers: [__WEBPACK_IMPORTED_MODULE_1__recent_projects_service__["a" /* RecentProjectsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__recent_projects_service__["a" /* RecentProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__recent_projects_service__["a" /* RecentProjectsService */]) === "function" && _a || Object])
], RecentProjectsComponent);

var _a;
//# sourceMappingURL=recent-projects.component.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentProjectsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecentProjectsService = (function () {
    function RecentProjectsService() {
        this.projects = [
            {
                "href": "/",
                "title": "Online e-merchant management system - attaching integration with the iOS"
            },
            {
                "href": "/",
                "title": "Notes on pipeline upgradee"
            },
            {
                "href": "/",
                "title": "Assesment Report for merchant account"
            }
        ];
    }
    RecentProjectsService.prototype.getProjects = function () {
        return this.projects;
    };
    RecentProjectsService.prototype.clearProjects = function () {
        this.projects = [];
    };
    return RecentProjectsService;
}());
RecentProjectsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], RecentProjectsService);

//# sourceMappingURL=recent-projects.service.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutSwitcherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutSwitcherComponent = (function () {
    function LayoutSwitcherComponent(layoutService) {
        this.layoutService = layoutService;
    }
    LayoutSwitcherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.layoutService.subscribe(function (store) {
            _this.store = store;
        });
        this.store = this.layoutService.store;
    };
    LayoutSwitcherComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    LayoutSwitcherComponent.prototype.onToggle = function () {
        this.isActivated = !this.isActivated;
    };
    LayoutSwitcherComponent.prototype.onSmartSkin = function (skin) {
        this.layoutService.onSmartSkin(skin);
    };
    LayoutSwitcherComponent.prototype.onFixedHeader = function () {
        this.layoutService.onFixedHeader();
    };
    LayoutSwitcherComponent.prototype.onFixedNavigation = function () {
        this.layoutService.onFixedNavigation();
    };
    LayoutSwitcherComponent.prototype.onFixedRibbon = function () {
        this.layoutService.onFixedRibbon();
    };
    LayoutSwitcherComponent.prototype.onFixedPageFooter = function () {
        this.layoutService.onFixedPageFooter();
    };
    LayoutSwitcherComponent.prototype.onInsideContainer = function () {
        this.layoutService.onInsideContainer();
    };
    LayoutSwitcherComponent.prototype.onRtl = function () {
        this.layoutService.onRtl();
    };
    LayoutSwitcherComponent.prototype.onMenuOnTop = function () {
        this.layoutService.onMenuOnTop();
    };
    LayoutSwitcherComponent.prototype.onColorblindFriendly = function () {
        this.layoutService.onColorblindFriendly();
    };
    LayoutSwitcherComponent.prototype.factoryReset = function () {
        this.layoutService.factoryReset();
    };
    return LayoutSwitcherComponent;
}());
LayoutSwitcherComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-layout-switcher',
        template: __webpack_require__(738)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */]) === "function" && _a || Object])
], LayoutSwitcherComponent);

var _a;
//# sourceMappingURL=layout-switcher.component.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BigBreadcrumbsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BigBreadcrumbsComponent = (function () {
    function BigBreadcrumbsComponent() {
    }
    BigBreadcrumbsComponent.prototype.ngOnInit = function () {
    };
    return BigBreadcrumbsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], BigBreadcrumbsComponent.prototype, "icon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BigBreadcrumbsComponent.prototype, "items", void 0);
BigBreadcrumbsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-big-breadcrumbs',
        template: "\n   <div><h1 class=\"page-title txt-color-blueDark\">\n   <i class=\"fa-fw fa fa-{{icon}}\"></i>{{items[0]}}\n   <span *ngFor=\"let item of items.slice(1)\">> {{item}}</span>\n</h1></div>\n  ",
    }),
    __metadata("design:paramtypes", [])
], BigBreadcrumbsComponent);

//# sourceMappingURL=big-breadcrumbs.component.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinifyMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MinifyMenuComponent = (function () {
    function MinifyMenuComponent(layoutService) {
        this.layoutService = layoutService;
    }
    MinifyMenuComponent.prototype.toggle = function () {
        this.layoutService.onMinifyMenu();
    };
    return MinifyMenuComponent;
}());
MinifyMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-minify-menu',
        template: "<span class=\"minifyme\" (click)=\"toggle()\">\n    <i class=\"fa fa-arrow-circle-left hit\"></i>\n</span>",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */]) === "function" && _a || Object])
], MinifyMenuComponent);

var _a;
//# sourceMappingURL=minify-menu.component.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_guards_index__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = (function () {
    function NavigationComponent(AuthGuard, layoutService) {
        this.AuthGuard = AuthGuard;
        this.layoutService = layoutService;
        this.userRole = localStorage.getItem('userRole');
        if (localStorage.getItem('widget') != null) {
            this.widgetNames = localStorage.getItem('widget').split(",");
        }
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.onToggle = function () {
        if (this.layoutService.store.mobileViewActivated) {
            this.layoutService.onCollapseMenu();
        }
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-navigation',
        template: __webpack_require__(739)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_guards_index__["a" /* AuthGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_guards_index__["a" /* AuthGuard */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__layout_service__["a" /* LayoutService */]) === "function" && _b || Object])
], NavigationComponent);

var _a, _b;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n_i18n_module__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__big_breadcrumbs_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__minify_menu_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__smart_menu_directive__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user_module__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_chat_module__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_guards_index__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var NavigationModule = (function () {
    function NavigationModule() {
    }
    return NavigationModule;
}());
NavigationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__i18n_i18n_module__["a" /* I18nModule */],
            __WEBPACK_IMPORTED_MODULE_7__user_user_module__["a" /* UserModule */],
            __WEBPACK_IMPORTED_MODULE_9__chat_chat_module__["a" /* ChatModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__big_breadcrumbs_component__["a" /* BigBreadcrumbsComponent */],
            __WEBPACK_IMPORTED_MODULE_4__minify_menu_component__["a" /* MinifyMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_5__navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__smart_menu_directive__["a" /* SmartMenuDirective */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__big_breadcrumbs_component__["a" /* BigBreadcrumbsComponent */],
            __WEBPACK_IMPORTED_MODULE_4__minify_menu_component__["a" /* MinifyMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_5__navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__smart_menu_directive__["a" /* SmartMenuDirective */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__auth_guards_index__["a" /* AuthGuard */]]
    })
], NavigationModule);

//# sourceMappingURL=navigation.module.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_layout_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartMenuDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SmartMenuDirective = (function () {
    function SmartMenuDirective(menu, router, layoutService) {
        var _this = this;
        this.menu = menu;
        this.router = router;
        this.layoutService = layoutService;
        this.togglersBinded = false;
        this.processLayout = function (store) {
            if (store.menuOnTop) {
                _this.$menu.find('li.open').each(function (i, li) {
                    _this.toggle($(li), false);
                });
            }
            else {
                _this.$menu.find('li.active').each(function (i, li) {
                    $(li).parents('li').each(function (j, parentLi) {
                        _this.toggle($(parentLi), true);
                    });
                });
            }
            if (store.mobileViewActivated) {
                $('body').removeClass("minified");
            }
        };
        this.$menu = $(this.menu.nativeElement);
    }
    SmartMenuDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutSub = this.layoutService.subscribe(function (store) {
            _this.processLayout(store);
        });
        this.routerSub = this.router.events.subscribe(function (event) {
            setTimeout(function () {
                _this.processLayout(_this.layoutService.store);
            }, 1);
            _this.routerSub.unsubscribe();
        });
        $('[routerLink]', this.$menu).on('click', function () {
            if (_this.layoutService.store.mobileViewActivated) {
                _this.layoutService.onCollapseMenu();
            }
        });
    };
    SmartMenuDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (!this.togglersBinded) {
            this.$menu.find('li:has(> ul)').each(function (i, li) {
                var $menuItem = $(li);
                var $a = $menuItem.find('>a');
                var sign = $('<b class="collapse-sign"><em class="fa fa-plus-square-o"/></b>');
                $a.on('click', function (e) {
                    _this.toggle($menuItem);
                    e.stopPropagation();
                    return false;
                }).append(sign);
            });
            this.togglersBinded = true;
        }
    };
    SmartMenuDirective.prototype.ngOnDestroy = function () {
        this.layoutSub.unsubscribe();
    };
    SmartMenuDirective.prototype.toggle = function ($el, condition) {
        var _this = this;
        if (condition === void 0) { condition = !$el.data('open'); }
        $el.toggleClass('open', condition);
        if (condition) {
            $el.find('>ul').slideDown();
        }
        else {
            $el.find('>ul').slideUp();
        }
        $el.find('>a>.collapse-sign>em')
            .toggleClass('fa-plus-square-o', !condition)
            .toggleClass('fa-minus-square-o', condition);
        $el.data('open', condition);
        if (condition) {
            $el.siblings('.open').each(function (i, it) {
                var sib = $(it);
                _this.toggle(sib, false);
            });
        }
    };
    return SmartMenuDirective;
}());
SmartMenuDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[saSmartMenu]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__layout_layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layout_layout_service__["a" /* LayoutService */]) === "function" && _c || Object])
], SmartMenuDirective);

var _a, _b, _c;
//# sourceMappingURL=smart-menu.directive.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RibbonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RibbonComponent = (function () {
    function RibbonComponent(layoutService) {
        this.layoutService = layoutService;
    }
    RibbonComponent.prototype.ngOnInit = function () {
    };
    RibbonComponent.prototype.resetWidgets = function () {
        this.layoutService.factoryReset();
    };
    return RibbonComponent;
}());
RibbonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-ribbon',
        template: __webpack_require__(740)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */]) === "function" && _a || Object])
], RibbonComponent);

var _a;
//# sourceMappingURL=ribbon.component.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__(192);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortcutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShortcutComponent = (function () {
    function ShortcutComponent(layoutService, router, renderer, el) {
        this.layoutService = layoutService;
        this.router = router;
        this.renderer = renderer;
        this.el = el;
        this.state = 'out';
    }
    ShortcutComponent.prototype.shortcutTo = function (route) {
        this.router.navigate(route);
        this.layoutService.onShortcutToggle(false);
    };
    ShortcutComponent.prototype.ngOnInit = function () {
    };
    ShortcutComponent.prototype.listen = function () {
        var _this = this;
        this.layoutSub = this.layoutService.subscribe(function (store) {
            _this.state = store.shortcutOpen ? 'in' : 'out';
            if (store.shortcutOpen) {
                _this.documentSub = _this.renderer.listenGlobal('document', 'mouseup', function (event) {
                    if (!_this.el.nativeElement.contains(event.target)) {
                        _this.layoutService.onShortcutToggle(false);
                        _this.documentUnsub();
                    }
                });
            }
            else {
                _this.documentUnsub();
            }
        });
    };
    ShortcutComponent.prototype.ngAfterContentInit = function () {
        this.listen();
    };
    ShortcutComponent.prototype.ngAfterViewInit = function () {
    };
    ShortcutComponent.prototype.ngOnDestroy = function () {
        this.layoutSub.unsubscribe();
    };
    ShortcutComponent.prototype.documentUnsub = function () {
        this.documentSub && this.documentSub();
        this.documentSub = null;
    };
    return ShortcutComponent;
}());
ShortcutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-shortcut',
        template: __webpack_require__(741),
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["a" /* trigger */])('shortcutState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["b" /* state */])('out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["c" /* style */])({
                    height: 0,
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["b" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["c" /* style */])({
                    height: '*',
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["d" /* transition */])('out => in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('250ms ease-out')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["d" /* transition */])('in => out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('250ms 300ms ease-in '))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__layout_service__["a" /* LayoutService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object])
], ShortcutComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=shortcut.component.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sound_sound_module__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils_module__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__voice_control_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__commands_help_component__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__voice_recognition_service__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoiceControlModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var VoiceControlModule = VoiceControlModule_1 = (function () {
    function VoiceControlModule() {
    }
    VoiceControlModule.forRoot = function () {
        return {
            ngModule: VoiceControlModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_5__voice_control_service__["a" /* VoiceControlService */], __WEBPACK_IMPORTED_MODULE_7__voice_recognition_service__["a" /* VoiceRecognitionService */]]
        };
    };
    return VoiceControlModule;
}());
VoiceControlModule = VoiceControlModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* ModalModule */], __WEBPACK_IMPORTED_MODULE_3__sound_sound_module__["a" /* SoundModule */], __WEBPACK_IMPORTED_MODULE_4__utils_utils_module__["a" /* UtilsModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_6__commands_help_component__["a" /* CommandsHelpComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__commands_help_component__["a" /* CommandsHelpComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__voice_control_service__["a" /* VoiceControlService */], __WEBPACK_IMPORTED_MODULE_7__voice_recognition_service__["a" /* VoiceRecognitionService */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_6__commands_help_component__["a" /* CommandsHelpComponent */]]
    })
], VoiceControlModule);

var VoiceControlModule_1;
//# sourceMappingURL=voice-control.module.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget_widget_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widgets_grid_widgets_grid_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartadminWidgetsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SmartadminWidgetsModule = (function () {
    function SmartadminWidgetsModule() {
    }
    return SmartadminWidgetsModule;
}());
SmartadminWidgetsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__widget_widget_component__["a" /* WidgetComponent */], __WEBPACK_IMPORTED_MODULE_2__widgets_grid_widgets_grid_component__["a" /* WidgetsGridComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__widget_widget_component__["a" /* WidgetComponent */], __WEBPACK_IMPORTED_MODULE_2__widgets_grid_widgets_grid_component__["a" /* WidgetsGridComponent */]]
    })
], SmartadminWidgetsModule);

//# sourceMappingURL=smartadmin-widgets.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_endpoints__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { endponitConfig } from '../../environments/endpoints';
var EventsService = (function () {
    function EventsService(http) {
        this.http = http;
        this.addEventData = {};
        this.allEventsData = {};
        //update event
        this.updateEventData = {};
        //priority filter
        this.filterEvents = {};
        //filter by time range
        this.filterByTimeRange = {};
    }
    //create event
    EventsService.prototype.addEvent = function (event) {
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        header.append("Content-Type", "application/json");
        header.append("Authorization", localStorage.getItem('Authentication'));
        // don't have the data yet
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_endpoints__["a" /* endponitConfig */].CALENDAR_ENDPOINT + 'createEvent', event, { headers: header })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EventsService.prototype.getAllEvent = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        header.append("Authorization", localStorage.getItem('Authentication'));
        // don't have the data yet
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__environments_endpoints__["a" /* endponitConfig */].CALENDAR_ENDPOINT + 'getEvents', { headers: header })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EventsService.prototype.updateEvent = function (id, updateEvent) {
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        header.append("Content-Type", "application/json");
        header.append("Authorization", localStorage.getItem('Authentication'));
        // don't have the data yet
        return this.http.put(__WEBPACK_IMPORTED_MODULE_6__environments_endpoints__["a" /* endponitConfig */].CALENDAR_ENDPOINT + 'event/' + id, updateEvent, { headers: header })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EventsService.prototype.getFilterEvents = function (FilterPriorityData) {
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        header.append("Content-Type", "application/json");
        header.append("Authorization", localStorage.getItem('Authentication'));
        // don't have the data yet
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_endpoints__["a" /* endponitConfig */].CALENDAR_ENDPOINT + 'getEventsByFilter', FilterPriorityData, { headers: header })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EventsService.prototype.getFilterDateEvents = function (startDate, EndDate) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        header.append("Content-Type", "application/json");
        header.append("Authorization", localStorage.getItem('Authentication'));
        // don't have the data yet
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_6__environments_endpoints__["a" /* endponitConfig */].CALENDAR_ENDPOINT + 'getEventsByTimeRange/' + startDate + '/' + EndDate, { headers: header })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.filterByTimeRange = data;
                resolve(_this.filterByTimeRange);
            }, function (error) {
            });
        });
    };
    EventsService.prototype.handleError = function (error) {
        if (error.status == 404) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json());
        }
        else {
            localStorage.setItem('status', '401');
            // 401 unauthorized response so log user out of client
            window.location.href = '/#/error';
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error._body);
        }
    };
    return EventsService;
}());
EventsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], EventsService);

var _a;
//# sourceMappingURL=events.service.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_api_json_api_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_endpoints__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ActivitiesService = (function () {
    function ActivitiesService(jsonApiService, http) {
        this.jsonApiService = jsonApiService;
        this.http = http;
        this.url = '/activities/activities.json';
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        this.headers.append('Authorization', localStorage.getItem('Authentication'));
        this.headers.append('Content-Type', 'application/json');
    }
    ActivitiesService.prototype.getActivities = function () {
        return this.jsonApiService.fetch(this.url);
    };
    ActivitiesService.prototype.getNotifications = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_endpoints__["a" /* endponitConfig */].NOTIFICATIONS_API_ENDPOINT +
            'notify/' + localStorage.getItem('userData'), { headers: this.headers }).map(function (res) { return res.json(); });
    };
    /** Get All Subscription Channels */
    ActivitiesService.prototype.getAllWebSocketConnections = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_endpoints__["a" /* endponitConfig */].NOTIFICATIONS_API_ENDPOINT +
            'channels/' + localStorage.getItem('userRole') + '/' + Number(localStorage.getItem('userData')), { headers: this.headers })
            .map(function (response) {
            return response.json().data;
        });
    };
    /** Update Notification Read status as Read */
    ActivitiesService.prototype.updateNotificationReadStatus = function () {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_7__environments_endpoints__["a" /* endponitConfig */].NOTIFICATIONS_API_ENDPOINT +
            'notify/count/' + Number(localStorage.getItem('userData')), '', { headers: this.headers })
            .map(function (response) {
            return response.json().data;
        });
    };
    /** Get Notification count based on read status */
    ActivitiesService.prototype.getNotificationCount = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_endpoints__["a" /* endponitConfig */].NOTIFICATIONS_API_ENDPOINT +
            'notify/count/' + Number(localStorage.getItem('userData')), { headers: this.headers })
            .map(function (response) {
            return response.json().data;
        });
    };
    ActivitiesService.prototype.setReadStatus = function (eventId) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_7__environments_endpoints__["a" /* endponitConfig */].NOTIFICATIONS_API_ENDPOINT +
            'changeReadStatus/' + eventId, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    return ActivitiesService;
}());
ActivitiesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_api_json_api_service__["a" /* JsonApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_api_json_api_service__["a" /* JsonApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], ActivitiesService);

var _a, _b;
//# sourceMappingURL=activities.service.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser') && Number(localStorage.getItem('status')) !== 401) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/error']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>\n  <div class=\"loading\"></div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_guards_index__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_guards_userRole_guard__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_resolver__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_service__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_core_module__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_layout_layout_module__ = __webpack_require__(460);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
 * Platform and Environment providers/directives/pipes
 */

// App is our top level component



// Core providers


// Application wide providers
var APP_PROVIDERS = __WEBPACK_IMPORTED_MODULE_9__app_resolver__["a" /* APP_RESOLVER_PROVIDERS */].concat([
    __WEBPACK_IMPORTED_MODULE_10__app_service__["a" /* AppState */]
]);
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_12__shared_layout_layout_module__["a" /* SmartadminLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* routing */]
        ],
        exports: [],
        providers: [
            // ENV_PROVIDERS,
            APP_PROVIDERS,
            __WEBPACK_IMPORTED_MODULE_5__auth_guards_index__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_6__auth_guards_userRole_guard__["a" /* userRoleGuard */],
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_10__app_service__["a" /* AppState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__app_service__["a" /* AppState */]) === "function" && _b || Object])
], AppModule);

var _a, _b;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* unused harmony export DataResolver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_RESOLVER_PROVIDERS; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of({ res: 'I am data' });
    };
    return DataResolver;
}());
DataResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DataResolver);

// an array of services to resolve routes with data
var APP_RESOLVER_PROVIDERS = [
    DataResolver
];
//# sourceMappingURL=app.resolver.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_layout_app_layouts_main_layout_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_layout_app_layouts_auth_layout_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_guards_index__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_guards_userRole_guard__ = __webpack_require__(126);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/**
 * Created by griga on 7/11/16.
 */





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__shared_layout_app_layouts_main_layout_component__["a" /* MainLayoutComponent */],
        // data: { pageTitle: 'Dashboard' },
        children: [
            { path: '', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guards_index__["a" /* AuthGuard */]], redirectTo: 'dashboard', pathMatch: 'full' },
            {
                path: 'dcmanagerloads',
                loadChildren: 'app/+dc_manager/dc_manager.module#dcManagerModule',
                data: { roles: ['DCMANAGER'] }, canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guards_index__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_4__auth_guards_userRole_guard__["a" /* userRoleGuard */]]
            },
            {
                path: 'dashboard',
                loadChildren: 'app/+dashboard/dashboard.module#DashboardModule',
                data: { pageTitle: 'Dashboard', roles: ['USER', 'ADMIN'] }, canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guards_index__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_4__auth_guards_userRole_guard__["a" /* userRoleGuard */]]
            },
            {
                path: 'calendar',
                loadChildren: 'app/+calendar/calendar.module#CalendarModule',
                data: { pageTitle: 'Calendar', roles: ['USER', 'ADMIN'] }, canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guards_index__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_4__auth_guards_userRole_guard__["a" /* userRoleGuard */]]
            },
            // {
            //   path: 'users',
            //   loadChildren: 'app/+users/users.module#UserModule',
            //   data: { pageTitle: 'Users', roles: ['USER', 'ADMIN'] }, canActivate: [AuthGuard]
            // },
            {
                path: 'admin',
                loadChildren: 'app/+admin/admin.module#AdminModule',
                data: { pageTitle: 'Admin', roles: ['ADMIN'] }, canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guards_index__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_4__auth_guards_userRole_guard__["a" /* userRoleGuard */]]
            },
            {
                path: 'notifications',
                loadChildren: 'app/+notifications/notifications.module#NotificationModule',
                data: { roles: ['USER', 'ADMIN', 'DCMANAGER'] }, canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guards_index__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_4__auth_guards_userRole_guard__["a" /* userRoleGuard */]]
            },
            {
                path: 'drivers',
                loadChildren: 'app/+drivers/drivers.module#DriversModule',
                data: { pageTitle: 'Drivers', roles: ['USER', 'ADMIN'] }, canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guards_index__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_4__auth_guards_userRole_guard__["a" /* userRoleGuard */]]
            },
            {
                path: 'locations',
                loadChildren: 'app/+locations/locations.module#LocationsModule',
                data: { pageTitle: 'Locations', roles: ['USER', 'ADMIN'] }, canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guards_index__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_4__auth_guards_userRole_guard__["a" /* userRoleGuard */]]
            },
            // {
            //     path: 'trucks',
            //     loadChildren: 'app/+trucks/trucks.module#TrucksModule',
            //     data: { pageTitle: 'Trucks', roles: ['USER', 'ADMIN'] }, canActivate: [AuthGuard,userRoleGuard]
            // } ,
            {
                path: 'loads',
                loadChildren: 'app/+loads/loads.module#LoadsModule',
                data: { pageTitle: 'Loads', roles: ['USER', 'ADMIN'] }, canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guards_index__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_4__auth_guards_userRole_guard__["a" /* userRoleGuard */]]
            },
            {
                path: 'vendors',
                loadChildren: 'app/+vendors/vendors.module#VendorsModule',
                data: { pageTitle: 'Vendors', roles: ['USER', 'ADMIN'] }, canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guards_index__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_4__auth_guards_userRole_guard__["a" /* userRoleGuard */]]
            }
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
    {
        path: 'error404',
        loadChildren: './+auth/+error/+error404/error404.module#Error404Module'
    },
    {
        path: 'error500',
        loadChildren: './+auth/+error/+error500/error500.module#Error500Module'
    },
    { path: 'auth', component: __WEBPACK_IMPORTED_MODULE_2__shared_layout_app_layouts_auth_layout_component__["a" /* AuthLayoutComponent */], loadChildren: 'app/+auth/auth.module#AuthModule' },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true });
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    return AppState;
}());
AppState = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AppState);

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_json_api_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_layout_layout_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_user_user_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_voice_control_voice_control_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_sound_sound_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_module_import_guard__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_voice_control_voice_recognition_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var CoreModule = (function () {
    function CoreModule(parentModule) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__guards_module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'CoreModule');
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["e" /* TooltipModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["f" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["g" /* ProgressbarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["c" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["d" /* TabsModule */].forRoot(),
        ],
        declarations: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__api_json_api_service__["a" /* JsonApiService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_layout_layout_service__["a" /* LayoutService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_voice_control_voice_control_service__["a" /* VoiceControlService */],
            __WEBPACK_IMPORTED_MODULE_8__shared_voice_control_voice_recognition_service__["a" /* VoiceRecognitionService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_sound_sound_service__["a" /* SoundService */],
        ]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}
//# sourceMappingURL=module-import-guard.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aside_chat_aside_chat_boxes__ = __webpack_require__(508);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideChatUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AsideChatUserComponent = AsideChatUserComponent_1 = (function () {
    function AsideChatUserComponent() {
        this.user = {};
        this.state = {
            chatId: 'chatbox-user-' + AsideChatUserComponent_1.idCounter++
        };
    }
    AsideChatUserComponent.prototype.ngOnInit = function () {
    };
    AsideChatUserComponent.prototype.openChatBox = function (e) {
        e.preventDefault();
        var user = this.user;
        var _a = user.username.split(/ /), firstname = _a[0], lastname = _a[1];
        var id = this.state.chatId;
        if (user.status != 'ofline') {
            __WEBPACK_IMPORTED_MODULE_1__aside_chat_aside_chat_boxes__["a" /* chatboxManager */].addBox(id, {
                title: user.username,
                first_name: firstname,
                last_name: lastname,
                status: user.status || 'online',
                alertmsg: user.status == 'busy' ? user.username + ' is in a meeting. Please do not disturb!' : '',
                alertshow: user.status == 'busy'
                //you can add your own options too
            });
        }
    };
    return AsideChatUserComponent;
}());
AsideChatUserComponent.idCounter = 0;
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AsideChatUserComponent.prototype, "user", void 0);
AsideChatUserComponent = AsideChatUserComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'aside-chat-user',
        template: __webpack_require__(716),
    }),
    __metadata("design:paramtypes", [])
], AsideChatUserComponent);

var AsideChatUserComponent_1;
//# sourceMappingURL=aside-chat-user.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chatboxManager; });

/*
 * SMARTCHAT PLUGIN ARRAYS & CONFIG
 * Dependency: js/plugin/moment/moment.min.js
 *             js/plugin/cssemotions/jquery.cssemoticons.min.js
 *             js/smart-chat-ui/smart.chat.ui.js
 * (DO NOT CHANGE)
 */
var boxList = [], showList = [], nameList = [], idList = [];
/*
 * Width of the chat boxes, and the gap inbetween in pixel (minus padding)
 */
var chatbox_config = {
    width: 200,
    gap: 35,
    offset: 0
};
/*
 * SMART CHAT ENGINE
 * Copyright (c) 2013 Wen Pu
 * Modified by MyOrange
 * All modifications made are hereby copyright (c) 2014-2015 MyOrange
 */
// TODO: implement destroy()
$.widget("ui.chatbox", {
    options: {
        id: null,
        title: null,
        user: null,
        hidden: false,
        offset: 0,
        width: 300,
        status: 'online',
        alertmsg: null,
        alertshow: null,
        messageSent: function (id, user, msg) {
            // override this
            this.boxManager.addMsg(user.first_name, msg);
        },
        boxClosed: function (id) {
        },
        boxManager: {
            // thanks to the widget factory facility
            // similar to http://alexsexton.com/?p=51
            init: function (elem) {
                this.elem = elem;
            },
            addMsg: function (peer, msg) {
                var self = this;
                var box = self.elem.uiChatboxLog;
                var e = document.createElement('div');
                box.append(e);
                $(e).hide();
                var systemMessage = false;
                if (peer) {
                    var peerName = document.createElement("b");
                    $(peerName).text(peer + ": ");
                    e.appendChild(peerName);
                }
                else {
                    systemMessage = true;
                }
                var msgElement = document.createElement(systemMessage ? "i" : "span");
                $(msgElement).text(msg);
                e.appendChild(msgElement);
                $(e).addClass("ui-chatbox-msg");
                $(e).css("maxWidth", $(box).width());
                $(e).fadeIn();
                //$(e).prop( 'title', moment().calendar() ); // add dep: moment.js
                $(e).find("span").emoticonize(); // add dep: jquery.cssemoticons.js
                self._scrollToBottom();
                if (!self.elem.uiChatboxTitlebar.hasClass("ui-state-focus")
                    && !self.highlightLock) {
                    self.highlightLock = true;
                    self.highlightBox();
                }
            },
            highlightBox: function () {
                var self = this;
                self.elem.uiChatboxTitlebar.effect("highlight", {}, 300);
                self.elem.uiChatbox.effect("bounce", { times: 2 }, 300, function () {
                    self.highlightLock = false;
                    self._scrollToBottom();
                });
            },
            toggleBox: function () {
                this.elem.uiChatbox.toggle();
            },
            _scrollToBottom: function () {
                var box = this.elem.uiChatboxLog;
                box.scrollTop(box.get(0).scrollHeight);
            }
        }
    },
    toggleContent: function (event) {
        this.uiChatboxContent.toggle();
        if (this.uiChatboxContent.is(":visible")) {
            this.uiChatboxInputBox.focus();
        }
    },
    widget: function () {
        return this.uiChatbox;
    },
    _create: function () {
        var self = this, options = self.options, title = options.title || "No Title", 
        // chatbox
        uiChatbox = (self.uiChatbox = $('<div></div>'))
            .appendTo(document.body)
            .addClass('ui-widget ' +
            //'ui-corner-top ' +
            'ui-chatbox')
            .attr('outline', 0)
            .focusin(function () {
            // ui-state-highlight is not really helpful here
            //self.uiChatbox.removeClass('ui-state-highlight');
            self.uiChatboxTitlebar.addClass('ui-state-focus');
        })
            .focusout(function () {
            self.uiChatboxTitlebar.removeClass('ui-state-focus');
        }), 
        // titlebar
        uiChatboxTitlebar = (self.uiChatboxTitlebar = $('<div></div>'))
            .addClass('ui-widget-header ' +
            //'ui-corner-top ' +
            'ui-chatbox-titlebar ' +
            self.options.status +
            ' ui-dialog-header' // take advantage of dialog header style
        )
            .click(function (event) {
            self.toggleContent(event);
        })
            .appendTo(uiChatbox), uiChatboxTitle = (self.uiChatboxTitle = $('<span></span>'))
            .html(title)
            .appendTo(uiChatboxTitlebar), uiChatboxTitlebarClose = (self.uiChatboxTitlebarClose = $('<a href="#" rel="tooltip" data-placement="top" data-original-title="Hide"></a>'))
            .addClass(//'ui-corner-all ' +
        'ui-chatbox-icon ')
            .attr('role', 'button')
            .hover(function () {
            uiChatboxTitlebarClose.addClass('ui-state-hover');
        }, function () {
            uiChatboxTitlebarClose.removeClass('ui-state-hover');
        })
            .click(function (event) {
            uiChatbox.hide();
            self.options.boxClosed(self.options.id);
            return false;
        })
            .appendTo(uiChatboxTitlebar), uiChatboxTitlebarCloseText = $('<i></i>')
            .addClass('fa ' +
            'fa-times')
            .appendTo(uiChatboxTitlebarClose), uiChatboxTitlebarMinimize = (self.uiChatboxTitlebarMinimize = $('<a href="#" rel="tooltip" data-placement="top" data-original-title="Minimize"></a>'))
            .addClass(//'ui-corner-all ' +
        'ui-chatbox-icon')
            .attr('role', 'button')
            .hover(function () {
            uiChatboxTitlebarMinimize.addClass('ui-state-hover');
        }, function () {
            uiChatboxTitlebarMinimize.removeClass('ui-state-hover');
        })
            .click(function (event) {
            self.toggleContent(event);
            return false;
        })
            .appendTo(uiChatboxTitlebar), uiChatboxTitlebarMinimizeText = $('<i></i>')
            .addClass('fa ' +
            'fa-minus')
            .appendTo(uiChatboxTitlebarMinimize), 
        // content
        uiChatboxContent = (self.uiChatboxContent = $('<div class="' + self.options.alertshow + '"><span class="alert-msg">' + self.options.alertmsg + '</span></div>'))
            .addClass('ui-widget-content ' +
            'ui-chatbox-content ')
            .appendTo(uiChatbox), uiChatboxLog = (self.uiChatboxLog = self.element)
            .addClass('ui-widget-content ' +
            'ui-chatbox-log ' +
            'custom-scroll')
            .appendTo(uiChatboxContent), uiChatboxInput = (self.uiChatboxInput = $('<div></div>'))
            .addClass('ui-widget-content ' +
            'ui-chatbox-input')
            .click(function (event) {
            // anything?
        })
            .appendTo(uiChatboxContent), uiChatboxInputBox = (self.uiChatboxInputBox = $('<textarea></textarea>'))
            .addClass('ui-widget-content ' +
            'ui-chatbox-input-box ')
            .appendTo(uiChatboxInput)
            .keydown(function (event) {
            if (event.keyCode && event.keyCode == $.ui.keyCode.ENTER) {
                var msg = $.trim($(this).val());
                if (msg.length > 0) {
                    self.options.messageSent(self.options.id, self.options.user, msg);
                }
                $(this).val('');
                return false;
            }
        })
            .focusin(function () {
            uiChatboxInputBox.addClass('ui-chatbox-input-focus');
            var box = $(this).parent().prev();
            box.scrollTop(box.get(0).scrollHeight);
        })
            .focusout(function () {
            uiChatboxInputBox.removeClass('ui-chatbox-input-focus');
        });
        // disable selection
        uiChatboxTitlebar.find('*').add(uiChatboxTitlebar).disableSelection();
        // switch focus to input box when whatever clicked
        uiChatboxContent.children().click(function () {
            // click on any children, set focus on input box
            self.uiChatboxInputBox.focus();
        });
        self._setWidth(self.options.width);
        self._position(self.options.offset);
        self.options.boxManager.init(self);
        if (!self.options.hidden) {
            uiChatbox.show();
        }
        $(".ui-chatbox [rel=tooltip]").tooltip();
        //console.log("tooltip created");
    },
    _setOption: function (option, value) {
        if (value != null) {
            switch (option) {
                case "hidden":
                    if (value)
                        this.uiChatbox.hide();
                    else
                        this.uiChatbox.show();
                    break;
                case "offset":
                    this._position(value);
                    break;
                case "width":
                    this._setWidth(value);
                    break;
            }
        }
        $.Widget.prototype._setOption.apply(this, arguments);
    },
    _setWidth: function (width) {
        this.uiChatbox.width((width + 28) + "px");
        //this.uiChatboxTitlebar.width((width + 28) + "px");
        //this.uiChatboxLog.width(width + "px");
        // this.uiChatboxInput.css("maxWidth", width + "px");
        // padding:2, boarder:2, margin:5
        this.uiChatboxInputBox.css("width", (width + 18) + "px");
    },
    _position: function (offset) {
        this.uiChatbox.css("right", offset);
    }
});
/*
 * jQuery CSSEmoticons plugin 0.2.9
 *
 * Copyright (c) 2010 Steve Schwartz (JangoSteve)
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Date: Sun Oct 22 1:00:00 2010 -0500
 */
$.fn.emoticonize = function (options) {
    var opts = $.extend({}, $.fn.emoticonize.defaults, options);
    var escapeCharacters = [")", "(", "*", "[", "]", "{", "}", "|", "^", "<", ">", "\\", "?", "+", "=", "."];
    var threeCharacterEmoticons = [
        // really weird bug if you have :{ and then have :{) in the same container anywhere *after* :{ then :{ doesn't get matched, e.g. :] :{ :) :{) :) :-) will match everything except :{
        //  But if you take out the :{) or even just move :{ to the right of :{) then everything works fine. This has something to do with the preMatch string below I think, because
        //  it'll work again if you set preMatch equal to '()'
        //  So for now, we'll just remove :{) from the emoticons, because who actually uses this mustache man anyway?
        // ":{)",
        ":-)", ":o)", ":c)", ":^)", ":-D", ":-(", ":-9", ";-)", ":-P", ":-p", ":-Þ", ":-b", ":-O", ":-/", ":-X", ":-#", ":'(", "B-)", "8-)", ";*(", ":-*", ":-\\",
        "?-)",
        // and the twoCharacterEmoticons from below, but with a space inserted
        ": )", ": ]", "= ]", "= )", "8 )", ": }", ": D", "8 D", "X D", "x D", "= D", ": (", ": [", ": {", "= (", "; )", "; ]", "; D", ": P", ": p", "= P", "= p", ": b", ": Þ", ": O", "8 O", ": /", "= /", ": S", ": #", ": X", "B )", ": |", ": \\", "= \\", ": *", ": &gt;", ": &lt;" //, "* )"
    ];
    var twoCharacterEmoticons = [
        ":)", ":]", "=]", "=)", "8)", ":}", ":D", ":(", ":[", ":{", "=(", ";)", ";]", ";D", ":P", ":p", "=P", "=p", ":b", ":Þ", ":O", ":/", "=/", ":S", ":#", ":X", "B)", ":|", ":\\", "=\\", ":*", ":&gt;", ":&lt;" //, "*)"
    ];
    var specialEmoticons = {
        "&gt;:)": { cssClass: "red-emoticon small-emoticon spaced-emoticon" },
        "&gt;;)": { cssClass: "red-emoticon small-emoticon spaced-emoticon" },
        "&gt;:(": { cssClass: "red-emoticon small-emoticon spaced-emoticon" },
        "&gt;: )": { cssClass: "red-emoticon small-emoticon" },
        "&gt;; )": { cssClass: "red-emoticon small-emoticon" },
        "&gt;: (": { cssClass: "red-emoticon small-emoticon" },
        ";(": { cssClass: "red-emoticon spaced-emoticon" },
        "&lt;3": { cssClass: "pink-emoticon counter-rotated" },
        "O_O": { cssClass: "no-rotate" },
        "o_o": { cssClass: "no-rotate" },
        "0_o": { cssClass: "no-rotate" },
        "O_o": { cssClass: "no-rotate" },
        "T_T": { cssClass: "no-rotate" },
        "^_^": { cssClass: "no-rotate" },
        "O:)": { cssClass: "small-emoticon spaced-emoticon" },
        "O: )": { cssClass: "small-emoticon" },
        "8D": { cssClass: "small-emoticon spaced-emoticon" },
        "XD": { cssClass: "small-emoticon spaced-emoticon" },
        "xD": { cssClass: "small-emoticon spaced-emoticon" },
        "=D": { cssClass: "small-emoticon spaced-emoticon" },
        "8O": { cssClass: "small-emoticon spaced-emoticon" },
        "[+=..]": { cssClass: "no-rotate nintendo-controller" }
        //"OwO":  { cssClass: "no-rotate" }, // these emoticons overflow and look weird even if they're made even smaller, could probably fix this with some more css trickery
        //"O-O":  { cssClass: "no-rotate" },
        //"O=)":    { cssClass: "small-emoticon" }
    };
    var specialRegex = new RegExp('(\\' + escapeCharacters.join('|\\') + ')', 'g');
    // One of these characters must be present before the matched emoticon, or the matched emoticon must be the first character in the container HTML
    //  This is to ensure that the characters in the middle of HTML properties or URLs are not matched as emoticons
    //  Below matches ^ (first character in container HTML), \s (whitespace like space or tab), or \0 (NULL character)
    // (<\\S+.*>) matches <\\S+.*> (matches an HTML tag like <span> or <div>), but haven't quite gotten it working yet, need to push this fix now
    var preMatch = '(^|[\\s\\0])';
    for (var i = threeCharacterEmoticons.length - 1; i >= 0; --i) {
        threeCharacterEmoticons[i] = threeCharacterEmoticons[i].replace(specialRegex, '\\$1');
        // threeCharacterEmoticons[i] = new RegExp((preMatch + '(' + threeCharacterEmoticons[i] + ')'), 'g');
    }
    for (var i = twoCharacterEmoticons.length - 1; i >= 0; --i) {
        twoCharacterEmoticons[i] = twoCharacterEmoticons[i].replace(specialRegex, '\\$1');
        // twoCharacterEmoticons[i] = new RegExp(preMatch + '(' + twoCharacterEmoticons[i] + ')', 'g');
    }
    for (var emoticon in specialEmoticons) {
        specialEmoticons[emoticon].regexp = emoticon.replace(specialRegex, '\\$1');
        specialEmoticons[emoticon].regexp = new RegExp(preMatch + '(' + specialEmoticons[emoticon].regexp + ')', 'g');
    }
    var exclude = 'span.css-emoticon';
    if (opts.exclude) {
        exclude += ',' + opts.exclude;
    }
    var excludeArray = exclude.split(',');
    return this.not(exclude).each(function () {
        var container = $(this);
        var cssClass = 'css-emoticon';
        if (opts.animate) {
            cssClass += ' un-transformed-emoticon animated-emoticon';
        }
        for (var emoticon in specialEmoticons) {
            var specialCssClass = cssClass + " " + specialEmoticons[emoticon].cssClass;
            container.html(container.html().replace(specialEmoticons[emoticon].regexp, "$1<span class='" + specialCssClass + "'>$2</span>"));
        }
        $(threeCharacterEmoticons).each(function () {
            container.html(container.html().replace(this, "$1<span class='" + cssClass + "'>$2</span>"));
        });
        $(twoCharacterEmoticons).each(function () {
            container.html(container.html().replace(this, "$1<span class='" + cssClass + " spaced-emoticon'>$2</span>"));
        });
        // fix emoticons that got matched more then once (where one emoticon is a subset of another emoticon), and thus got nested spans
        $.each(excludeArray, function (index, item) {
            container.find($.trim(item) + " span.css-emoticon").each(function () {
                $(this).replaceWith($(this).text());
            });
        });
        if (opts.animate) {
            setTimeout(function () {
                $('.un-transformed-emoticon').removeClass('un-transformed-emoticon');
            }, opts.delay);
        }
    });
};
$.fn.unemoticonize = function (options) {
    var opts = $.extend({}, $.fn.emoticonize.defaults, options);
    return this.each(function () {
        var container = $(this);
        container.find('span.css-emoticon').each(function () {
            // add delay equal to animate speed if animate is not false
            var span = $(this);
            if (opts.animate) {
                span.addClass('un-transformed-emoticon');
                setTimeout(function () {
                    span.replaceWith(span.text());
                }, opts.delay);
            }
            else {
                span.replaceWith(span.text());
            }
        });
    });
};
$.fn.emoticonize.defaults = { animate: true, delay: 500, exclude: 'pre,code,.no-emoticons' };
var init = function (options) {
    $.extend(chatbox_config, options);
};
var delBox = function (id) {
    // TODO
};
var getNextOffset = function () {
    return (chatbox_config.width + chatbox_config.gap) * showList.length;
};
var boxClosedCallback = function (id) {
    // close button in the titlebar is clicked
    var idx = showList.indexOf(id);
    if (idx != -1) {
        showList.splice(idx, 1);
        var diff = chatbox_config.width + chatbox_config.gap;
        for (var i = idx; i < showList.length; i++) {
            chatbox_config.offset = $("#" + showList[i]).chatbox("option", "offset");
            $("#" + showList[i]).chatbox("option", "offset", chatbox_config.offset - diff);
        }
    }
    else {
        alert("NOTE: Id missing from array: " + id);
    }
};
// caller should guarantee the uniqueness of id
var addBox = function (id, user, name) {
    var idx1 = showList.indexOf(id);
    var idx2 = boxList.indexOf(id);
    if (idx1 != -1) {
        // found one in show box, do nothing
    }
    else if (idx2 != -1) {
        // exists, but hidden
        // show it and put it back to showList
        $("#" + id).chatbox("option", "offset", getNextOffset());
        var manager = $("#" + id).chatbox("option", "boxManager");
        manager.toggleBox();
        showList.push(id);
    }
    else {
        var el = document.createElement('div');
        el.setAttribute('id', id);
        $(el).chatbox({
            id: id,
            user: user,
            title: '<i title="' + user.status + '"></i>' + user.first_name + " " + user.last_name,
            hidden: false,
            offset: getNextOffset(),
            width: chatbox_config.width,
            status: user.status,
            alertmsg: user.alertmsg,
            alertshow: user.alertshow,
            messageSent: dispatch,
            boxClosed: boxClosedCallback
        });
        boxList.push(id);
        showList.push(id);
        nameList.push(user.first_name);
    }
};
var messageSentCallback = function (id, user, msg) {
    var idx = boxList.indexOf(id);
    // chatbox_config.messageSent(nameList[idx], msg);
};
// not used in demo
var dispatch = function (id, user, msg) {
    //$("#log").append("<i>" + moment().calendar() + "</i> you said to <b>" + user.first_name + " " + user.last_name + ":</b> " + msg + "<br/>");
    if ($('#chatlog').length) {
        $("#chatlog").append("You said to <b>" + user.first_name + " " + user.last_name + ":</b> " + msg + "<br/>").effect("highlight", {}, 500);
    }
    $("#" + id).chatbox("option", "boxManager").addMsg("Me", msg);
};
var chatboxManager = {
    init: init,
    addBox: addBox,
    delBox: delBox,
    dispatch: dispatch
};
//# sourceMappingURL=aside-chat-boxes.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AsideChatComponent = (function () {
    function AsideChatComponent(chatService) {
        this.chatService = chatService;
        this.users = [];
        this.state = {
            open: false,
            filter: ''
        };
    }
    AsideChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.getChatState().subscribe(function (state) {
            _this.users = state.users.map(function (it) {
                it.visible = true;
                return it;
            });
        });
    };
    AsideChatComponent.prototype.onFilter = function () {
        var _this = this;
        this.users.forEach(function (it) {
            if (!_this.state.filter) {
                it.visible = true;
            }
            else {
                it.visible = it.username.toLowerCase().indexOf(_this.state.filter.toLocaleLowerCase()) > -1;
            }
        });
    };
    AsideChatComponent.prototype.openToggle = function (e) {
        this.state.open = !this.state.open;
        $(this.chatUsersList.nativeElement).slideToggle();
        e.preventDefault();
    };
    return AsideChatComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chatUsersList'),
    __metadata("design:type", Object)
], AsideChatComponent.prototype, "chatUsersList", void 0);
AsideChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'aside-chat',
        template: __webpack_require__(717),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _a || Object])
], AsideChatComponent);

var _a;
//# sourceMappingURL=aside-chat.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatWidgetComponent = (function () {
    function ChatWidgetComponent() {
    }
    ChatWidgetComponent.prototype.ngOnInit = function () {
    };
    return ChatWidgetComponent;
}());
ChatWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chat-widget',
        template: __webpack_require__(718),
    }),
    __metadata("design:paramtypes", [])
], ChatWidgetComponent);

//# sourceMappingURL=chat-widget.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBodyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatBodyComponent = (function () {
    function ChatBodyComponent(chatService, el) {
        this.chatService = chatService;
        this.el = el;
    }
    ChatBodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.newMessage.subscribe(function (message) {
            _this.messages.push(message);
            _this.scrollDown();
        });
    };
    ChatBodyComponent.prototype.messageTo = function (user) {
        this.chatService.messageTo(user);
    };
    ChatBodyComponent.prototype.scrollDown = function () {
        var $body = $('#chat-body', this.el.nativeElement);
        $body.animate({ scrollTop: $body[0].scrollHeight });
    };
    return ChatBodyComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChatBodyComponent.prototype, "messages", void 0);
ChatBodyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chat-body',
        template: __webpack_require__(719),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], ChatBodyComponent);

var _a, _b;
//# sourceMappingURL=chat-body.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatFormComponent = (function () {
    function ChatFormComponent(chatService, userService) {
        this.chatService = chatService;
        this.userService = userService;
        this.message = '';
        this.enterToSend = false;
    }
    ChatFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.messageToSubject.subscribe(function (user) {
            _this.message += (user.username + ', ');
        });
        this.user = this.userService.userInfo;
        this.userService.user.subscribe(function (user) {
            _this.user = user;
        });
    };
    ChatFormComponent.prototype.sendMessage = function () {
        if (this.message.trim() == '')
            return;
        this.chatService.sendMessage({
            body: this.message,
            user: this.user,
            date: new Date()
        });
        this.message = '';
    };
    ChatFormComponent.prototype.sendMessageEnter = function () {
        if (this.enterToSend) {
            this.sendMessage();
        }
    };
    return ChatFormComponent;
}());
ChatFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chat-form',
        template: __webpack_require__(720),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]) === "function" && _b || Object])
], ChatFormComponent);

var _a, _b;
//# sourceMappingURL=chat-form.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatUsersComponent = (function () {
    function ChatUsersComponent(chatService) {
        this.chatService = chatService;
        this.filter = '';
        this.isOpen = false;
    }
    ChatUsersComponent.prototype.openToggle = function () {
        this.isOpen = !this.isOpen;
    };
    ChatUsersComponent.prototype.messageTo = function (user) {
        this.chatService.messageTo(user);
    };
    ChatUsersComponent.prototype.ngOnInit = function () {
    };
    return ChatUsersComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChatUsersComponent.prototype, "users", void 0);
ChatUsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chat-users',
        template: __webpack_require__(721),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _a || Object])
], ChatUsersComponent);

var _a;
//# sourceMappingURL=chat-users.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = (function () {
    function ChatComponent(chatService) {
        this.chatService = chatService;
        this.users = [];
        this.messages = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.getChatState().subscribe(function (state) {
            _this.users = state.users;
            _this.messages = state.messages;
        });
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chat',
        template: __webpack_require__(722),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _a || Object])
], ChatComponent);

var _a;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i18n_service__ = __webpack_require__(127);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18nPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var I18nPipe = (function () {
    function I18nPipe(i18nService) {
        this.i18nService = i18nService;
    }
    I18nPipe.prototype.transform = function (phrase, args) {
        return this.i18nService.getTranslation(phrase);
    };
    return I18nPipe;
}());
I18nPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'i18n',
        pure: false
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__i18n_service__["a" /* I18nService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__i18n_service__["a" /* I18nService */]) === "function" && _a || Object])
], I18nPipe);

var _a;
//# sourceMappingURL=i18n.pipe.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__languages_model__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n_service__ = __webpack_require__(127);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageSelectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LanguageSelectorComponent = (function () {
    function LanguageSelectorComponent(i18n) {
        this.i18n = i18n;
    }
    LanguageSelectorComponent.prototype.ngOnInit = function () {
        this.languages = __WEBPACK_IMPORTED_MODULE_1__languages_model__["a" /* languages */];
        this.currentLanguage = this.i18n.currentLanguage;
    };
    LanguageSelectorComponent.prototype.setLanguage = function (language) {
        this.currentLanguage = language;
        this.i18n.setLanguage(language);
    };
    return LanguageSelectorComponent;
}());
LanguageSelectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-language-selector',
        template: __webpack_require__(723),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__i18n_service__["a" /* I18nService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__i18n_service__["a" /* I18nService */]) === "function" && _a || Object])
], LanguageSelectorComponent);

var _a;
//# sourceMappingURL=language-selector.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_fade_zoom_in_top_decorator__ = __webpack_require__(193);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmptyLayoutComponent = (function () {
    function EmptyLayoutComponent() {
    }
    EmptyLayoutComponent.prototype.ngOnInit = function () {
    };
    return EmptyLayoutComponent;
}());
EmptyLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animations_fade_zoom_in_top_decorator__["a" /* FadeZoomInTop */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-empty-layout',
        template: __webpack_require__(725),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], EmptyLayoutComponent);

//# sourceMappingURL=empty-layout.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calendarActivitiesMessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var calendarActivitiesMessageComponent = (function () {
    function calendarActivitiesMessageComponent() {
    }
    calendarActivitiesMessageComponent.prototype.ngOnInit = function () {
    };
    return calendarActivitiesMessageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], calendarActivitiesMessageComponent.prototype, "events", void 0);
calendarActivitiesMessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '[calendarActivitiesMessages]',
        template: __webpack_require__(732),
    }),
    __metadata("design:paramtypes", [])
], calendarActivitiesMessageComponent);

//# sourceMappingURL=calendar-activities-message.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__voice_control_voice_control_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voice_control_voice_recognition_service__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeechButtonComponent = (function () {
    function SpeechButtonComponent(voiceControlService, voiceRecognitionService) {
        var _this = this;
        this.voiceControlService = voiceControlService;
        this.voiceRecognitionService = voiceRecognitionService;
        this.hasError = false;
        this.enabled = false;
        this.speechPopoverShown = false;
        this.enabled = this.voiceControlService.state.enabled && this.voiceControlService.state.available;
        this.voiceRecognitionService.events.delay(50).subscribe(function (event) {
            _this.respondTo(event);
        });
        this.voiceControlService.helpShown.delay(50).subscribe(function () {
            if (_this.speechPopoverShown) {
                _this.speechPopover.hide();
            }
        });
    }
    SpeechButtonComponent.prototype.ngOnInit = function () {
        this.voiceControlService.attachHelp();
    };
    SpeechButtonComponent.prototype.seeCommands = function () {
        this.voiceControlService.showHelp();
    };
    SpeechButtonComponent.prototype.toggleVoiceControl = function () {
        this.speechPopoverShown = !this.speechPopoverShown;
        if (!this.voiceControlService.state.started) {
            this.voiceControlService.voiceControlOn();
        }
        else {
            this.voiceControlService.voiceControlOff();
        }
    };
    SpeechButtonComponent.prototype.respondTo = function (event) {
        switch (event.type) {
            case 'start':
                this.hasError = false;
                break;
            case 'error':
                this.hasError = true;
                break;
            case 'match':
            case 'no match':
                if (this.speechPopoverShown) {
                    this.speechPopover.hide();
                }
                break;
        }
    };
    return SpeechButtonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('speechPopover'),
    __metadata("design:type", Object)
], SpeechButtonComponent.prototype, "speechPopover", void 0);
SpeechButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-speech-button',
        template: __webpack_require__(737),
        styles: [".vc-title-error {display: block;}"]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__voice_control_voice_control_service__["a" /* VoiceControlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__voice_control_voice_control_service__["a" /* VoiceControlService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__voice_control_voice_recognition_service__["a" /* VoiceRecognitionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__voice_control_voice_recognition_service__["a" /* VoiceRecognitionService */]) === "function" && _b || Object])
], SpeechButtonComponent);

var _a, _b;
//# sourceMappingURL=speech-button.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteBreadcrumbsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RouteBreadcrumbsComponent = (function () {
    function RouteBreadcrumbsComponent(route, router) {
        this.route = route;
        this.router = router;
        this.items = [];
    }
    RouteBreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]; })
            .subscribe(function (v) {
            _this.items = [];
            _this.extract(_this.router.routerState.root);
        });
    };
    RouteBreadcrumbsComponent.prototype.extract = function (route) {
        var _this = this;
        var pageTitle = route.data.value['pageTitle'];
        if (pageTitle && this.items.indexOf(pageTitle) == -1) {
            this.items.push(route.data.value['pageTitle']);
        }
        if (route.children) {
            route.children.forEach(function (it) {
                _this.extract(it);
            });
        }
    };
    RouteBreadcrumbsComponent.prototype.breadcrumbsNavigation = function (path) {
        var item = path.toLowerCase();
        if (item.indexOf(' ') >= 0 || item == 'analytics' || item == 'admin' || item == 'dashboard') { }
        else {
            var link = ['/' + item];
            this.router.navigate(link);
        }
    };
    return RouteBreadcrumbsComponent;
}());
RouteBreadcrumbsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-route-breadcrumbs',
        template: "\n        <ol class=\"breadcrumb\">\n           <li *ngFor=\"let item of items\" (click)=\"breadcrumbsNavigation(item)\" ><a>{{item}}</a></li>\n        </ol>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RouteBreadcrumbsComponent);

var _a, _b;
//# sourceMappingURL=route-breadcrumbs.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sound_service__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SoundModule = SoundModule_1 = (function () {
    function SoundModule() {
    }
    SoundModule.forRoot = function () {
        return {
            ngModule: SoundModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_2__sound_service__["a" /* SoundService */]]
        };
    };
    return SoundModule;
}());
SoundModule = SoundModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [],
        providers: [__WEBPACK_IMPORTED_MODULE_2__sound_service__["a" /* SoundService */]]
    })
], SoundModule);

var SoundModule_1;
//# sourceMappingURL=sound.module.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_layout_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginInfoComponent; });
/* unused harmony export UserInfo */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginInfoComponent = (function () {
    function LoginInfoComponent(userService, layoutService) {
        this.userService = userService;
        this.layoutService = layoutService;
        this.user = new UserInfo('', '', null);
    }
    LoginInfoComponent.prototype.ngOnInit = function () {
        // this.userService.getLoginInfo().subscribe(user => {
        //   this.user.username = localStorage.getItem('currentUser');
        //   this.user.picture = user.picture;
        //   this.user.activity = user.activity;
        // })
        var user = {
            "username": "John Doe",
            "picture": "assets/img/avatars/sunny.png",
            "activity": 12
        };
        this.user.username = localStorage.getItem('UserName');
        this.user.picture = user.picture;
        this.user.activity = user.activity;
    };
    LoginInfoComponent.prototype.toggleShortcut = function () {
        this.layoutService.onShortcutToggle();
    };
    return LoginInfoComponent;
}());
LoginInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-login-info',
        template: __webpack_require__(742),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__layout_layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__layout_layout_service__["a" /* LayoutService */]) === "function" && _b || Object])
], LoginInfoComponent);

var UserInfo = (function () {
    function UserInfo(username, picture, activity) {
        this.username = username;
        this.picture = picture;
        this.activity = activity;
    }
    return UserInfo;
}());

var _a, _b;
//# sourceMappingURL=login-info.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_notification_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogoutComponent = (function () {
    function LogoutComponent(router, alertNotificationService, userService) {
        this.router = router;
        this.alertNotificationService = alertNotificationService;
        this.userService = userService;
    }
    LogoutComponent.prototype.showPopup = function () {
        var _this = this;
        this.alertNotificationService.smartMessageBox({
            title: "<i class='fa fa-sign-out txt-color-orangeDark'></i> Logout <span class='txt-color-orangeDark'><strong>" + $('#show-shortcut').text() + "</strong></span> ?",
            content: "You can improve your security further after logging out by closing this opened browser",
            buttons: '[No][Yes]'
        }, function (ButtonPressed) {
            if (ButtonPressed == "Yes") {
                _this.logout();
            }
        });
    };
    LogoutComponent.prototype.logout = function () {
        // this.userService.userLogout().subscribe(response => {
        localStorage.setItem('Authentication', '');
        localStorage.setItem('currentUser', '');
        localStorage.setItem('userData', '');
        localStorage.setItem('userRole', '');
        this.router.navigate(['/login']);
        // })
        if (__WEBPACK_IMPORTED_MODULE_3__global__["a" /* Global */].stompClient) {
            __WEBPACK_IMPORTED_MODULE_3__global__["a" /* Global */].stompClient.disconnect();
        }
    };
    LogoutComponent.prototype.ngOnInit = function () {
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-logout',
        template: "\n<div id=\"logout\" (click)=\"showPopup()\" class=\"btn-header transparent pull-right\">\n        <span> <a routerlink=\"/login\" title=\"Sign Out\" data-action=\"userLogout\"\n                  data-logout-msg=\"You can improve your security further after logging out by closing this opened browser\">Logout</a> </span>\n    </div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__utils_notification_service__["a" /* AlertNotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__utils_notification_service__["a" /* AlertNotificationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _c || Object])
], LogoutComponent);

var _a, _b, _c;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FieldFilterPipe = (function () {
    function FieldFilterPipe() {
    }
    FieldFilterPipe.prototype.transform = function (items, field, value) {
        if (!items)
            return [];
        if (!value)
            return items;
        return items.filter(function (it) { return it[field].toLowerCase().indexOf(value.toLowerCase()) > -1; });
    };
    return FieldFilterPipe;
}());
FieldFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'fieldFilter',
    })
], FieldFilterPipe);

//# sourceMappingURL=field-filter.pipe.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MomentPipeFromNow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MomentDateGroupedPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MomentPipe = (function () {
    function MomentPipe() {
    }
    MomentPipe.prototype.transform = function (value, format) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).format(format);
    };
    return MomentPipe;
}());
MomentPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'moment'
    })
], MomentPipe);

var MomentPipeFromNow = (function () {
    function MomentPipeFromNow() {
    }
    MomentPipeFromNow.prototype.transform = function (value, format) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).calendar();
    };
    return MomentPipeFromNow;
}());
MomentPipeFromNow = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'momentfromnow'
    })
], MomentPipeFromNow);

var MomentDateGroupedPipe = (function () {
    function MomentDateGroupedPipe() {
    }
    MomentDateGroupedPipe.prototype.transform = function (value, format) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).format(format);
    };
    return MomentDateGroupedPipe;
}());
MomentDateGroupedPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'momentdategrouped'
    })
], MomentDateGroupedPipe);

//# sourceMappingURL=moment.pipe.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimeDirective = (function () {
    function TimeDirective() {
    }
    return TimeDirective;
}());
TimeDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: 'time' })
], TimeDirective);

//# sourceMappingURL=time.directive.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleActiveDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToggleActiveDirective = (function () {
    function ToggleActiveDirective() {
    }
    return ToggleActiveDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.active'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ToggleActiveDirective.prototype, "saToggleActive", void 0);
ToggleActiveDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[saToggleActive]'
    }),
    __metadata("design:paramtypes", [])
], ToggleActiveDirective);

//# sourceMappingURL=toggle-active.directive.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
    grid: 'article',
    widgets: '.jarviswidget',
    localStorage: false,
    deleteSettingsKey: '#deletesettingskey-options',
    settingsKeyLabel: 'Reset settings?',
    deletePositionKey: '#deletepositionkey-options',
    positionKeyLabel: 'Reset position?',
    sortable: true,
    buttonsHidden: false,
    // toggle button
    toggleButton: true,
    toggleClass: 'fa fa-minus | fa fa-plus',
    toggleSpeed: 1,
    onToggle: function () {
    },
    // delete btn
    deleteButton: false,
    deleteMsg: 'Warning: This action cannot be undone!',
    deleteClass: 'fa fa-times',
    deleteSpeed: 1,
    onDelete: function () {
    },
    // edit btn
    editButton: true,
    editPlaceholder: '.jarviswidget-editbox',
    editClass: 'fa fa-cog | fa fa-save',
    editSpeed: 1,
    onEdit: function () {
    },
    // color button
    colorButton: true,
    // full screen
    fullscreenButton: true,
    fullscreenClass: 'fa fa-expand | fa fa-compress',
    fullscreenDiff: 3,
    onFullscreen: function () {
    },
    // custom btn
    customButton: false,
    customClass: 'folder-10 | next-10',
    customStart: function () {
        alert('Hello you, this is a custom button...');
    },
    customEnd: function () {
        alert('bye, till next time...');
    },
    // order
    buttonOrder: '%refresh% %custom% %edit% %toggle% %fullscreen% %delete%',
    opacity: 1.0,
    dragHandle: '> header',
    placeholderClass: 'jarviswidget-placeholder',
    indicator: true,
    indicatorTime: 600,
    ajax: true,
    timestampPlaceholder: '.jarviswidget-timestamp',
    timestampFormat: 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
    refreshButton: true,
    refreshButtonClass: 'fa fa-refresh',
    labelError: 'Sorry but there was a error:',
    labelUpdated: 'Last Update:',
    labelRefresh: 'Refresh',
    labelDelete: 'Delete widget:',
    afterLoad: function () {
    },
    rtl: false,
    onChange: function () {
    },
    onSave: function () {
    },
    ajaxnav: true
};
//# sourceMappingURL=widget.defaults.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetComponent = WidgetComponent_1 = (function () {
    function WidgetComponent(el, route, router) {
        this.el = el;
        this.route = route;
        this.router = router;
        this.colorbutton = true;
        this.editbutton = true;
        this.togglebutton = true;
        this.deletebutton = true;
        this.fullscreenbutton = true;
        this.custombutton = false;
        this.collapsed = false;
        this.sortable = true;
        this.hidden = false;
        this.load = false;
        this.refresh = false;
    }
    WidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.widgetId = this.genId();
        if (this.widgetId == 'admin--health-chart') {
        }
        var fields = this.widgetId.split('--');
        var street = fields[1];
        // $(`${this.widgetId} a.jarviswidget - fullscreen - btn`).trigger("click");
        var widget = this.el.nativeElement.children[0];
        if (this.sortable) {
            widget.className += ' jarviswidget-sortable';
        }
        if (this.color) {
            widget.className += (' jarviswidget-color-' + this.color);
        }
        ['colorbutton',
            'editbutton',
            'togglebutton',
            'deletebutton',
            'fullscreenbutton',
            'custombutton',
            'sortable'
        ].forEach(function (option) {
            if (!_this[option]) {
                widget.setAttribute('data-widget-' + option, 'false');
            }
        });
        [
            'hidden',
            'collapsed'
        ].forEach(function (option) {
            if (_this[option]) {
                widget.setAttribute('data-widget-' + option, 'true');
            }
        });
        // ['refresh', 'load'].forEach(function (option) {
        //   if (this[option])
        //     widgetProps['data-widget-' + option] = this[option]
        // }.bind(this));
    };
    WidgetComponent.prototype.genId = function () {
        if (this.name) {
            return this.name;
        }
        else {
            var heading = this.el.nativeElement.querySelector('header h2');
            var id = heading ? heading.textContent.trim() : 'jarviswidget-' + WidgetComponent_1.counter++;
            id = id.toLowerCase().replace(/\W+/gm, '-');
            var url = this.router.url.substr(1).replace(/\//g, '-');
            id = url + '--' + id;
            return id;
        }
    };
    WidgetComponent.prototype.ngAfterViewInit = function () {
        var $widget = $(this.el.nativeElement);
        if (this.editbutton) {
            $widget.find('.widget-body').prepend('<div class="jarviswidget-editbox"><input class="form-control" type="text"></div>');
        }
        var isFiller = $widget.hasClass('sa-fx-col');
        if ($widget.attr('class')) {
            $widget.find('.jarviswidget').addClass($widget.attr('class'));
            $widget.attr('class', '');
        }
        if (isFiller) {
            $widget.attr('class', 'sa-fx-col');
        }
    };
    return WidgetComponent;
}());
WidgetComponent.counter = 0;
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], WidgetComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "colorbutton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "editbutton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "togglebutton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "deletebutton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "fullscreenbutton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "custombutton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "collapsed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "sortable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "hidden", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], WidgetComponent.prototype, "color", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "load", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "refresh", void 0);
WidgetComponent = WidgetComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-widget',
        template: "<div id=\"{{widgetId}}\" class=\"jarviswidget\"\n    \n  ><ng-content></ng-content></div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetComponent);

var WidgetComponent_1, _a, _b, _c;
//# sourceMappingURL=widget.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget_defaults__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_jarvis_widget_ng2_js__ = __webpack_require__(998);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_jarvis_widget_ng2_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_jarvis_widget_ng2_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsGridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import 'smartadmin-plugins/smartwidgets/jarvis.widget.ng2.js'

var WidgetsGridComponent = (function () {
    function WidgetsGridComponent(el) {
        this.el = el;
    }
    WidgetsGridComponent.prototype.ngAfterViewInit = function () {
        $('#widgets-grid', this.el.nativeElement).jarvisWidgets(__WEBPACK_IMPORTED_MODULE_1__widget_defaults__["a" /* default */]);
    };
    return WidgetsGridComponent;
}());
WidgetsGridComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-widgets-grid',
        template: "\n     <section id=\"widgets-grid\">\n       <ng-content></ng-content>\n     </section>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], WidgetsGridComponent);

var _a;
//# sourceMappingURL=widgets-grid.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_mergeMap__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_ui_npm_jquery_ui_min_js__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_ui_npm_jquery_ui_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery_ui_npm_jquery_ui_min_js__);
// RxJS


// Smartadmin Dependencies
window['jQuery'] = __webpack_require__(191);
window['$'] = window['jQuery'];

__webpack_require__(537); // required for X-editable
__webpack_require__(535); // required for X-editable
__webpack_require__(533); // required for bootstrap-colorpicker
__webpack_require__(536); //
__webpack_require__(534); //
window['moment'] = __webpack_require__(2);
// import 'imports-loader?jQuery=jquery!jquery-color/jquery.color.js'
__webpack_require__(997);
//# sourceMappingURL=lib.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertNotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertNotificationService = (function () {
    function AlertNotificationService() {
    }
    AlertNotificationService.prototype.smallBox = function (data, cb) {
        $.smallBox(data, cb);
    };
    AlertNotificationService.prototype.bigBox = function (data, cb) {
        $.bigBox(data, cb);
    };
    AlertNotificationService.prototype.smartMessageBox = function (data, cb) {
        $.SmartMessageBox(data, cb);
    };
    return AlertNotificationService;
}());
AlertNotificationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AlertNotificationService);

//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_api_json_api_service__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatService = (function () {
    function ChatService(jsonApiService) {
        this.jsonApiService = jsonApiService;
        this.url = '/chat/chat.json';
        this.messageToSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.newMessage = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
    }
    ChatService.prototype.getChatState = function () {
        return this.jsonApiService.fetch(this.url);
    };
    ChatService.prototype.messageTo = function (user) {
        this.messageToSubject.next(user);
    };
    ChatService.prototype.sendMessage = function (message) {
        this.newMessage.next(message);
    };
    return ChatService;
}());
ChatService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_api_json_api_service__["a" /* JsonApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_api_json_api_service__["a" /* JsonApiService */]) === "function" && _a || Object])
], ChatService);

var _a;
//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    defaultLocale: "us",
    API_URL: "assets/api",
    menu_speed: 200,
    smartSkin: "smart-style-0",
    skins: [
        {
            name: "smart-style-0",
            logo: "assets/img/solor.png",
            skinBtnClass: "btn btn-block btn-xs txt-color-white margin-right-5",
            style: {
                backgroundColor: '#4E463F'
            },
            label: "Smart Default"
        },
        {
            name: "smart-style-1",
            logo: "assets/img/logo-white.png",
            skinBtnClass: "btn btn-block btn-xs txt-color-white",
            style: {
                background: '#3A4558'
            },
            label: "Dark Elegance"
        },
        {
            name: "smart-style-2",
            logo: "assets/img/logo-blue.png",
            skinBtnClass: "btn btn-xs btn-block txt-color-darken margin-top-5",
            style: {
                background: '#fff'
            },
            label: "Ultra Light"
        },
        {
            name: "smart-style-3",
            logo: "assets/img/logo-pale.png",
            skinBtnClass: "btn btn-xs btn-block txt-color-white margin-top-5",
            style: {
                background: '#f78c40'
            },
            label: "Google Skin"
        },
        {
            name: "smart-style-4",
            logo: "assets/img/logo-pale.png",
            skinBtnClass: "btn btn-xs btn-block txt-color-white margin-top-5",
            style: {
                background: '#bbc0cf',
                border: '1px solid #59779E',
                color: '#17273D !important'
            },
            label: "PixelSmash"
        },
        {
            name: "smart-style-5",
            logo: "assets/img/logo-pale.png",
            skinBtnClass: "btn btn-xs btn-block txt-color-white margin-top-5",
            style: {
                background: 'rgba(153, 179, 204, 0.2)',
                border: '1px solid rgba(121, 161, 221, 0.8)',
                color: '#17273D !important'
            },
            label: "Glass"
        },
    ],
    GOOGLE_API_KEY: 'AIzaSyDd8YW8k_J-Jkti-W4QNk5dL8O_5_2QUWY',
    sound_path: "assets/sound/",
    sound_on: true,
    /**
     * DEBUGGING MODE
     * debugState = true; will spit all debuging message inside browser console.
     * The colors are best displayed in chrome browser.
     */
    debugState: false,
    debugStyle: 'font-weight: bold; color: #00f;',
    debugStyle_green: 'font-weight: bold; font-style:italic; color: #46C246;',
    debugStyle_red: 'font-weight: bold; color: #ed1c24;',
    debugStyle_warning: 'background-color:yellow',
    debugStyle_success: 'background-color:green; font-weight:bold; color:#fff;',
    debugStyle_error: 'background-color:#ed1c24; font-weight:bold; color:#fff;',
    /**
     *  VOICE CONTROL
     */
    voice_command: true,
    voice_command_auto: false,
    /**
     *  Sets the language to the default 'en-US'. (supports over 50 languages
     *  by google)
     *
     *  Afrikaans         ['af-ZA']
     *  Bahasa Indonesia  ['id-ID']
     *  Bahasa Melayu     ['ms-MY']
     *  CatalГ            ['ca-ES']
     *  ДЊeЕЎtina         ['cs-CZ']
     *  Deutsch           ['de-DE']
     *  English           ['en-AU', 'Australia']
     *                    ['en-CA', 'Canada']
     *                    ['en-IN', 'India']
     *                    ['en-NZ', 'New Zealand']
     *                    ['en-ZA', 'South Africa']
     *                    ['en-GB', 'United Kingdom']
     *                    ['en-US', 'United States']
     *  EspaГ±ol          ['es-AR', 'Argentina']
     *                    ['es-BO', 'Bolivia']
     *                    ['es-CL', 'Chile']
     *                    ['es-CO', 'Colombia']
     *                    ['es-CR', 'Costa Rica']
     *                    ['es-EC', 'Ecuador']
     *                    ['es-SV', 'El Salvador']
     *                    ['es-ES', 'EspaГ±a']
     *                    ['es-US', 'Estados Unidos']
     *                    ['es-GT', 'Guatemala']
     *                    ['es-HN', 'Honduras']
     *                    ['es-MX', 'MГ©xico']
     *                    ['es-NI', 'Nicaragua']
     *                    ['es-PA', 'PanamГЎ']
     *                    ['es-PY', 'Paraguay']
     *                    ['es-PE', 'PerГє']
     *                    ['es-PR', 'Puerto Rico']
     *                    ['es-DO', 'RepГєblica Dominicana']
     *                    ['es-UY', 'Uruguay']
     *                    ['es-VE', 'Venezuela']
     *  Euskara           ['eu-ES']
     *  FranГ§ais         ['fr-FR']
     *  Galego            ['gl-ES']
     *  Hrvatski          ['hr_HR']
     *  IsiZulu           ['zu-ZA']
     *  ГЌslenska         ['is-IS']
     *  Italiano          ['it-IT', 'Italia']
     *                    ['it-CH', 'Svizzera']
     *  Magyar            ['hu-HU']
     *  Nederlands        ['nl-NL']
     *  Norsk bokmГҐl     ['nb-NO']
     *  Polski            ['pl-PL']
     *  PortuguГЄs        ['pt-BR', 'Brasil']
     *                    ['pt-PT', 'Portugal']
     *  RomГўnДѓ          ['ro-RO']
     *  SlovenДЌina       ['sk-SK']
     *  Suomi             ['fi-FI']
     *  Svenska           ['sv-SE']
     *  TГјrkГ§e          ['tr-TR']
     *  Р±СЉР»РіР°СЂСЃРєРё['bg-BG']
     *  PСѓСЃСЃРєРёР№     ['ru-RU']
     *  РЎСЂРїСЃРєРё      ['sr-RS']
     *  н•њкµ­м–ґ         ['ko-KR']
     *  дё­ж–‡            ['cmn-Hans-CN', 'ж™®йЂљиЇќ (дё­е›Ѕе¤§й™†)']
     *                    ['cmn-Hans-HK', 'ж™®йЂљиЇќ (й¦™жёЇ)']
     *                    ['cmn-Hant-TW', 'дё­ж–‡ (еЏ°зЃЈ)']
     *                    ['yue-Hant-HK', 'зІµиЄћ (й¦™жёЇ)']
     *  ж—Ґжњ¬иЄћ         ['ja-JP']
     *  Lingua latД«na    ['la']
     */
    voice_command_lang: 'en-US',
    /**
     *  Use localstorage to remember on/off (best used with HTML Version)
     */
    voice_localStorage: false,
    /**
     * Voice Commands
     * Defines all voice command variables and functions
     */
    voice_commands: {
        'show dashboard': {
            type: 'navigate', payload: ['/dashboard/+analytics']
        },
        'show +social': {
            type: 'navigate', payload: ['/dashboard/+social']
        },
        'show outlook': {
            type: 'navigate', payload: ['/outlook']
        },
        'show graphs': {
            type: 'navigate', payload: ['/graphs/chart-js']
        },
        'show flot chart': {
            type: 'navigate', payload: ['/graphs/flot-charts']
        },
        'show morris chart': {
            type: 'navigate', payload: ['/graphs/morris-charts']
        },
        'show inline chart': {
            type: 'navigate', payload: ['/graphs/sparklines']
        },
        'show dygraphs': {
            type: 'navigate', payload: ['/graphs/dygraphs']
        },
        'show tables': {
            type: 'navigate', payload: ['/tables/normal']
        },
        'show data table': {
            type: 'navigate', payload: ['/tables/datatables']
        },
        'show form': {
            type: 'navigate', payload: ['/forms/elements']
        },
        'show form layouts': {
            type: 'navigate', payload: ['/forms/layouts']
        },
        'show form validation': {
            type: 'navigate', payload: ['/forms/validation']
        },
        'show form elements': {
            type: 'navigate', payload: ['/forms/bootstrap-elements']
        },
        'show form plugins': {
            type: 'navigate', payload: ['/forms/plugins']
        },
        'show form wizards': {
            type: 'navigate', payload: ['/forms/wizards']
        },
        'show bootstrap editor': {
            type: 'navigate', payload: ['/forms/editors']
        },
        'show dropzone': {
            type: 'navigate', payload: ['/forms/dropzone']
        },
        'show image cropping': {
            type: 'navigate', payload: ['/forms/image-cropping']
        },
        'show general elements': {
            type: 'navigate', payload: ['/ui/general-elements']
        },
        'show buttons': {
            type: 'navigate', payload: ['/ui/buttons']
        },
        'show fontawesome': {
            type: 'navigate', payload: ['/ui/icons/font-awesome']
        },
        'show glyph icons': {
            type: 'navigate', payload: ['/ui/icons/glyphicons']
        },
        'show flags': {
            type: 'navigate', payload: ['/ui/icons/flags']
        },
        'show grid': {
            type: 'navigate', payload: ['/ui/grid']
        },
        'show tree view': {
            type: 'navigate', payload: ['/ui/treeviews']
        },
        'show nestable lists': {
            type: 'navigate', payload: ['/ui/nestable-lists']
        },
        'show jquery U I': {
            type: 'navigate', payload: ['/ui/jquery-ui']
        },
        'show typography': {
            type: 'navigate', payload: ['/ui/typography']
        },
        'show calendar': {
            type: 'navigate', payload: ['/calendar']
        },
        'show widgets': {
            type: 'navigate', payload: ['/widgets']
        },
        'show gallery': {
            type: 'navigate', payload: ['/app-views/gallery']
        },
        'show maps': {
            type: 'navigate', payload: ['/maps']
        },
        'go back': function () {
            history.back();
        },
        'scroll up': function () {
            jQuery('html, body').animate({ scrollTop: 0 }, 100);
        },
        'scroll down': function () {
            jQuery('html, body').animate({ scrollTop: jQuery(document).height() }, 100);
        },
        'hide navigation': {
            type: 'layout',
            payload: 'hide navigation'
        },
        'show navigation': {
            type: 'layout',
            payload: 'show navigation'
        },
        'mute': {
            type: 'sound',
            payload: 'mute',
        },
        'sound on': {
            type: 'sound',
            payload: 'sound on',
        },
        'stop': {
            type: 'voice',
            payload: 'stop'
        },
        'help': {
            type: 'voice',
            payload: 'help on'
        },
        'got it': {
            type: 'voice',
            payload: 'help off'
        },
        'logout': {
            type: 'navigate',
            payload: ['/auth/login'],
        },
    }
};
// required for SmartNotification // @todo
window['jQuery'].sound_on = config.sound_on;
window['jQuery'].sound_path = config.sound_path;
//# sourceMappingURL=smartadmin.config.js.map

/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 238,
	"./af.js": 238,
	"./ar": 245,
	"./ar-dz": 239,
	"./ar-dz.js": 239,
	"./ar-kw": 240,
	"./ar-kw.js": 240,
	"./ar-ly": 241,
	"./ar-ly.js": 241,
	"./ar-ma": 242,
	"./ar-ma.js": 242,
	"./ar-sa": 243,
	"./ar-sa.js": 243,
	"./ar-tn": 244,
	"./ar-tn.js": 244,
	"./ar.js": 245,
	"./az": 246,
	"./az.js": 246,
	"./be": 247,
	"./be.js": 247,
	"./bg": 248,
	"./bg.js": 248,
	"./bn": 249,
	"./bn.js": 249,
	"./bo": 250,
	"./bo.js": 250,
	"./br": 251,
	"./br.js": 251,
	"./bs": 252,
	"./bs.js": 252,
	"./ca": 253,
	"./ca.js": 253,
	"./cs": 254,
	"./cs.js": 254,
	"./cv": 255,
	"./cv.js": 255,
	"./cy": 256,
	"./cy.js": 256,
	"./da": 257,
	"./da.js": 257,
	"./de": 260,
	"./de-at": 258,
	"./de-at.js": 258,
	"./de-ch": 259,
	"./de-ch.js": 259,
	"./de.js": 260,
	"./dv": 261,
	"./dv.js": 261,
	"./el": 262,
	"./el.js": 262,
	"./en-au": 263,
	"./en-au.js": 263,
	"./en-ca": 264,
	"./en-ca.js": 264,
	"./en-gb": 265,
	"./en-gb.js": 265,
	"./en-ie": 266,
	"./en-ie.js": 266,
	"./en-nz": 267,
	"./en-nz.js": 267,
	"./eo": 268,
	"./eo.js": 268,
	"./es": 270,
	"./es-do": 269,
	"./es-do.js": 269,
	"./es.js": 270,
	"./et": 271,
	"./et.js": 271,
	"./eu": 272,
	"./eu.js": 272,
	"./fa": 273,
	"./fa.js": 273,
	"./fi": 274,
	"./fi.js": 274,
	"./fo": 275,
	"./fo.js": 275,
	"./fr": 278,
	"./fr-ca": 276,
	"./fr-ca.js": 276,
	"./fr-ch": 277,
	"./fr-ch.js": 277,
	"./fr.js": 278,
	"./fy": 279,
	"./fy.js": 279,
	"./gd": 280,
	"./gd.js": 280,
	"./gl": 281,
	"./gl.js": 281,
	"./gom-latn": 282,
	"./gom-latn.js": 282,
	"./he": 283,
	"./he.js": 283,
	"./hi": 284,
	"./hi.js": 284,
	"./hr": 285,
	"./hr.js": 285,
	"./hu": 286,
	"./hu.js": 286,
	"./hy-am": 287,
	"./hy-am.js": 287,
	"./id": 288,
	"./id.js": 288,
	"./is": 289,
	"./is.js": 289,
	"./it": 290,
	"./it.js": 290,
	"./ja": 291,
	"./ja.js": 291,
	"./jv": 292,
	"./jv.js": 292,
	"./ka": 293,
	"./ka.js": 293,
	"./kk": 294,
	"./kk.js": 294,
	"./km": 295,
	"./km.js": 295,
	"./kn": 296,
	"./kn.js": 296,
	"./ko": 297,
	"./ko.js": 297,
	"./ky": 298,
	"./ky.js": 298,
	"./lb": 299,
	"./lb.js": 299,
	"./lo": 300,
	"./lo.js": 300,
	"./lt": 301,
	"./lt.js": 301,
	"./lv": 302,
	"./lv.js": 302,
	"./me": 303,
	"./me.js": 303,
	"./mi": 304,
	"./mi.js": 304,
	"./mk": 305,
	"./mk.js": 305,
	"./ml": 306,
	"./ml.js": 306,
	"./mr": 307,
	"./mr.js": 307,
	"./ms": 309,
	"./ms-my": 308,
	"./ms-my.js": 308,
	"./ms.js": 309,
	"./my": 310,
	"./my.js": 310,
	"./nb": 311,
	"./nb.js": 311,
	"./ne": 312,
	"./ne.js": 312,
	"./nl": 314,
	"./nl-be": 313,
	"./nl-be.js": 313,
	"./nl.js": 314,
	"./nn": 315,
	"./nn.js": 315,
	"./pa-in": 316,
	"./pa-in.js": 316,
	"./pl": 317,
	"./pl.js": 317,
	"./pt": 319,
	"./pt-br": 318,
	"./pt-br.js": 318,
	"./pt.js": 319,
	"./ro": 320,
	"./ro.js": 320,
	"./ru": 321,
	"./ru.js": 321,
	"./sd": 322,
	"./sd.js": 322,
	"./se": 323,
	"./se.js": 323,
	"./si": 324,
	"./si.js": 324,
	"./sk": 325,
	"./sk.js": 325,
	"./sl": 326,
	"./sl.js": 326,
	"./sq": 327,
	"./sq.js": 327,
	"./sr": 329,
	"./sr-cyrl": 328,
	"./sr-cyrl.js": 328,
	"./sr.js": 329,
	"./ss": 330,
	"./ss.js": 330,
	"./sv": 331,
	"./sv.js": 331,
	"./sw": 332,
	"./sw.js": 332,
	"./ta": 333,
	"./ta.js": 333,
	"./te": 334,
	"./te.js": 334,
	"./tet": 335,
	"./tet.js": 335,
	"./th": 336,
	"./th.js": 336,
	"./tl-ph": 337,
	"./tl-ph.js": 337,
	"./tlh": 338,
	"./tlh.js": 338,
	"./tr": 339,
	"./tr.js": 339,
	"./tzl": 340,
	"./tzl.js": 340,
	"./tzm": 342,
	"./tzm-latn": 341,
	"./tzm-latn.js": 341,
	"./tzm.js": 342,
	"./uk": 343,
	"./uk.js": 343,
	"./ur": 344,
	"./ur.js": 344,
	"./uz": 346,
	"./uz-latn": 345,
	"./uz-latn.js": 345,
	"./uz.js": 346,
	"./vi": 347,
	"./vi.js": 347,
	"./x-pseudo": 348,
	"./x-pseudo.js": 348,
	"./yo": 349,
	"./yo.js": 349,
	"./zh-cn": 350,
	"./zh-cn.js": 350,
	"./zh-hk": 351,
	"./zh-hk.js": 351,
	"./zh-tw": 352,
	"./zh-tw.js": 352
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 691;


/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = "<dt *ngIf=\"user.visible\">\n  <popover-content #myPopover\n                   title=\"Popover title\"\n                   placement=\"right\"\n                   [animation]=\"true\"\n\n                   [closeOnClickOutside]=\"true\">\n\n    <div class=\"usr-card\" style=\"min-width: 200px;\">\n      <img [src]=\"user.picture\" [alt]=\"user.username\"/>\n      <div class=\"usr-card-content\">\n        <h3>{{user.username}}</h3>\n        <p [innerHTML]=\"user.role\" ></p>\n      </div>\n    </div>\n  </popover-content>\n  <a href=\"#\" class=\"usr\" (click)=\"openChatBox($event)\"\n     [attr.data-chat-id]=\"state.chatId\"\n     [attr.data-chat-status]=\"user.status\"\n     [popover]=\"myPopover\"\n     [popoverOnHover]=\"true\"\n  >\n    <i></i>{{user.username}}\n  </a>\n</dt>\n"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul>\n    <li class=\"chat-users top-menu-invisible\" [class.open]=\"state.open\"\n    >\n      <a href=\"#\" (click)=\"openToggle($event)\"><i class=\"fa fa-lg fa-fw fa-comment-o\"><em\n        class=\"bg-color-pink flash animated1\">!</em></i>&nbsp;<span\n        class=\"menu-item-parent\">Smart Chat API <sup>beta</sup></span></a>\n      <ul #chatUsersList>\n        <li>\n          <div class=\"display-users\">\n            <input class=\"form-control chat-user-filter\" placeholder=\"Filter\" type=\"text\"\n                   [(ngModel)]=\"state.filter\" (ngModelChange)=\"onFilter()\"/>\n            <dl>\n              <aside-chat-user *ngFor=\"let user of users\" [user]=\"user\"></aside-chat-user>\n            </dl>\n\n          </div>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = "<sa-widget [editbutton]=\"false\" [fullscreenbutton]=\"false\" color=\"blueDark\">\n\n  <header>\n    <span class=\"widget-icon\"> <i class=\"fa fa-comments txt-color-white\"></i> </span>\n\n    <h2> SmartMessage </h2>\n\n    <div class=\"widget-toolbar\">\n      <div dropdown>\n\n        <button type=\"button\" class=\"btn btn-xs btn-success\" dropdownToggle >\n          Status <span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu pull-right js-status-update\" >\n          <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"(null)\">\n            <i class=\"fa fa-circle txt-color-green\"></i> Online</a></li>\n          <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"(null)\">\n            <i class=\"fa fa-circle txt-color-red\"></i> Busy\n          </a></li>\n          <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"(null)\">\n            <i class=\"fa fa-circle txt-color-orange\"></i> Away\n          </a></li>\n          <li class=\"divider dropdown-divider\"></li>\n          <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"(null)\">\n            <i class=\"fa fa-power-off\"></i> Log Off\n          </a></li>\n        </ul>\n      </div>\n\n    </div>\n  </header>\n\n  <div>\n    <div class=\"widget-body widget-hide-overflow no-padding\">\n      <chat></chat>\n    </div>\n\n  </div>\n</sa-widget>\n"

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = "<div id=\"chat-body\" class=\"chat-body custom-scroll\">\n  <ul>\n    <li class=\"message\" *ngFor=\"let message of messages\">\n      <img class=\"message-picture online\" src=\"{{message.user.picture}}\">\n\n      <div class=\"message-text\">\n        <time>\n          {{message.date | moment : 'YYYY-MM-DD'}}\n        </time>\n        <a (click)=\"messageTo(message.user)\" class=\"username\">{{message.user.username}}</a>\n        <div [innerHTML]=\"message.body\"></div>\n\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return endponitConfig; });
var endponitConfig = {
    // Custom URL End Points
    USER_API_ENDPOINT: '/api/users/',
    TEMPLATES_API_ENDPOINT: '/api/templates/',
    NOTIFICATIONS_API_ENDPOINT: '/api/notifications/',
    SOLAR_ACTUTATOR_ENDPOINT: '/',
    CALENDAR_ACTUTATOR_ENDPOINT: '/solar-calendar/',
    CALENDAR_ENDPOINT: '/solar-calendar/api/calendar/',
    WEBSOCKET_ENDPOINT: '/solar-ws',
    WIDGET_ENDPOINT: '/api/widgets/',
    REPORT_ENDPOINT: '/solar-reports/api/reports/',
    PALS_DRIVERS_ENDPOINT: '/pals-dashboard/',
    MAPBOX_ACCESSTOKEN: 'pk.eyJ1IjoicHJhbmF2YSIsImEiOiJjajhiOGtyMHIwcHFhMnJwZnk3ZWNmOGFxIn0.GpjYwz7pcnXTMkarQMNGXg',
    SOLAR_MAPS: '/solar-maps/api/maps/',
    TRUCK_API_ENDPOINT: '/solar-dashboard/api/trucks/',
    LOAD_API_ENDPOINT: '/solar-dashboard/api/loadAppointments/',
    LOAD_APPOINTMENT_API_ENDPOINT: '/solar-dashboard/api/loadAppointmentType/',
    DRIVER_API_ENDPOINT: '/solar-dashboard/api/drivers/',
    VENDORS_API_ENDPOINT: '/solar-dashboard/api/vendors/',
    LOCATIONS_API_ENDPOINT: '/solar-dashboard/api/locations/',
    SOLAR_API_ENDPOINT: '/solar-dashboard/api/',
    ANALYTICS_API_ENDPOINT: '/solar-dashboard/api/analytics/',
    // old token: pk.eyJ1Ijoia2NlYTk5IiwiYSI6ImNpeGcwZGV3cTAwMGIyb253Z3g5bmJpMnIifQ.B0pZrnhEOmaPwHmmQH1nyw
    //refresh map time
    AUTO_REFRESH_SERVICE_TIME: 30
};
//# sourceMappingURL=endpoints.js.map

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-footer\">\n  <div class=\"textarea-div\">\n    <div class=\"typearea\">\n      <textarea placeholder=\"Write a reply...\" id=\"textarea-expand\" (keyup.enter)=\"sendMessageEnter()\"\n                class=\"custom-scroll\" [(ngModel)]=\"message\"></textarea>\n    </div>\n  </div>\n\n  <span class=\"textarea-controls\">\n      <button class=\"btn btn-sm btn-primary pull-right\"\n              (click)=\"sendMessage()\">Reply</button>\n    <span class=\"pull-right smart-form\" style=\"margin-top: 3px; margin-right: 10px;\"> <label\n    class=\"checkbox pull-right\">\n      <input type=\"checkbox\" [(ngModel)]=\"enterToSend\" name=\"subscription\" id=\"subscription\"><i></i>Press <strong> ENTER </strong> to send </label> </span> <a\n    (click)=\"(null)\" class=\"pull-left\"><i class=\"fa fa-camera fa-fw fa-lg\"></i></a> </span>\n</div>\n"

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = "<div id=\"chat-container\" [class.open]=\"isOpen\">\n  <span class=\"chat-list-open-close\" (click)=\"openToggle()\"><i class=\"fa fa-user\"></i><b>!</b></span>\n\n  <div class=\"chat-list-body custom-scroll\">\n    <ul id=\"chat-users\">\n      <li *ngFor=\"let user of users | fieldFilter : 'username' : filter \" >\n        <a (click)=\"messageTo(user)\"><img [src]=\"user.picture\">{{user.username}} <span\n          class=\"badge badge-inverse\">{{user.username.length}}</span><span class=\"state\"><i\n          class=\"fa fa-circle txt-color-green pull-right\"></i></span></a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"chat-list-footer\">\n    <div class=\"control-group\">\n      <form class=\"smart-form\">\n        <section>\n          <label class=\"input\" >\n            <input type=\"text\" [(ngModel)]=\"filter\" id=\"filter-chat-list\" name=\"chatUsersFilter\" placeholder=\"Filter\">\n          </label>\n        </section>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = "<chat-users [users]=\"users\"></chat-users>\n<chat-body [messages]=\"messages\"></chat-body>\n<chat-form></chat-form>\n"

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = "<ul class=\"header-dropdown-list hidden-xs ng-cloak\">\n  <li class=\"dropdown\" dropdown>\n    <a class=\"dropdown-toggle\" dropdownToggle> <img src=\"assets/img/blank.gif\"\n                                                                 class=\"flag flag-{{currentLanguage.key}}\"\n                                                                 alt=\"{{currentLanguage.alt}}\"> <span> {{currentLanguage.title}} </span>\n      <i class=\"fa fa-angle-down\"></i> </a>\n    <ul *dropdownMenu class=\"dropdown-menu\">\n      <li [class.active]=\"language==currentLanguage\"\n          *ngFor=\"let language of languages\">\n        <a (click)=\"setLanguage(language)\" class=\"dropdown-item\" ><img src=\"assets/img/blank.gif\" class=\"flag flag-{{language.key}}\"\n                                                    alt=\"{{language.alt}}\"> {{language.title}}</a>\n      </li>\n    </ul>\n  </li>\n</ul>\n\n"

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "<div id=\"extr-page\">\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = "<sa-header></sa-header>\n\n\n<sa-navigation></sa-navigation>\n\n\n<div id=\"main\" role=\"main\">\n   <sa-layout-switcher></sa-layout-switcher> \n\n  <sa-ribbon></sa-ribbon>\n\n  <router-outlet></router-outlet>\n</div>\n\n<!--<sa-footer></sa-footer>-->\n\n<sa-shortcut></sa-shortcut>\n"

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-footer\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6\">\n            <span class=\"txt-color-white\">SmartAdmin WebApp © 2016</span>\n        </div>\n\n        <div class=\"col-xs-6 col-sm-6 text-right hidden-xs\">\n            <div class=\"txt-color-white inline-block\">\n                <i class=\"txt-color-blueLight hidden-mobile\">Last account activity <i class=\"fa fa-clock-o\"></i>\n                    <strong>52 mins ago &nbsp;</strong> </i>\n\n                <div class=\"btn-group\" dropdown dropup=\"true\">\n                    <button class=\"btn btn-xs dropdown-toggle bg-color-blue txt-color-white\" dropdownToggle>\n                        <i class=\"fa fa-link\"></i> <span class=\"caret\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu\" *dropdownMenu style=\"right: 0px; left: auto\">\n                        <li>\n                            <div class=\"padding-5\">\n                                <p class=\"txt-color-darken font-sm no-margin\">Download Progress</p>\n\n                                <div class=\"progress progress-micro no-margin\">\n                                    <div class=\"progress-bar progress-bar-success\" style=\"width: 50%;\"></div>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <div class=\"padding-5\">\n                                <p class=\"txt-color-darken font-sm no-margin\">Server Load</p>\n\n                                <div class=\"progress progress-micro no-margin\">\n                                    <div class=\"progress-bar progress-bar-success\" style=\"width: 20%;\"></div>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <div class=\"padding-5\">\n                                <p class=\"txt-color-darken font-sm no-margin\">Memory Load <span class=\"text-danger\">*critical*</span>\n                                </p>\n\n                                <div class=\"progress progress-micro no-margin\">\n                                    <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%;\"></div>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <div class=\"padding-5\">\n                                <button class=\"btn btn-block btn-default\">refresh</button>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = "<div [class.unread]=\"item.readStatus\" class=\"message-custom-text padding-10\">\n  <span class=\"message-text\" [innerHTML]=\"item.notificationContext\"></span>\n  <div class=\" font-xs\">\n    <div> {{item.lastUpdateTime|moment:\"MMMM Do YYYY, h:mm:ss a\" }}\n    </div>\n  </div>\n </div> \n\n\n"

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = "<span class=\"padding-10\">\n  <em class=\"badge padding-5 no-border-radius bg-color-blueLight pull-left margin-right-5\">\n    <i [ngClass]=\"setClasses()\"></i>\n  </em>\n  <span>{{item.message}}<br/>\n    <span class=\"pull-right font-xs text-muted\"><i>{{item.time}}</i></span>\n  </span>\n</span>\n"

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = "<span>\n  <div class=\"bar-holder no-padding\">\n    <p class=\"margin-bottom-5\">\n      <i *ngIf=\"item.status == 'PRIMARY'\" class=\"fa fa-warning text-warning\"></i>\n        <strong>{{item.status}}:</strong> <i>{{item.title}}</i>\n        <span class=\"pull-right semi-bold\"\n              [ngClass]=\"{\n                'pull-right': true,\n                'semi-bold':true,\n                'text-danger': item.status == 'CRITICAL',\n                'text-muted': item.status != 'CRITICAL'\n              }\">\n          <span *ngIf=\"item.width == 100\">\n            <i class=\"fa fa-check text-success\"></i> Complete\n          </span>\n          <span *ngIf=\"item.width != 100\">{{item.width + '%'}}</span>\n        </span>\n    </p>\n    <div class=\"progress\" [class]=\"item.size\">\n      <div [ngClass]=\"setProgressClasses()\" [style.width]=\"item.width + '%'\"></div>\n    </div>\n    <em class=\"note no-margin\">last updated on {{lastUpdate | moment: \"MMMM Do, h:mm a\"}}</em>\n  </div>\n</span>\n"

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports = "<span id=\"activity\" class=\"activity-dropdown\" (click)=\"onToggle()\">\n  <i class=\"fa fa-user\"></i>\n  <b class=\"badge bg-color-red\">{{count}}</b>\n</span>\n\n<div class=\"ajax-dropdown\" #dropdown>\n  <div *ngIf=\"!noNotifications\" class=\"btn-group btn-group-justified\" data-toggle=\"buttons\">\n    <label [ngClass]=\"{'btn btn-default': true, active: activity.data==currentActivityHeader }\" *ngFor=\"let activity of activitiesHeaders\"\n      (click)=\"setActivity(activity.data)\">\n      <input type=\"radio\" name=\"activity\" /> {{activity.data}}\n      <span *ngIf=\"activity.data !='calendar'\">({{activity.count}})</span>\n    </label>\n  </div>\n  <!-- notification content -->\n  <div class=\"ajax-notifications custom-scroll\">\n    <ul *ngIf=\"noNotifications\" class=\"notification-body\">\n      <li class=\"padding-5\">There are no notification events for user</li>\n    </ul>\n    <ul class=\"notification-body\">\n      <ng-template ngFor let-item *ngIf=\"currentActivityHeader=='notifications'\" [ngForOf]=\"currentActivity\">\n        <li activitiesMessage [item]=\"item\" (click)=\"changeReadStatus(item)\"></li>\n      </ng-template>\n      <ng-template ngFor let-events *ngIf=\"currentActivityHeader==='calendar'\" [ngForOf]=\"eventListData\">\n        <li (click)=\"onEventNavigation(events.start)\" calendarActivitiesMessages [events]=\"events\"></li>\n      </ng-template>\n    </ul>\n  </div>\n  <!-- end notification content -->\n  <span>\n    <a *ngIf=\"!noNotifications\" (click)=\"notificationsList()\">\n      <i class=\"fa fa-list\"></i> All Notifications </a>\n\n    <!--<a   (click)=\"calendarEventsList()\"><i class=\"fa fa-calendar\"></i>  All Calendar Events</a>-->\n    <button type=\"button\" (click)=\"update()\" class=\"btn btn-xs btn-default pull-right\">\n      <i class=\"fa fa-cog\" *ngIf=\"!loading\"></i>\n      <i class=\"fa fa-cog fa-spin\" *ngIf=\"loading\"></i>\n      <span *ngIf=\"loading\">loading...</span>\n    </button>\n  </span>\n  <!-- end footer -->\n\n</div>\n"

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

module.exports = "<!--<span >\n \n    <strong><span class=\"title\">{{events.title}}</span></strong>\n      <strong><span class=\"title\">{{events.description}}</span></strong>\n    <span class=\"from\" style=\"font-size:13px;margin:0px\"><strong>When : {{events.start | momentdategrouped:'MMMM Do, h:mm a' }}</strong></span>\n \n  \n</span>-->\n\n<span class=\"message-custom-text\">\n  <span class=\"title\">{{events.title}}</span><br>\n  <span class=\"message-text\">{{events.description}}</span>\n  <div class=\" font-xs\">\n\n    <div class=\"text-muted\"> <em>{{events.start | momentdategrouped:'MMMM Do YYYY, h:mm:ss a' }}</em>\n    </div>\n  </div>\n  <div class=\"timeline-seperator text-center\"></div>\n  <br>\n</span>\n\n\n"

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

module.exports = "<div id=\"hide-menu\" class=\"btn-header pull-right\">\n        <span> <a (click)=\"onToggle()\" title=\"Collapse Menu\"><i\n                class=\"fa fa-reorder\"></i></a> </span>\n</div>"

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

module.exports = "<div id=\"fullscreen\" class=\"btn-header transparent pull-right\">\n        <span> <a (click)=\"onToggle()\" title=\"Full Screen\"><i\n                class=\"fa fa-arrows-alt\"></i></a> </span>\n</div>"

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <div id=\"logo-group\">\n\n    <!-- PLACE YOUR LOGO HERE -->\n  \n    <span class=\"headerLogo\" >\n    <a (click)=\"homeView()\"><img alt=\"Solar\" class=\"logoImage\" src=\"assets/img/solar.png\"></a><span class=\"logoName\">Solar</span>\n    </span>\n    <!-- END LOGO PLACEHOLDER -->\n\n    <!-- Note: The activity badge color changes when clicked and resets the number to 0\n    Suggestion: You may want to set a flag when this happens to tick off all checked messages / notifications -->\n    <sa-activities></sa-activities>\n  </div>\n\n\n  <!--<sa-recent-projects></sa-recent-projects>-->\n\n\n\n\n\n  <!-- pulled right: nav area -->\n  <div class=\"pull-right\">\n\n    <sa-collapse-menu></sa-collapse-menu>\n\n    <!-- #MOBILE -->\n    <!-- Top menu profile link : this shows only when top menu is active -->\n    <ul id=\"mobile-profile-img\" class=\"header-dropdown-list hidden-xs padding-5\">\n      <li class=\"\">\n        <!--<a href=\"#\" class=\"dropdown-toggle no-margin userdropdown\" data-toggle=\"dropdown\">\n          <img src=\"assets/img/avatars/sunny.png\" alt=\"John Doe\" class=\"online\" />\n        </a>-->\n        <ul class=\"dropdown-menu pull-right\">\n          <li>\n            <a (click)=\"(null)\" class=\"padding-10 padding-top-0 padding-bottom-0\"><i\n              class=\"fa fa-cog\"></i> Setting</a>\n          </li>\n          <li class=\"divider\"></li>\n          <li>\n            <a routerLink=\"/app-views/profile\" class=\"padding-10 padding-top-0 padding-bottom-0\"> <i class=\"fa fa-user\"></i>\n              <u>P</u>rofile</a>\n          </li>\n          <li class=\"divider\"></li>\n          <li>\n            <a (click)=\"(null)\" class=\"padding-10 padding-top-0 padding-bottom-0\" data-action=\"toggleShortcut\"><i class=\"fa fa-arrow-down\"></i> <u>S</u>hortcut</a>\n          </li>\n          <li class=\"divider\"></li>\n          <li>\n            <a (click)=\"(null)\" class=\"padding-10 padding-top-0 padding-bottom-0\" data-action=\"launchFullscreen\"><i class=\"fa fa-arrows-alt\"></i> Full <u>S</u>creen</a>\n          </li>\n          <li class=\"divider\"></li>\n          <li>\n            <a routerLink=\"/login\" class=\"padding-10 padding-top-5 padding-bottom-5\" data-action=\"userLogout\"><i\n              class=\"fa fa-sign-out fa-lg\"></i> <strong><u>L</u>ogout</strong></a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n\n    <!-- logout button -->\n    <sa-logout></sa-logout>\n    <!-- end logout button -->\n\n    <!-- search mobile button (this is hidden till mobile view port) -->\n    <!--<div id=\"search-mobile\" class=\"btn-header transparent pull-right\">\n      <span> <a (click)=\"toggleSearchMobile()\" title=\"Search\"><i class=\"fa fa-search\"></i></a> </span>\n    </div>-->\n\n    <!--<div class=\"btn-header transparent pull-right \">\n      <span> <a (click)=\"health()\" title=\"Search\"><i class=\"fa fa-phone\"></i></a> </span>\n    </div>-->\n\n\n\n    <!--<div class=\" btn-header transparent pull-right btn-group dropdown\">\n      <a (click)=\"health()\" class=\"btn btn-xs dropdown-toggle bg-color-blue txt-color-white\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-link\"></i> <span class=\"caret\"></span>\n\t\t\t\t\t\t\t</a>\n      <ul *ngIf=\"state\" class=\"dropdown-menu pull-right text-left\">\n        <li>\n          <div class=\"padding-5\">\n            <p class=\"txt-color-darken font-sm no-margin\">Status : {{state.status}}</p>\n            <div class=\"progress progress-micro no-margin\">\n              <div class=\"progress-bar progress-bar-success\" style=\"width: 100%;\"></div>\n            </div>\n          </div>\n        </li>\n        <li class=\"divider\"></li>\n        <li>\n          <div class=\"padding-5\">\n            <p class=\"txt-color-darken font-sm no-margin\">DiskSpace Total : {{state.total/1073741824 | number:'3.5-5'}} GB</p>\n            <div class=\"progress progress-micro no-margin\">\n              <div class=\"progress-bar progress-bar-success\" style=\"width: 100%;\"></div>\n            </div>\n          </div>\n        </li>\n\n         <li class=\"divider\"></li>\n        <li>\n          <div class=\"padding-5\">\n            <p class=\"txt-color-darken font-sm no-margin\">DiskSpace Free : {{state.free/1073741824 | number:'3.5-5'}} GB</p>\n            <div class=\"progress progress-micro no-margin\">\n              <div class=\"progress-bar progress-bar-success\" style=\"width: 90%;\"></div>\n            </div>\n          </div>\n        </li>\n        <li class=\"divider\"></li>\n        <li>\n          <div class=\"padding-5\">\n            <p class=\"txt-color-darken font-sm no-margin\">DiskSpace Threshold :{{state.threshold/1073741824 | number:'3.5-5'}} GB </p>\n            <div class=\"progress progress-micro no-margin\">\n              <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%;\"></div>\n            </div>\n          </div>\n        </li>\n \n \n      </ul>\n    </div>-->\n\n\n    <!-- end search mobile button -->\n\n    <!-- input: search field -->\n    <!--<form #searchForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"header-search pull-right\">\n      <input id=\"search-fld\" type=\"text\" name=\"param\" required placeholder=\"Find reports and more\">\n      <button type=\"submit\">\n        <i class=\"fa fa-search\"></i>\n      </button>\n      <a id=\"cancel-search-js\" (click)=\"toggleSearchMobile()\" title=\"Cancel Search\"><i class=\"fa fa-times\"></i></a>\n    </form>-->\n    <!-- end input: search field -->\n\n    <!-- fullscreen button -->\n    <sa-full-screen></sa-full-screen>\n    <!-- end fullscreen button -->\n\n    <!-- #Voice Command: Start Speech -->\n    <!--<sa-speech-button></sa-speech-button>-->\n    <!-- end voice command -->\n\n\n    <!-- multiple lang dropdown : find all flags in the flags page -->\n    <!--<sa-language-selector></sa-language-selector>-->\n    <!-- end multiple lang -->\n\n\n\n\n\n  </div>\n  <!-- end pulled right: nav area -->\n\n</header>\n"

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = "<div class=\"project-context hidden-xs dropdown\" dropdown>\n\n  <span class=\"label\">{{ 'Projects' | i18n }}:</span>\n    <span class=\"project-selector dropdown-toggle\" dropdownToggle>{{'Recent projects'| i18n}} <i ng-if=\"projects.length\"\n                                                                                                            class=\"fa fa-angle-down\"></i></span>\n\n  <ul *dropdownMenu class=\"dropdown-menu\">\n    <li *ngFor=\"let project of projects\">\n      <a href=\"{{project.href}}\">{{project.title}}</a>\n    </li>\n    <li class=\"divider\"></li>\n    <li>\n      <a (click)=\"clearProjects()\"><i class=\"fa fa-power-off\"></i> Clear</a>\n    </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = "\n<div id=\"speech-btn\" class=\"btn-header transparent pull-right hidden-sm hidden-xs\" *ngIf=\"enabled\">\n  <div [popover]=\"speechPopover\">\n    <a title=\"Voice Command\" id=\"voice-command-btn\" (click)=\"toggleVoiceControl()\"><i\n        class=\"fa fa-microphone\"></i></a>\n  </div>\n  <popover-content #speechPopover [closeOnClickOutside]=\"true\"\n                   placement=\"bottom\">\n    <ng-template [ngIf]=\"!hasError\">\n      <h4 class=\"vc-title\">Voice command activated <br/>\n        <small>Please speak clearly into the mic</small>\n      </h4>\n      <a (click)=\"seeCommands()\" class=\"btn btn-success\">See Commands</a>\n      <a class=\"btn bg-color-purple txt-color-white\"\n         (click)=\"speechPopover.hide()\">Close Popup</a>\n    </ng-template>\n    <ng-template [ngIf]=\"hasError\">\n      <h4 class=\"vc-title-error text-center\">\n        <i class=\"fa fa-microphone-slash\"></i> Voice command failed\n        <br/>\n        <small class=\"txt-color-red\">Must <strong>\"Allow\"</strong> Microphone</small>\n        <br/>\n        <small class=\"txt-color-red\">Must have <strong>Internet Connection</strong>\n        </small>\n      </h4>\n    </ng-template>\n  </popover-content>\n</div>\n\n\n\n"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = "<div class=\"demo\" [class.activate]=\"isActivated\"><span id=\"demo-setting\" (click)=\"onToggle()\"><i\n  class=\"fa fa-cog txt-color-blueDark\"></i></span>\n\n  <form>\n    <legend class=\"no-padding margin-bottom-10\">Layout Skins</legend>\n    <!--<section>\n      <label><input type=\"checkbox\" (click)=\"onFixedHeader()\" [(ngModel)]=\"store.fixedHeader\" name=\"fixedHeader\"\n                    class=\"checkbox style-0\"><span>Fixed Header</span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onFixedNavigation()\" [(ngModel)]=\"store.fixedNavigation\" name=\"fixedNavigation\"\n                    class=\"checkbox style-0\"><span>Fixed Navigation</span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onFixedRibbon()\" [(ngModel)]=\"store.fixedRibbon\" name=\"fixedRibbon\"\n                    class=\"checkbox style-0\"><span>Fixed Ribbon</span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onFixedPageFooter()\" [(ngModel)]=\"store.fixedPageFooter\" name=\"fixedPageFooter\"\n                    class=\"checkbox style-0\"><span>Fixed Footer</span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onInsideContainer()\" [(ngModel)]=\"store.insideContainer\" name=\"insideContainer\"\n                    class=\"checkbox style-0\"><span>Inside <b>.container</b></span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onRtl()\" [(ngModel)]=\"store.rtl\" name=\"rtl\"\n                    class=\"checkbox style-0\"><span>RTL</span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onMenuOnTop()\" [(ngModel)]=\"store.menuOnTop\" name=\"menuOnTop\"\n                    class=\"checkbox style-0\"><span>Menu on <b>top</b></span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onColorblindFriendly()\" [(ngModel)]=\"store.colorblindFriendly\" name=\"colorblindFriendly\"\n                    class=\"checkbox style-0\"><span>For Colorblind <div\n        class=\"font-xs text-right\">(experimental)\n            </div></span>\n      </label><span id=\"smart-bgimages\"></span></section>\n    <section><h6 class=\"margin-top-10 semi-bold margin-bottom-5\">Clear Localstorage</h6><a\n      (click)=\"factoryReset()\" class=\"btn btn-xs btn-block btn-primary\" id=\"reset-smart-widget\"><i\n      class=\"fa fa-refresh\"></i> Factory Reset</a></section>-->\n\n    <!--<h6 class=\"margin-top-10 semi-bold margin-bottom-5\">SmartAdmin Skins</h6>-->\n\n\n    <section id=\"smart-styles\">\n          <a *ngFor=\"let skin of store.skins\"\n             (click)=\"onSmartSkin(skin)\"\n             [class]=\"skin.skinBtnClass\"\n             [ngStyle]=\"skin.style\">\n             <i *ngIf=\"skin.name == store.smartSkin\" class=\"fa fa-check fa-fw\"></i> {{skin.label}} <sup *ngIf=\"skin.beta\">beta</sup></a>\n        </section>\n  </form>\n</div>\n"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "<aside id=\"left-panel\">\n\n  <!-- User info -->\n  <sa-login-info></sa-login-info>\n  <!-- end user info -->\n\n  <nav>\n    <!-- NOTE: Notice the gaps after each icon usage <i></i>..\n    Please note that these links work a bit different than\n    traditional href=\"\" links. See documentation for details.\n    -->\n\n    <ul saSmartMenu>\n      <!--<li>\n        <a title=\"Dashboard\"><i class=\"fa fa-lg fa-fw fa-home\"></i> <span\n          class=\"menu-item-parent\">{{'Dashboard' | i18n}}</span></a>\n        <ul>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/dashboard/analytics\">{{'Analytics Dashboard' | i18n}}</a>\n          </li>\n        </ul>\n      </li>-->\n\n\n      <!--<div *ngIf=\"userRole!='DCMANAGER'\">-->\n\n        <li *ngIf=\"userRole!='DCMANAGER'\">\n          <a routerLink=\"/dashboard/driverLocation\" title=\"Dashboard\"><i class=\"fa fa-lg fa-fw fa-home\"></i> <span\n          class=\"menu-item-parent\">{{'Dashboard' | i18n}}</span></a>\n          <ul>\n            <li routerLinkActive=\"active\">\n              <a routerLink=\"/dashboard/driverLocation\">{{'Driver Location' | i18n}}</a>\n            </li>\n\n            <li routerLinkActive=\"active\">\n              <a routerLink=\"/dashboard/liveTracking\">{{'LiveTracking' | i18n}}</a>\n            </li>\n\n            <li routerLinkActive=\"active\">\n              <a routerLink=\"/dashboard/analytics\">{{'Analytics' | i18n}}</a>\n            </li>\n\n            <li routerLinkActive=\"active\">\n              <a routerLink=\"/dashboard/dcLoadAnalysis1\">{{'Performance Analysis' | i18n}}</a>\n            </li>\n\n            <li routerLinkActive=\"active\">\n              <a routerLink=\"/dashboard/dcLoadAnalysis2\">{{'Vendor vs Load Analysis' | i18n}}</a>\n            </li>\n          </ul>\n        </li>\n\n\n        <li routerLinkActive=\"active\" *ngIf=\"userRole=='ADMIN' && userRole!='DCMANAGER'\">\n          <a routerLink=\"/admin/users\" title=\"Admin\"><i class=\"fa fa-lg fa-fw fa-user\"></i> <span\n          class=\"menu-item-parent\">{{'Admin'| i18n }}</span></a>\n          <ul>\n            <!--<li routerLinkActive=\"active\">\n              <a (click)=\"onToggle()\" routerLink=\"/admin/loggers\">{{'Loggers' | i18n}}</a>\n            </li>-->\n\n            <li routerLinkActive=\"active\">\n              <a (click)=\"onToggle()\" routerLink=\"/admin/users\">{{'Users' | i18n}}</a>\n            </li>\n\n            <li routerLinkActive=\"active\">\n              <a (click)=\"onToggle()\" routerLink=\"/admin/notificationstree\">{{'Notification Channels' | i18n}}</a>\n            </li>\n\n            <li routerLinkActive=\"active\">\n              <a (click)=\"onToggle()\" routerLink=\"/admin/template\">{{'Template'| i18n }}</a>\n            </li>\n\n            \n\n          <!--<li routerLinkActive=\"active\">\n            <a (click)=\"onToggle()\" routerLink=\"/admin/widget\">{{'Widgets' | i18n}}</a>\n          </li>\n\n          <li routerLinkActive=\"active\">\n            <a (click)=\"onToggle()\" routerLink=\"/admin/report\">{{'Reports' | i18n}}</a>\n          </li>-->\n\n         \n\n        </ul>\n      </li>\n\n\n      <!--<li routerLinkActive=\"active\">\n        <a routerLink=\"/users/datatables\" title=\"User\"><i class=\"fa fa-lg fa-fw fa-list-alt\"></i><span\n          class=\"menu-item-parent\">{{'Users' | i18n}}</span></a>\n      </li>-->\n\n\n      <li routerLinkActive=\"active\" *ngIf=\"userRole!='DCMANAGER'\">\n        <a  routerLink=\"/calendar\">\n          <i class=\"fa fa-lg fa-fw fa-calendar\"></i>\n          <span class=\"menu-item-parent\">{{'Calendar' | i18n}}</span></a>\n      </li>\n\n      <li routerLinkActive=\"active\" *ngIf=\"userRole!='DCMANAGER'\">\n        <a  routerLink=\"/drivers\">\n          <i class=\"fa fa-lg fa-fw fa-user\"></i>\n          <span class=\"menu-item-parent\">{{'Drivers' | i18n}}</span></a>\n      </li>\n\n        <li routerLinkActive=\"active\" *ngIf=\"userRole!='DCMANAGER'\">\n          <a  routerLink=\"/locations\">\n            <i class=\"fa fa-lg fa-fw fa-map-marker\"></i>\n            <span class=\"menu-item-parent\">{{'Locations' | i18n}}</span></a>\n        </li>\n\n\n<!--      <li>\n        <a routerLink=\"/documents\">\n          <i class=\"fa fa-lg fa-fw fa-file-pdf-o\"></i>\n          <span class=\"menu-item-parent\">{{'Documents' | i18n}}</span></a>\n      </li>-->\n\n\n      <!--<li>\n        <a routerLink=\"/trucks\">\n          <i class=\"fa fa-lg fa-fw fa-automobile\"></i>\n          <span class=\"menu-item-parent\">{{'Trucks' | i18n}}</span></a>\n      </li>-->\n\n      <li routerLinkActive=\"active\" *ngIf=\"userRole!='DCMANAGER'\">\n        <a  routerLink=\"/loads\">\n          <i class=\"fa fa-lg fa-fw fa-truck\"></i>\n          <span class=\"menu-item-parent\">{{'Loads' | i18n}}</span></a>\n      </li>\n\n      <li routerLinkActive=\"active\" *ngIf=\"userRole!='DCMANAGER'\">\n        <a  routerLink=\"/vendors\">\n          <i class=\"fa fa-lg fa-fw fa-group\"></i>\n          <span class=\"menu-item-parent\">{{'Vendors' | i18n}}</span></a>\n      </li>\n\n\n<!--       <li>\n        <a routerLink=\"/expenses\">\n          <i class=\"fa fa-lg fa-fw fa-money\"></i>\n          <span class=\"menu-item-parent\">{{'Expenses' | i18n}}</span></a>\n      </li>\n\n       <li>\n        <a routerLink=\"/food\">\n          <i class=\"fa fa-lg fa-fw fa-spoon\"></i>\n          <span class=\"menu-item-parent\">{{'Food Courts' | i18n}}</span></a>\n      </li>\n\n       <li>\n        <a routerLink=\"/fuel\">\n          <i class=\"fa fa-lg fa-fw fa-beer\"></i>\n          <span class=\"menu-item-parent\">{{'Fuel Stations' | i18n}}</span></a>\n      </li>\n\n       <li>\n        <a routerLink=\"/contactdriver\">\n          <i class=\"fa fa-lg fa-fw  fa-comment\"></i>\n          <span class=\"menu-item-parent\">{{'Contact Driver' | i18n}}</span></a>\n      </li>-->\n\n       <!--</div>-->\n    \n\n\t        <li routerLinkActive=\"active\" *ngIf=\"userRole=='DCMANAGER'\">\n          <a  routerLink=\"/dcmanagerloads\">\n            <i class=\"fa fa-lg fa-fw fa-truck\"></i>\n            <span class=\"menu-item-parent\">{{'Loads' | i18n}}</span></a>\n        </li>\n\t\n\n\n    </ul>\n    <!--<aside-chat></aside-chat>-->\n  </nav>\n\n  <sa-minify-menu></sa-minify-menu>\n\n</aside>\n"

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_smartadmin_config__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var JsonApiService = (function () {
    function JsonApiService(http) {
        this.http = http;
    }
    JsonApiService.prototype.fetch = function (url) {
        return this.http.get(this.getBaseUrl() + __WEBPACK_IMPORTED_MODULE_2__shared_smartadmin_config__["a" /* config */].API_URL + url)
            .delay(100)
            .map(this.extractData)
            .catch(this.handleError);
    };
    JsonApiService.prototype.getBaseUrl = function () {
        return location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/';
    };
    JsonApiService.prototype.extractData = function (res) {
        var body = res.json();
        if (body) {
            return body.data || body;
        }
        else {
            return {};
        }
    };
    JsonApiService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(errMsg);
    };
    return JsonApiService;
}());
JsonApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], JsonApiService);

var _a;
//# sourceMappingURL=json-api.service.js.map

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "<!-- RIBBON -->\n<div id=\"ribbon\">\n  <ng-template #tipContent><i class=\"text-warning fa fa-warning\"></i> Warning! This will reset all your widget settings.</ng-template>\n\n  <span class=\"ribbon-button-alignment\">\n\t\t\t\t\t<!--<span id=\"refresh\" class=\"btn btn-ribbon\" (click)=\"resetWidgets()\"\n                placement=\"bottom\"\n                [tooltip]=\"tipContent\">\n\t\t\t\t\t\t<i class=\"fa fa-refresh\"></i>\n\t\t\t\t\t</span>-->\n          \t<!--<span id=\"refresh\" class=\"btn btn-ribbon\" \n                placement=\"bottom\"\n                [tooltip]=\"tipContent\">\n\t\t\t\t\t\t<i class=\"fa fa-refresh\"></i>\n\t\t\t\t\t</span>-->\n\t\t\t\t</span>\n  <sa-route-breadcrumbs></sa-route-breadcrumbs>\n</div>\n"

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = "<div id=\"shortcut\" [@shortcutState]=\"state\">\n  <ul>\n    <li>\n      <a  class=\"jarvismetro-tile big-cubes bg-color-blue\"> <span class=\"iconbox\"> <i\n        class=\"fa fa-envelope fa-4x\"></i> <span>Mail <span\n        class=\"label pull-right bg-color-darken\">14</span></span> </span> </a>\n    </li>\n    <li>\n      <a class=\"jarvismetro-tile big-cubes bg-color-orangeDark\"> <span class=\"iconbox\"> <i\n        class=\"fa fa-calendar fa-4x\"></i> <span>Calendar</span> </span> </a>\n    </li>\n    <li>\n      <a  class=\"jarvismetro-tile big-cubes bg-color-purple\"> <span class=\"iconbox\"> <i\n        class=\"fa fa-map-marker fa-4x\"></i> <span>Maps</span> </span> </a>\n    </li>\n    <li>\n      <a class=\"jarvismetro-tile big-cubes bg-color-blueDark\"> <span class=\"iconbox\"> <i\n        class=\"fa fa-book fa-4x\"></i> <span>Invoice <span\n        class=\"label pull-right bg-color-darken\">99</span></span> </span> </a>\n    </li>\n    <li>\n      <a class=\"jarvismetro-tile big-cubes bg-color-greenLight\"> <span class=\"iconbox\"> <i\n        class=\"fa fa-picture-o fa-4x\"></i> <span>Gallery </span> </span> </a>\n    </li>\n    <li>\n      <a class=\"jarvismetro-tile big-cubes selected bg-color-pinkDark\"> <span class=\"iconbox\"> <i\n        class=\"fa fa-user fa-4x\"></i> <span>My Profile </span> </span> </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"login-info\">\n  <span *ngIf=\"user?.picture\"><a (click)=\"toggleShortcut()\">\n\t   <img [src]=\"user.picture\" alt=\"me\"\n          class=\"online\"/><span>{{user.username }}</span> <i class=\"fa fa-angle-down\"></i>\n    </a>\n   </span>\n</div>-->\n\n<div class=\"login-info\">\n  <span *ngIf=\"user?.picture\"><a >\n\t   <!--<img [src]=\"user.picture\" alt=\"me\"\n          class=\"online\"/>-->\n             <span  class=\"glyphicon glyphicon-user padding-5\"></span>\n  <span>{{user.username }}</span>\n  </a>\n  </span>\n</div>\n"

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = "<div bsModal #seeCommandsModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" [config]=\"{}\"\n     role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n\n        <h1><i class=\"fa fa-microphone text-muted\"></i>&nbsp;&nbsp; SmartAdmin Voice Command</h1>\n        <hr class=\"simple\">\n        <h5>Instruction</h5>\n\n        Click <span class=\"text-success\">\"Allow\"</span> to access your microphone and activate Voice Command.\n        You will notice a <span class=\"text-primary\"><strong>BLUE</strong> Flash</span> on the microphone icon\n        indicating activation.\n        The icon will appear <span class=\"text-danger\"><strong>RED</strong></span> <span class=\"label label-danger\"><i\n          class=\"fa fa-microphone fa-lg\"></i></span> if you <span class=\"text-danger\">\"Deny\"</span> access or don't have\n        any microphone installed.\n        <br>\n        <br>\n        As a security precaution, your browser will disconnect the microphone every 60 to 120 seconds (sooner if not\n        being used). In which case Voice Command will prompt you again to <span class=\"text-success\">\"Allow\"</span> or\n        <span class=\"text-danger\">\"Deny\"</span> access to your microphone.\n        <br>\n        <br>\n        If you host your page over <strong>http<span class=\"text-success\">s</span></strong> (secure socket layer)\n        protocol you can wave this security measure and have an unintrupted Voice Command.\n        <br>\n        <br>\n        <h5>Commands</h5>\n        <ul>\n          <li>\n            <strong>'show' </strong> then say the <strong>*page*</strong> you want to go to. For example <strong>\"show\n            inbox\"</strong> or <strong>\"show calendar\"</strong>\n          </li>\n          <li>\n            <strong>'mute' </strong> - mutes all sound effects for the theme.\n          </li>\n          <li>\n            <strong>'sound on'</strong> - unmutes all sound effects for the theme.\n          </li>\n          <li>\n            <span class=\"text-danger\"><strong>'stop'</strong></span> - deactivates voice command.\n          </li>\n          <li>\n            <span class=\"text-primary\"><strong>'help'</strong></span> - brings up the command list\n          </li>\n          <li>\n            <span class=\"text-danger\"><strong>'got it'</strong></span> - closes help modal\n          </li>\n          <li>\n            <strong>'hide navigation'</strong> - toggle navigation collapse\n          </li>\n          <li>\n            <strong>'show navigation'</strong> - toggle navigation to open (can be used again to close)\n          </li>\n          <li>\n            <strong>'scroll up'</strong> - scrolls to the top of the page\n          </li>\n          <li>\n            <strong>'scroll down'</strong> - scrollts to the bottom of the page\n          </li>\n          <li>\n            <strong>'go back' </strong> - goes back in history (history -1 click)\n          </li>\n          <li>\n            <strong>'logout'</strong> - logs you out\n          </li>\n        </ul>\n        <br>\n        <h5>Adding your own commands</h5>\n        Voice Command supports up to 80 languages. Adding your own commands is extreamly easy. All commands are stored\n        inside <strong>smartadmin.config.js</strong> file under the <code>config.voice_commands = {{'{...}'}}</code>.\n\n        <hr class=\"simple\">\n        <div class=\"text-right\">\n          <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"seeCommandsModal.hide()\">\n            Got it!\n          </button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moment_pipe__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__time_directive__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__field_filter_pipe__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__body_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toggle_active_directive__ = __webpack_require__(527);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UtilsModule = UtilsModule_1 = (function () {
    function UtilsModule() {
    }
    UtilsModule.forRoot = function () {
        return {
            ngModule: UtilsModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_4__body_service__["a" /* BodyService */], __WEBPACK_IMPORTED_MODULE_5__notification_service__["a" /* AlertNotificationService */]]
        };
    };
    return UtilsModule;
}());
UtilsModule = UtilsModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_6__toggle_active_directive__["a" /* ToggleActiveDirective */], __WEBPACK_IMPORTED_MODULE_1__moment_pipe__["a" /* MomentPipe */], __WEBPACK_IMPORTED_MODULE_1__moment_pipe__["b" /* MomentPipeFromNow */], __WEBPACK_IMPORTED_MODULE_1__moment_pipe__["c" /* MomentDateGroupedPipe */], __WEBPACK_IMPORTED_MODULE_2__time_directive__["a" /* TimeDirective */], __WEBPACK_IMPORTED_MODULE_3__field_filter_pipe__["a" /* FieldFilterPipe */]],
        exports: [__WEBPACK_IMPORTED_MODULE_6__toggle_active_directive__["a" /* ToggleActiveDirective */], __WEBPACK_IMPORTED_MODULE_1__moment_pipe__["a" /* MomentPipe */], __WEBPACK_IMPORTED_MODULE_1__moment_pipe__["b" /* MomentPipeFromNow */], __WEBPACK_IMPORTED_MODULE_1__moment_pipe__["c" /* MomentDateGroupedPipe */], __WEBPACK_IMPORTED_MODULE_2__time_directive__["a" /* TimeDirective */], __WEBPACK_IMPORTED_MODULE_3__field_filter_pipe__["a" /* FieldFilterPipe */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__body_service__["a" /* BodyService */], __WEBPACK_IMPORTED_MODULE_5__notification_service__["a" /* AlertNotificationService */]]
    })
], UtilsModule);

var UtilsModule_1;
//# sourceMappingURL=utils.module.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__(499);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userRole_guard__ = __webpack_require__(126);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_api_json_api_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http, jsonApiService) {
        this.http = http;
        this.jsonApiService = jsonApiService;
        this.userInfo = {
            username: 'Guest'
        };
        this.user = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
    }
    UserService.prototype.getLoginInfo = function () {
        var _this = this;
        return this.jsonApiService.fetch('/user/login-info.json')
            .do(function (user) {
            _this.userInfo = user;
            _this.user.next(user);
        });
    };
    UserService.prototype.userLogout = function () {
        var headers1 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers1.append("Content-Type", "application/json");
        return this.http.post('logout', { headers: headers1 }).map(function (response) {
            return response;
        });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_api_json_api_service__["a" /* JsonApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_api_json_api_service__["a" /* JsonApiService */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speech_recognition_api__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoiceRecognitionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VoiceRecognitionService = (function () {
    function VoiceRecognitionService() {
        this.events = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.commandsList = [];
        this.callbacks = {
            start: [],
            error: [],
            end: [],
            result: [],
            resultMatch: [],
            resultNoMatch: [],
            errorNetwork: [],
            errorPermissionBlocked: [],
            errorPermissionDenied: []
        };
        this.autoRestart = false;
        this.lastStartedAt = 0;
    }
    VoiceRecognitionService.prototype.commandToRegExp = function (command) {
        var optionalParam = /\s*\((.*?)\)\s*/g, optionalRegex = /(\(\?:[^)]+\))\?/g, namedParam = /(\(\?)?:\w+/g, splatParam = /\*\w+/g, escapeRegExp = /[\-{}\[\]+?.,\\\^$|#]/g;
        command = command.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function (match, optional) {
            return optional ? match : '([^\\s]+)';
        }).replace(splatParam, '(.*?)').replace(optionalRegex, '\\s*$1?\\s*');
        return new RegExp('^' + command + '$', 'i');
    };
    ;
    VoiceRecognitionService.prototype.isInitialized = function () {
        return !!this.recognition;
    };
    ;
    VoiceRecognitionService.prototype.initIfNeeded = function () {
        if (!this.isInitialized()) {
            this.init({}, false);
        }
    };
    ;
    // Initialize smartSpeechRecognition with a list of commands to recognize.
    // e.g. smartSpeechRecognition.init({'hello :name': helloFunction})
    // smartSpeechRecognition understands commands with named variables, splats, and optional words.
    VoiceRecognitionService.prototype.init = function (commands, resetCommands) {
        var _this = this;
        if (resetCommands === void 0) { resetCommands = true; }
        var recognition = this.recognition;
        // Abort previous instances of recognition already running
        if (recognition && recognition.abort) {
            recognition.abort();
        }
        // initiate SpeechRecognition
        recognition = new __WEBPACK_IMPORTED_MODULE_1__speech_recognition_api__["a" /* SpeechRecognition */]();
        // Set the max number of alternative transcripts to try and match with a command
        recognition.maxAlternatives = 5;
        recognition.continuous = true;
        // Sets the language to the default 'en-US'. This can be changed with smartSpeechRecognition.setLanguage()
        recognition.lang = __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].voice_command_lang || 'en-US';
        recognition.onstart = function () {
            // invokeCallbacks(callbacks.start);
            //debugState
            if (__WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState) {
                console.log('%c ✔ SUCCESS: User allowed access the microphone service to start ', __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugStyle_success);
                console.log('Language setting is set to: ' + recognition.lang, __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugStyle);
            }
            _this.events.next({
                type: 'start'
            });
        };
        recognition.onerror = function (event) {
            // this.invokeCallbacks(this.callbacks.error);
            switch (event.error) {
                case 'network':
                    // this.invokeCallbacks(this.callbacks.errorNetwork);
                    break;
                case 'not-allowed':
                case 'service-not-allowed':
                    // if permission to use the mic is denied, turn off auto-restart
                    _this.autoRestart = false;
                    //debugState
                    if (__WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState) {
                        console.log('%c WARNING: Microphone was not detected (either user denied access or it is not installed properly) ', __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugStyle_warning);
                    }
                    // determine if permission was denied by user or automatically.
                    if (new Date().getTime() - _this.lastStartedAt < 200) {
                        // invokeCallbacks(callbacks.errorPermissionBlocked);
                    }
                    else {
                        // invokeCallbacks(callbacks.errorPermissionDenied);
                        //console.log("You need your mic to be active")
                    }
                    _this.events.emit({
                        type: 'error',
                        payload: event
                    });
                    break;
            }
        };
        recognition.onend = function () {
            // invokeCallbacks(this.callbacks.end);
            // smartSpeechRecognition will auto restart if it is closed automatically and not by user action.
            _this.events.emit({
                type: 'end',
                payload: event
            });
            if (_this.autoRestart) {
                // play nicely with the browser, and never restart smartSpeechRecognition automatically more than once per second
                var timeSinceLastStart = new Date().getTime() - _this.lastStartedAt;
                if (timeSinceLastStart < 1000) {
                    setTimeout(function () {
                        _this.start({});
                    }, 1000 - timeSinceLastStart);
                }
                else {
                    _this.start({});
                }
            }
        };
        recognition.onresult = function (event) {
            // this.invokeCallbacks(this.callbacks.result);
            var results = event.results[event.resultIndex];
            var commandText;
            // go over each of the 5 results and alternative results received (we've set maxAlternatives to 5 above)
            for (var i = 0; i < results.length; i++) {
                // the text recognized
                commandText = results[i].transcript.trim();
                if (__WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState) {
                    console.log('Speech recognized: %c' + commandText, __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugStyle);
                }
                var _loop_1 = function (j, l) {
                    var result = _this.commandsList[j].command.exec(commandText);
                    if (result) {
                        var parameters = result.slice(1);
                        if (__WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState) {
                            console.log('command matched: %c' + _this.commandsList[j].originalPhrase, __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugStyle);
                            if (parameters.length) {
                                console.log('with parameters', parameters);
                            }
                        }
                        if (_this.commandsList[j].type == 'action') {
                            setTimeout(function () {
                                _this.events.emit(_this.commandsList[j]);
                            }, 50);
                        }
                        else {
                            // execute the matched command
                            _this.commandsList[j].callback.apply(_this, parameters);
                        }
                        // this.invokeCallbacks(this.callbacks.resultMatch);
                        // for commands "sound on", "stop" and "mute" do not play sound or display message
                        var ignoreCallsFor = ["sound on", "mute", "stop"];
                        if (ignoreCallsFor.indexOf(_this.commandsList[j].originalPhrase) < 0) {
                            _this.events.emit({
                                type: 'match',
                                payload: _this.commandsList[j].originalPhrase
                            });
                        } // end if
                        return { value: true };
                    }
                };
                // try and match recognized text to one of the commands on the list
                for (var j = 0, l = _this.commandsList.length; j < l; j++) {
                    var state_1 = _loop_1(j, l);
                    if (typeof state_1 === "object")
                        return state_1.value;
                } // end for
            } // end for
            // invokeCallbacks(callbacks.resultNoMatch);
            //console.log("no match found for: " + commandText)
            _this.events.emit({
                type: 'no match',
                payload: commandText
            });
            return false;
        };
        // build commands list
        if (resetCommands) {
            this.commandsList = [];
        }
        if (commands.length) {
            this.addCommands(commands);
        }
        this.recognition = recognition;
    };
    // Start listening (asking for permission first, if needed).
    // Call this after you've initialized smartSpeechRecognition with commands.
    // Receives an optional options object:
    // { autoRestart: true }
    VoiceRecognitionService.prototype.start = function (options) {
        if (options === void 0) { options = {}; }
        this.initIfNeeded();
        if (options.autoRestart !== undefined) {
            this.autoRestart = !!options.autoRestart;
        }
        else {
            this.autoRestart = true;
        }
        this.lastStartedAt = new Date().getTime();
        this.recognition.start();
    };
    // abort the listening session (aka stop)
    VoiceRecognitionService.prototype.abort = function () {
        this.autoRestart = false;
        if (this.recognition && this.recognition.abort) {
            this.recognition.abort();
        }
    };
    // Turn on output of debug messages to the console. Ugly, but super-handy!
    VoiceRecognitionService.prototype.debug = function (newState) {
        if (arguments.length > 0) {
            __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState = !!newState;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState = true;
        }
    };
    // Set the language the user will speak in. If not called, defaults to 'en-US'.
    // e.g. 'fr-FR' (French-France), 'es-CR' (Español-Costa Rica)
    VoiceRecognitionService.prototype.setLanguage = function (language) {
        this.initIfNeeded();
        this.recognition.lang = language;
    };
    // Add additional commands that smartSpeechRecognition will respond to. Similar in syntax to smartSpeechRecognition.init()
    VoiceRecognitionService.prototype.addCommands = function (commands) {
        var _this = this;
        var action, command;
        this.initIfNeeded();
        Object.keys(commands).forEach(function (phrase) {
            action = window[commands[phrase]] || commands[phrase];
            //convert command to regex
            command = _this.commandToRegExp(phrase);
            if (typeof action === 'function') {
                _this.commandsList.push({
                    type: 'function',
                    command: command,
                    callback: action,
                    originalPhrase: phrase
                });
            }
            if (typeof action === 'object') {
                _this.commandsList.push({
                    type: 'action',
                    command: command,
                    payload: action.payload,
                    actionType: action.type,
                    originalPhrase: phrase
                });
            }
        });
        if (__WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState) {
            console.log('Commands successfully loaded: %c' + this.commandsList.length, __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugStyle);
        }
    };
    // Remove existing commands. Called with a single phrase, array of phrases, or methodically. Pass no params to remove all commands.
    VoiceRecognitionService.prototype.removeCommands = function (commandsToRemove) {
        if (commandsToRemove === undefined) {
            this.commandsList = [];
            return;
        }
        commandsToRemove = Array.isArray(commandsToRemove) ? commandsToRemove : [commandsToRemove];
        this.commandsList = this.commandsList.filter(function (command) {
            for (var i = 0; i < commandsToRemove.length; i++) {
                if (commandsToRemove[i] === command.originalPhrase) {
                    return false;
                }
            }
            return true;
        });
    };
    ;
    // Lets the user add a callback of one of 9 types:
    // start, error, end, result, resultMatch, resultNoMatch, errorNetwork, errorPermissionBlocked, errorPermissionDenied
    // Can also optionally receive a context for the callback function as the third argument
    VoiceRecognitionService.prototype.addCallback = function (type, callback, context) {
        if (this.callbacks[type] === undefined) {
            return;
        }
        var cb = window[callback] || callback;
        if (typeof cb !== 'function') {
            return;
        }
        this.callbacks[type].push({
            callback: cb,
            context: context || this
        });
    };
    VoiceRecognitionService.prototype.invokeCallbacks = function (callbacks) {
        callbacks.forEach(function (callback) {
            callback.callback.apply(callback.context);
        });
    };
    ;
    return VoiceRecognitionService;
}());
VoiceRecognitionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], VoiceRecognitionService);

//# sourceMappingURL=voice-recognition.service.js.map

/***/ }),

/***/ 998:
/***/ (function(module, exports, __webpack_require__) {

/*         ______________________________________
  ________|                                      |_______
  \       |             JarvisWidget             |      /
   \      |      Copyright © 2014 MyOrange       |     /
   /      |______________________________________|     \
  /__________)                                (_________\

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * =======================================================================
 * JarvisWidget is FULLY owned and LICENSED by MYORANGE INC.
 * This script may NOT be RESOLD or REDISTRUBUTED on its own under any
 * circumstances, and is only to be used with this purchased
 * copy of SmartAdmin Template.
 * =======================================================================
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * =======================================================================
 * original filename: jarvis.widget.js
 * filesize: 56.7 KB (58,158 bytes)
 * author: Sunny (@bootstraphunt)
 * email: info@myorange.ca
 */
//import { endponitConfig } from '../environments/endpoints';
(function ($, window, document, undefined) {
    //"use strict"; 

    var endponitConfig = __webpack_require__(999);
    console.log(endponitConfig.CALENDAR_ENDPOINT);




    var pluginName = 'jarvisWidgets';


	/**
	 * Check for touch support and set right click events.
	 **/
    var clickEvent = (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch ?
        'touchstart' : 'click') + '.' + pluginName;

    function Plugin(element, options) {
        /**
         * Variables.
         **/
        this.obj = $(element);
        this.o = $.extend({}, $.fn[pluginName].defaults, options);
        this.objId = this.obj.attr('id');
        this.pwCtrls = '.jarviswidget-ctrls';
        this.widget = this.obj.find(this.o.widgets);
        this.toggleClass = this.o.toggleClass.split('|');
        this.editClass = this.o.editClass.split('|');
        this.fullscreenClass = this.o.fullscreenClass.split('|');
        this.customClass = this.o.customClass.split('|');
        this.storage = { enabled: this.o.localStorage };
        this.initialized = false;

        this.init();
    }

    Plugin.prototype = {

        /**
         * Function for the indicator image.
         *
         * @param:
         **/
        _runLoaderWidget: function (elm) {
            var self = this;
            if (self.o.indicator === true) {
                elm.parents(self.o.widgets)
                    .find('.jarviswidget-loader:first')
                    .stop(true, true)
                    .fadeIn(100)
                    .delay(self.o.indicatorTime)
                    .fadeOut(100);
            }
        },

        /**
         * Create a fixed timestamp.
         *
         * @param: t | date | Current date.
         **/
        _getPastTimestamp: function (t) {

            var self = this;

            var da = new Date(t);


            /**
             * Get and set the date and time.
             **/
            var tsMonth = da.getMonth() + 1;
            // index based
            var tsDay = da.getDate();
            var tsYear = da.getFullYear();
            var tsHours = da.getHours();
            var tsMinutes = da.getMinutes();
            var tsSeconds = da.getUTCSeconds();

            /**
             * Checking for one digit values, if so add an zero.
             **/
            if (tsMonth < 10) {
                tsMonth = '0' + tsMonth;
            }
            if (tsDay < 10) {
                tsDay = '0' + tsDay;
            }
            if (tsHours < 10) {
                tsHours = '0' + tsHours;
            }
            if (tsMinutes < 10) {
                tsMinutes = '0' + tsMinutes;
            }
            if (tsSeconds < 10) {
                tsSeconds = '0' + tsSeconds;
            }

            /**
             * The output, how you want it.
             **/
            var format = self.o.timestampFormat.replace(/%d%/g, tsDay)
                .replace(/%m%/g, tsMonth)
                .replace(/%y%/g, tsYear)
                .replace(/%h%/g, tsHours)
                .replace(/%i%/g, tsMinutes)
                .replace(/%s%/g, tsSeconds);

            return format;
        },

        /**
         * AJAX load File, which get and shows the .
         *
         * @param: awidget | object  | The widget.
         * @param: file    | file    | The file thats beeing loaded.
         * @param: loader  | object  | The widget.
         **/
        _loadAjaxFile: function (awidget, file, loader) {

            var self = this;

            awidget.find('.widget-body')
                .load(file, function (response, status, xhr) {

                    var $this = $(this);

                    /**
                     * If action runs into an error display an error msg.
                     **/
                    if (status == "error") {
                        $this.html('<h4 class="alert alert-danger">' + self.o.labelError + '<b> ' +
                            xhr.status + " " + xhr.statusText + '</b></h4>');
                    }

                    /**
                     * Run if there are no errors.
                     **/
                    if (status == "success") {

                        /**
                         * Show a timestamp.
                         **/
                        var aPalceholder = awidget.find(self.o.timestampPlaceholder);

                        if (aPalceholder.length) {

                            aPalceholder.html(self._getPastTimestamp(new Date()));
                        }

                        /**
                         * Run the callback function.
                         **/
                        if (typeof self.o.afterLoad == 'function') {
                            self.o.afterLoad.call(this, awidget);
                        }
                    }

                    self = null;
                });

            /**
             * Run function for the indicator image.
             **/
            this._runLoaderWidget(loader);

        },

        _loadKeys: function () {

            var self = this;

            //*****************************************************************//
            /////////////////////////// SET/GET KEYS ////////////////////////////
            //*****************************************************************//

            // TODO : Push state does not work on IE9, try to find a way to detect IE and use a seperate filter

            if (self.o.ajaxnav === true) {
                var widget_url = location.hash.replace(/^#/, '');
                self.storage.keySettings = 'Plugin_settings_' + widget_url + '_' + self.objId;
                self.storage.keyPosition = 'Plugin_position_' + widget_url + '_' + self.objId;
            } else if (self.initialized === false) {
                var widget_url = self.o.pageKey || location.pathname;
                self.storage.keySettings = 'jarvisWidgets_settings_' + widget_url + '_' + self.objId;
                self.storage.keyPosition = 'jarvisWidgets_position_' + widget_url + '_' + self.objId;
            }

        },

        /**
         * Save all settings to the localStorage.
         *
         * @param:
         **/
        _saveSettingsWidget: function () {

            var self = this;
            var storage = self.storage;

            self._loadKeys();

            var storeSettings = self.obj.find(self.o.widgets)
                .map(function () {
                    var storeSettingsStr = {};
                    storeSettingsStr.id = $(this)
                        .attr('id');
                    storeSettingsStr.style = $(this)
                        .attr('data-widget-attstyle');
                    storeSettingsStr.title = $(this)
                        .children('header')
                        .children('h2')
                        .text();
                    storeSettingsStr.hidden = ($(this)
                        .css('display') == 'none' ? 1 : 0);
                    storeSettingsStr.collapsed = ($(this)
                        .hasClass('jarviswidget-collapsed') ? 1 : 0);
                    return storeSettingsStr;
                }).get();

            var storeSettingsObj = JSON.stringify({
                'widget': storeSettings
            });

            /* Place it in the storage(only if needed) */
            if (storage.enabled && storage.getKeySettings != storeSettingsObj) {
                localStorage.setItem(storage.keySettings, storeSettingsObj);
                storage.getKeySettings = storeSettingsObj;
            }

            /**
             * Run the callback function.
             **/

            if (typeof self.o.onSave == 'function') {
                self.o.onSave.call(this, null, storeSettingsObj, storage.keySettings);
            }
        },

        /**
         * Save positions to the localStorage.
         *
         * @param:
         **/
        _savePositionWidget: function () {

            var self = this;
            var storage = self.storage;

            self._loadKeys();

            var mainArr = self.obj.find(self.o.grid + '.sortable-grid')
                .map(function () {
                    var subArr = $(this)
                        .children(self.o.widgets)
                        .map(function () {
                            return {
                                'id': $(this).attr('id')
                            };
                        }).get();
                    return {
                        'section': subArr
                    };
                }).get();

            var storePositionObj = JSON.stringify({
                'grid': mainArr
            });

            /* Place it in the storage(only if needed) */
            if (storage.enabled && storage.getKeyPosition != storePositionObj) {
                localStorage.setItem(storage.keyPosition, storePositionObj);
                storage.getKeyPosition = storePositionObj
            }

            /**
             * Run the callback function.
             **/
            if (typeof self.o.onSave == 'function') {
                self.o.onSave.call(this, storePositionObj, storage.keyPosition);
            }
        },

        /**
         * Code that we run at the start.
         *
         * @param:
         **/
        init: function () {

            // console.log(endponitConfig.USER_API_ENDPOINT)
            $.ajax({
                url: endponitConfig.WIDGET_API_ENDPOINT,
                type: 'GET',
                contentType: 'application/json',
                headers: { "Authorization": localStorage.getItem('Authentication') },
                success: function (result) {
                    var userWidgetArray = new Array();
                    var adminWidgetArray = new Array();
                    result.data.forEach(function (element) {

                        element.role.forEach(function (user) {
                            if (user.name == 'USER') {
                                if (user.name != null) {
                                    userWidgetArray.push(element.name);
                                }
                                $('#' + element.name)
                                    .fadeOut(0, function () {
                                        $(this).remove();
                                    });
                            }
                            if (user.name == 'ADMIN') {
                                if (user.name != null) {
                                    adminWidgetArray.push(element.name);
                                }
                                $('#' + element.name)
                                    .fadeOut(0, function () {
                                        $(this).remove();
                                    });
                            }
                        })
                    }, this);
                    localStorage.setItem('userWidget', userWidgetArray);
                    localStorage.setItem('adminWidget', adminWidgetArray);
                },
                error: function () {
                }
            });

            var self = this;

            if (self.initialized) return;

            self._initStorage(self.storage);

            /**
             * Force users to use an id(it's needed for the local storage).
             **/
            if (!$('#' + self.objId)
                .length) {
                alert('It looks like your using a class instead of an ID, dont do that!');
            }

            /**
             * Add RTL support.
             **/
            if (self.o.rtl === true) {
                $('body')
                    .addClass('rtl');
            }

            /**
             * This will add an extra class that we use to store the
             * widgets in the right order.(savety)
             **/

            $(self.o.grid)
                .each(function () {
                    if ($(this)
                        .find(self.o.widgets)
                        .length) {
                        $(this)
                            .addClass('sortable-grid');
                    }
                });

            //*****************************************************************//
            //////////////////////// SET POSITION WIDGET ////////////////////////
            //*****************************************************************//

            /**
             * Run if data is present.
             **/
            if (self.storage.enabled && self.storage.getKeyPosition) {

                var jsonPosition = JSON.parse(self.storage.getKeyPosition);

                /**
                 * Loop the data, and put every widget on the right place.
                 **/
                for (var key in jsonPosition.grid) {
                    var changeOrder = self.obj.find(self.o.grid + '.sortable-grid')
                        .eq(key);
                    for (var key2 in jsonPosition.grid[key].section) {
                        changeOrder.append($('#' + jsonPosition.grid[key].section[key2].id));
                    }
                }

            }

            //*****************************************************************//
            /////////////////////// SET SETTINGS WIDGET /////////////////////////
            //*****************************************************************//

            /**
             * Run if data is present.
             **/
            if (self.storage.enabled && self.storage.getKeySettings) {

                var jsonSettings = JSON.parse(self.storage.getKeySettings);
                console.log(jsonSettings)

                /**
                 * Loop the data and hide/show the widgets and set the inputs in
                 * panel to checked(if hidden) and add an indicator class to the div.
                 * Loop all labels and update the widget titles.
                 **/
                for (var key in jsonSettings.widget) {
                    if (jsonSettings.widget[key].id === "admin-notificationstree--notifications-tree" || jsonSettings.widget[key].id === 'admin-template-list--templates') {

                        /**
                         * Delete the right widget.
                        **/
                        $('#' + jsonSettings.widget[key].id)
                            .fadeOut(self.o.deleteSpeed, function () {
                                $(this).remove();
                            });
                    }
                    else {
                        var widgetId = $('#' + jsonSettings.widget[key].id);

                        /**
                         * Set a style(if present).
                         **/
                        if (jsonSettings.widget[key].style) {
                            //console.log("test");
                            widgetId.removeClassPrefix('jarviswidget-color-')
                                .addClass(jsonSettings.widget[key].style)
                                .attr('data-widget-attstyle', '' + jsonSettings.widget[key].style + '');
                        }

                        /**
                         * Hide/show widget.
                         **/
                        if (jsonSettings.widget[key].hidden == 1) {
                            widgetId.hide(1);
                        } else {
                            widgetId.show(1)
                                .removeAttr('data-widget-hidden');
                        }

                        /**
                         * Toggle content widget.
                         **/
                        if (jsonSettings.widget[key].collapsed == 1) {
                            widgetId.addClass('jarviswidget-collapsed')
                                .children('div')
                                .hide(1);
                        }

                        /**
                         * Update title widget (if needed).
                         **/
                        if (widgetId.children('header')
                            .children('h2')
                            .text() != jsonSettings.widget[key].title) {
                            widgetId.children('header')
                                .children('h2')
                                .text(jsonSettings.widget[key].title);
                        }
                    }
                }
            }

            //*****************************************************************//
            ////////////////////////// LOOP AL WIDGETS //////////////////////////
            //*****************************************************************//

            /**
             * This will add/edit/remove the settings to all widgets
             **/
            self.widget.each(function () {

                var tWidget = $(this),
                    thisHeader = $(this).children('header'),
                    customBtn,
                    deleteBtn,
                    editBtn,
                    fullscreenBtn,
                    widgetcolorBtn,
                    toggleBtn,
                    toggleSettings,
                    refreshBtn;

                /**
                 * Dont double wrap(check).
                 **/
                if (!thisHeader.parent()
                    .attr('role')) {

                    /**
                     * Hide the widget if the dataset 'widget-hidden' is set to true.
                     **/
                    if (tWidget.data('widget-hidden') === true) {

                        tWidget.hide();
                    }

                    /**
					 * Hide the content of the widget if the dataset
					 * 'widget-collapsed' is set to true.

					 **/
                    if (tWidget.data('widget-collapsed') === true) {
                        tWidget.addClass('jarviswidget-collapsed')
                            .children('div')
                            .hide();
                    }

                    /**
                     * Check for the dataset 'widget-icon' if so get the icon
                     * and attach it to the widget header.
                     * NOTE: MOVED THIS TO PHYSICAL for more control
                     **/
                    //if(tWidget.data('widget-icon')){
                    //	thisHeader.prepend('<i class="jarviswidget-icon '+tWidget.data('widget-icon')+'"></i>');
                    //}

                    /**
                     * Add a delete button to the widget header (if set to true).
                     **/
                    if (self.o.customButton === true && tWidget.data('widget-custombutton') ===
                        undefined && self.customClass[0].length !== 0) {
                        customBtn =
                            '<a href="javascript:void(0);" class="button-icon jarviswidget-custom-btn"><i class="' +
                            self.customClass[0] + '"></i></a>';
                    } else {
                        customBtn = '';
                    }

                    /**
                     * Add a delete button to the widget header (if set to true).
                     **/
                    if (self.o.deleteButton === true && tWidget.data('widget-deletebutton') ===
                        undefined) {
                        deleteBtn =
                            '<a href="javascript:void(0);" class="button-icon jarviswidget-delete-btn" rel="tooltip" title="Delete" data-placement="bottom"><i class="' +
                            self.o.deleteClass + '"></i></a>';
                    } else {
                        deleteBtn = '';
                    }

                    /**
                     * Add a delete button to the widget header (if set to true).
                     **/
                    if (self.o.editButton === true && tWidget.data('widget-editbutton') === undefined) {
                        editBtn =
                            '<a href="javascript:void(0);" class="button-icon jarviswidget-edit-btn" rel="tooltip" title="Edit" data-placement="bottom"><i class="' +
                            self.editClass[0] + '"></i></a>';
                    } else {
                        editBtn = '';
                    }

                    /**
                     * Add a delete button to the widget header (if set to true).
                     **/
                    if (self.o.fullscreenButton === true && tWidget.data('widget-fullscreenbutton') ===
                        undefined) {
                        fullscreenBtn =
                            '<a href="javascript:void(0);" class="button-icon jarviswidget-fullscreen-btn" rel="tooltip" title="Fullscreen" data-placement="bottom"><i class="' +
                            self.fullscreenClass[0] + '"></i></a>';
                    } else {
                        fullscreenBtn = '';
                    }

                    /**
                     * Add a delete button to the widget header (if set to true).
                     **/
                    if (self.o.colorButton === true && tWidget.data('widget-colorbutton') ===
                        undefined) {
                        widgetcolorBtn =
                            '<a data-toggle="dropdown" class="dropdown-toggle color-box selector" href="javascript:void(0);"></a><ul class="dropdown-menu arrow-box-up-right color-select pull-right"><li><span class="bg-color-green" data-widget-setstyle="jarviswidget-color-green" rel="tooltip" data-placement="left" data-original-title="Green Grass"></span></li><li><span class="bg-color-greenDark" data-widget-setstyle="jarviswidget-color-greenDark" rel="tooltip" data-placement="top" data-original-title="Dark Green"></span></li><li><span class="bg-color-greenLight" data-widget-setstyle="jarviswidget-color-greenLight" rel="tooltip" data-placement="top" data-original-title="Light Green"></span></li><li><span class="bg-color-purple" data-widget-setstyle="jarviswidget-color-purple" rel="tooltip" data-placement="top" data-original-title="Purple"></span></li><li><span class="bg-color-magenta" data-widget-setstyle="jarviswidget-color-magenta" rel="tooltip" data-placement="top" data-original-title="Magenta"></span></li><li><span class="bg-color-pink" data-widget-setstyle="jarviswidget-color-pink" rel="tooltip" data-placement="right" data-original-title="Pink"></span></li><li><span class="bg-color-pinkDark" data-widget-setstyle="jarviswidget-color-pinkDark" rel="tooltip" data-placement="left" data-original-title="Fade Pink"></span></li><li><span class="bg-color-blueLight" data-widget-setstyle="jarviswidget-color-blueLight" rel="tooltip" data-placement="top" data-original-title="Light Blue"></span></li><li><span class="bg-color-teal" data-widget-setstyle="jarviswidget-color-teal" rel="tooltip" data-placement="top" data-original-title="Teal"></span></li><li><span class="bg-color-blue" data-widget-setstyle="jarviswidget-color-blue" rel="tooltip" data-placement="top" data-original-title="Ocean Blue"></span></li><li><span class="bg-color-blueDark" data-widget-setstyle="jarviswidget-color-blueDark" rel="tooltip" data-placement="top" data-original-title="Night Sky"></span></li><li><span class="bg-color-darken" data-widget-setstyle="jarviswidget-color-darken" rel="tooltip" data-placement="right" data-original-title="Night"></span></li><li><span class="bg-color-yellow" data-widget-setstyle="jarviswidget-color-yellow" rel="tooltip" data-placement="left" data-original-title="Day Light"></span></li><li><span class="bg-color-orange" data-widget-setstyle="jarviswidget-color-orange" rel="tooltip" data-placement="bottom" data-original-title="Orange"></span></li><li><span class="bg-color-orangeDark" data-widget-setstyle="jarviswidget-color-orangeDark" rel="tooltip" data-placement="bottom" data-original-title="Dark Orange"></span></li><li><span class="bg-color-red" data-widget-setstyle="jarviswidget-color-red" rel="tooltip" data-placement="bottom" data-original-title="Red Rose"></span></li><li><span class="bg-color-redLight" data-widget-setstyle="jarviswidget-color-redLight" rel="tooltip" data-placement="bottom" data-original-title="Light Red"></span></li><li><span class="bg-color-white" data-widget-setstyle="jarviswidget-color-white" rel="tooltip" data-placement="right" data-original-title="Purity"></span></li><li><a href="javascript:void(0);" class="jarviswidget-remove-colors" data-widget-setstyle="" rel="tooltip" data-placement="bottom" data-original-title="Reset widget color to default">Remove</a></li></ul>';
                        thisHeader.prepend('<div class="widget-toolbar">' + widgetcolorBtn + '</div>');

                    } else {
                        widgetcolorBtn = '';
                    }

                    /**
                     * Add a toggle button to the widget header (if set to true).
                     **/
                    if (self.o.toggleButton === true && tWidget.data('widget-togglebutton') ===
                        undefined) {
                        if (tWidget.data('widget-collapsed') === true || tWidget.hasClass(
                            'jarviswidget-collapsed')) {
                            toggleSettings = self.toggleClass[1];
                        } else {
                            toggleSettings = self.toggleClass[0];
                        }
                        toggleBtn =
                            '<a href="javascript:void(0);" class="button-icon jarviswidget-toggle-btn" rel="tooltip" title="Collapse" data-placement="bottom"><i class="' +
                            toggleSettings + '"></i></a>';
                    } else {
                        toggleBtn = '';
                    }

                    /**
                     * Add a refresh button to the widget header (if set to true).
                     **/
                    if (self.o.refreshButton === true && tWidget.data('widget-refreshbutton') !==
                        false && tWidget.data('widget-load')) {
                        refreshBtn =
                            '<a href="javascript:void(0);" class="button-icon jarviswidget-refresh-btn" data-loading-text="&nbsp;&nbsp;Loading...&nbsp;" rel="tooltip" title="Refresh" data-placement="bottom"><i class="' +
                            self.o.refreshButtonClass + '"></i></a>';
                    } else {
                        refreshBtn = '';
                    }

                    /**
                     * Set the buttons order.
                     **/
                    var formatButtons = self.o.buttonOrder.replace(/%refresh%/g, refreshBtn)
                        .replace(/%delete%/g, deleteBtn)
                        .replace(/%custom%/g, customBtn)
                        .replace(/%fullscreen%/g, fullscreenBtn)
                        .replace(/%edit%/g, editBtn)
                        .replace(/%toggle%/g, toggleBtn);

                    /**
                     * Add a button wrapper to the header.
                     **/
                    if (refreshBtn !== '' || deleteBtn !== '' || customBtn !== '' || fullscreenBtn !== '' ||
                        editBtn !== '' || toggleBtn !== '') {
                        thisHeader.prepend('<div class="jarviswidget-ctrls">' + formatButtons +
                            '</div>');
                    }

                    /**
                     * Adding a helper class to all sortable widgets, this will be
                     * used to find the widgets that are sortable, it will skip the widgets
                     * that have the dataset 'widget-sortable="false"' set to false.
                     **/
                    if (self.o.sortable === true && tWidget.data('widget-sortable') === undefined) {
                        tWidget.addClass('jarviswidget-sortable');
                    }

                    /**
                     * If the edit box is present copy the title to the input.
                     **/
                    if (tWidget.find(self.o.editPlaceholder)
                        .length) {
                        tWidget.find(self.o.editPlaceholder)
                            .find('input')
                            .val($.trim(thisHeader.children('h2')
                                .text()));
                    }

                    /**
                     * Prepend the image to the widget header.
                     **/
                    thisHeader.append(
                        '<span class="jarviswidget-loader"><i class="fa fa-refresh fa-spin"></i></span>'
                    );

                    /**
                     * Adding roles to some parts.
                     **/
                    tWidget.attr('role', 'widget')
                        .children('div')
                        .attr('role', 'content')
                        .prev('header')
                        .attr('role', 'heading')
                        .children('div')
                        .attr('role', 'menu');
                }
            });

            /**
             * Hide all buttons if option is set to true.
             **/
            if (self.o.buttonsHidden === true) {
                $(self.o.pwCtrls)
                    .hide();
            }

            /* activate all tooltips */
            // $(".jarviswidget header [rel=tooltip]")
            //     .tooltip();

            //******************************************************************//
            //////////////////////////////// AJAX ////////////////////////////////
            //******************************************************************//

            /**
             * Loop all ajax widgets.
             **/
            // $.intervalArr = new Array(); - decleared in app.js
            self.obj.find('[data-widget-load]')
                .each(function () {

                    /**
                     * Variables.
                     **/
                    var thisItem = $(this),
                        thisItemHeader = thisItem.children(),
                        pathToFile = thisItem.data('widget-load'),
                        reloadTime = thisItem.data('widget-refresh') * 1000,
                        ajaxLoader = thisItem.children();

                    if (!thisItem.find('.jarviswidget-ajax-placeholder')
                        .length) {

                        /**
                         * Append a AJAX placeholder.
                         **/
                        thisItem.children('widget-body')
                            .append('<div class="jarviswidget-ajax-placeholder">' + self.o.loadingLabel +
                            '</div>');

                        /**
                         * If widget has a reload time refresh the widget, if the value
                         * has been set to 0 dont reload.
                         **/
                        if (thisItem.data('widget-refresh') > 0) {

                            /**
                             * Load file on start.
                             **/
                            self._loadAjaxFile(thisItem, pathToFile, thisItemHeader);

                            /**
                             * Set an interval to reload the content every XXX seconds.
                             * intervalArr.push(setInterval(intervalOne, 2000)  );
                             **/
                            $.intervalArr.push(setInterval(function () { self._loadAjaxFile(thisItem, pathToFile, thisItemHeader) }, reloadTime));

                        } else {

                            /**
                             * Load the content just once.
                             **/
                            self._loadAjaxFile(thisItem, pathToFile, thisItemHeader);

                        }
                    }
                });

            //******************************************************************//
            ////////////////////////////// SORTABLE //////////////////////////////
            //******************************************************************//

            /**
             * jQuery UI soratble, this allows users to sort the widgets.
             * Notice that this part needs the jquery-ui core to work.
             **/
            if (self.o.sortable === true && jQuery.ui) {
                var sortItem = self.obj.find(self.o.grid + '.sortable-grid')
                    .not('[data-widget-excludegrid]');
                sortItem.sortable({
                    items: sortItem.find(self.o.widgets + '.jarviswidget-sortable'),
                    connectWith: sortItem,
                    placeholder: self.o.placeholderClass,
                    cursor: 'move',
                    revert: true,
                    opacity: self.o.opacity,
                    delay: 200,
                    cancel: '.button-icon, #jarviswidget-fullscreen-mode > div',
                    zIndex: 10000,
                    handle: self.o.dragHandle,
                    forcePlaceholderSize: true,
                    forceHelperSize: true,
                    update: function (event, ui) {
                        /* run pre-loader in the widget */
                        self._runLoaderWidget(ui.item.children());
                        /* store the positions of the plugins */
                        self._savePositionWidget();
                        /**
                         * Run the callback function.
                         **/
                        if (typeof self.o.onChange == 'function') {
                            self.o.onChange.call(this, ui.item);
                        }
                    }
                });
            }

            //*****************************************************************//
            ////////////////////////// BUTTONS VISIBLE //////////////////////////
            //*****************************************************************//

            /**
             * Show and hide the widget control buttons, the buttons will be
             * visible if the users hover over the widgets header. At default the
             * buttons are always visible.
             **/
            if (self.o.buttonsHidden === true) {

                /**
                 * Show and hide the buttons.
                 **/
                self.widget.children('header')
                    .on('mouseenter.' + pluginName, function () {
                        $(this)
                            .children(self.o.pwCtrls)
                            .stop(true, true)
                            .fadeTo(100, 1.0);
                    })
                    .on('mouseleave.' + pluginName, function () {
                        $(this)
                            .children(self.o.pwCtrls)
                            .stop(true, true)
                            .fadeTo(100, 0.0);
                    });
            }

            //*****************************************************************//
            ///////////////////////// CLICKEVENTS //////////////////////////
            //*****************************************************************//

            self._clickEvents();

            //*****************************************************************//
            ///////////////////// DELETE LOCAL STORAGE KEYS /////////////////////
            //*****************************************************************//

            if (self.storage.enabled) {
				/**
				 * Delete the settings key.
				 **/
                $(self.o.deleteSettingsKey)
                    .on(clickEvent, this, function (e) {
                        var cleared = confirm(self.o.settingsKeyLabel);
                        if (cleared) {
                            localStorage.removeItem(keySettings);
                        }
                        e.preventDefault();
                    });
				/**
				 * Delete the position key.
				 **/
                $(self.o.deletePositionKey)
                    .on(clickEvent, this, function (e) {
                        var cleared = confirm(self.o.positionKeyLabel);
                        if (cleared) {
                            localStorage.removeItem(keyPosition);
                        }
                        e.preventDefault();
                    });
            }

            initialized = true;
        },

        /**
         * Initialize storage.
         *
         * @param:
         **/
        _initStorage: function (storage) {

            //*****************************************************************//
            //////////////////////// LOCALSTORAGE CHECK /////////////////////////
            //*****************************************************************//

            storage.enabled = storage.enabled && !! function () {
                var result, uid = +new Date();
                try {
                    localStorage.setItem(uid, uid);
                    result = localStorage.getItem(uid) == uid;
                    localStorage.removeItem(uid);
                    return result;
                } catch (e) { }
            }();

            this._loadKeys();

            if (storage.enabled) {

                storage.getKeySettings = localStorage.getItem(storage.keySettings);
                storage.getKeyPosition = localStorage.getItem(storage.keyPosition);

            } // end if

        },

        /**
         * All of the click events.
         *
         * @param:
         **/
        _clickEvents: function () {

            var self = this;

            var headers = self.widget.children('header');

            //*****************************************************************//
            /////////////////////////// TOGGLE WIDGETS //////////////////////////
            //*****************************************************************//

            /**
             * Allow users to toggle the content of the widgets.
             **/
            headers.on(clickEvent, '.jarviswidget-toggle-btn', function (e) {

                var tWidget = $(this);
                var pWidget = tWidget.parents(self.o.widgets);

                /**
                 * Run function for the indicator image.
                 **/
                self._runLoaderWidget(tWidget);

                /**
                 * Change the class and hide/show the widgets content.
                 **/
                if (pWidget.hasClass('jarviswidget-collapsed')) {
                    tWidget.children()
                        .removeClass(self.toggleClass[1])
                        .addClass(self.toggleClass[0])
                        .parents(self.o.widgets)
                        .removeClass('jarviswidget-collapsed')
                        .children('[role=content]')
                        .slideDown(self.o.toggleSpeed, function () {
                            self._saveSettingsWidget();
                        });
                } else {
                    tWidget.children()
                        .removeClass(self.toggleClass[0])
                        .addClass(self.toggleClass[1])
                        .parents(self.o.widgets)
                        .addClass('jarviswidget-collapsed')
                        .children('[role=content]')
                        .slideUp(self.o.toggleSpeed, function () {
                            self._saveSettingsWidget();
                        });
                }

                /**
                 * Run the callback function.
                 **/
                if (typeof self.o.onToggle == 'function') {
                    self.o.onToggle.call(this, pWidget);
                }

                e.preventDefault();
            });

            //*****************************************************************//
            ///////////////////////// FULLSCREEN WIDGETS ////////////////////////
            //*****************************************************************//

            /**
             * Set fullscreen height function.
             **/
            function heightFullscreen() {
                if ($('#jarviswidget-fullscreen-mode')
                    .length) {

                    /**
                     * Setting height variables.
                     **/
                    var heightWindow = $(window)
                        .height();
                    var heightHeader = $('#jarviswidget-fullscreen-mode')
                        .children(self.o.widgets)
                        .children('header')
                        .height();

                    /**
                     * Setting the height to the right widget.
                     **/
                    $('#jarviswidget-fullscreen-mode')
                        .children(self.o.widgets)
                        .children('div')
                        .height(heightWindow - heightHeader - 15);
                }
            }

            /**
             * On click go to fullscreen mode.
             **/
            headers.on(clickEvent, '.jarviswidget-fullscreen-btn', function (e) {

                var thisWidget = $(this)
                    .parents(self.o.widgets);
                var thisWidgetContent = thisWidget.children('div');

                /**
                 * Run function for the indicator image.
                 **/
                self._runLoaderWidget($(this));

                /**
                 * Wrap the widget and go fullsize.
                 **/
                if ($('#jarviswidget-fullscreen-mode')
                    .length) {

                    /**
                     * Remove class from the body.
                     **/
                    $('.nooverflow')
                        .removeClass('nooverflow');

                    /**
                     * Unwrap the widget, remove the height, set the right
                     * fulscreen button back, and show all other buttons.
                     **/
                    thisWidget.unwrap('div')
                        .children('div')
                        .removeAttr('style')
                        .end()
                        .find('.jarviswidget-fullscreen-btn:first')
                        .children()
                        .removeClass(self.fullscreenClass[1])
                        .addClass(self.fullscreenClass[0])
                        .parents(self.pwCtrls)
                        .children('a')
                        .show();

                    /**
                     * Reset collapsed widgets.
                     **/
                    if (thisWidgetContent.hasClass('jarviswidget-visible')) {
                        thisWidgetContent.hide()
                            .removeClass('jarviswidget-visible');
                    }

                } else {

                    /**
                     * Prevent the body from scrolling.
                     **/
                    $('body')
                        .addClass('nooverflow');

                    /**
					 * Wrap, append it to the body, show the right button

					 * and hide all other buttons.
					 **/
                    thisWidget.wrap('<div id="jarviswidget-fullscreen-mode"/>')
                        .parent()
                        .find('.jarviswidget-fullscreen-btn:first')
                        .children()
                        .removeClass(self.fullscreenClass[0])
                        .addClass(self.fullscreenClass[1])
                        .parents(self.pwCtrls)
                        .children('a:not(.jarviswidget-fullscreen-btn)')
                        .hide();

                    /**
                     * Show collapsed widgets.
                     **/
                    if (thisWidgetContent.is(':hidden')) {
                        thisWidgetContent.show()
                            .addClass('jarviswidget-visible');
                    }
                }

                /**
                 * Run the set height function.
                 **/
                heightFullscreen();

                /**
                 * Run the callback function.
                 **/
                if (typeof self.o.onFullscreen == 'function') {
                    self.o.onFullscreen.call(this, thisWidget);
                }

                e.preventDefault();
            });

            /**
             * Run the set fullscreen height function when the screen resizes.
             **/
            $(window)
                .on('resize.' + pluginName, function () {

                    /**
                     * Run the set height function.
                     **/
                    heightFullscreen();
                });

            //*****************************************************************//
            //////////////////////////// EDIT WIDGETS ///////////////////////////
            //*****************************************************************//

            /**
             * Allow users to show/hide a edit box.
             **/
            headers.on(clickEvent, '.jarviswidget-edit-btn', function (e) {

                var tWidget = $(this)
                    .parents(self.o.widgets);

                /**
                 * Run function for the indicator image.
                 **/
                self._runLoaderWidget($(this));

                /**
                 * Show/hide the edit box.
                 **/
                if (tWidget.find(self.o.editPlaceholder)
                    .is(':visible')) {
                    $(this)
                        .children()
                        .removeClass(self.editClass[1])
                        .addClass(self.editClass[0])
                        .parents(self.o.widgets)
                        .find(self.o.editPlaceholder)
                        .slideUp(self.o.editSpeed, function () {
                            self._saveSettingsWidget();
                        });
                } else {
                    $(this)
                        .children()
                        .removeClass(self.editClass[0])
                        .addClass(self.editClass[1])
                        .parents(self.o.widgets)
                        .find(self.o.editPlaceholder)
                        .slideDown(self.o.editSpeed);
                }

                /**
                 * Run the callback function.
                 **/
                if (typeof self.o.onEdit == 'function') {
                    self.o.onEdit.call(this, tWidget);
                }

                e.preventDefault();
            });

            /**
             * Update the widgets title by using the edit input.
             **/
            $(self.o.editPlaceholder)
                .find('input')
                .keyup(function () {
                    $(this)
                        .parents(self.o.widgets)
                        .children('header')
                        .children('h2')
                        .text($(this)
                            .val());
                });

            /**
             * Set a custom style.
             **/
            headers.on(clickEvent, '[data-widget-setstyle]', function (e) {

                var val = $(this)
                    .data('widget-setstyle');
                var styles = '';

                /**
                 * Get all other styles, in order to remove it.
                 **/
                $(this)
                    .parents(self.o.editPlaceholder)
                    .find('[data-widget-setstyle]')
                    .each(function () {
                        styles += $(this)
                            .data('widget-setstyle') + ' ';
                    });

                /**
                 * Set the new style.
                 **/
                $(this)
                    .parents(self.o.widgets)
                    .attr('data-widget-attstyle', '' + val + '')
                    .removeClassPrefix('jarviswidget-color-')
                    .addClass(val);

                /**
                 * Run function for the indicator image.
                 **/
                self._runLoaderWidget($(this));

                /**
                 * Lets save the setings.
                 **/
                self._saveSettingsWidget();

                e.preventDefault();
            });

            //*****************************************************************//
            /////////////////////////// CUSTOM ACTION ///////////////////////////
            //*****************************************************************//

            /**
             * Allow users to show/hide a edit box.
             **/
            headers.on(clickEvent, '.jarviswidget-custom-btn', function (e) {

                var w = $(this)
                    .parents(self.o.widgets);

                /**
                 * Run function for the indicator image.
                 **/
                self._runLoaderWidget($(this));

                /**
                 * Start and end custom action.
                 **/
                if ($(this)
                    .children('.' + self.customClass[0])
                    .length) {
                    $(this)
                        .children()
                        .removeClass(self.customClass[0])
                        .addClass(self.customClass[1]);

                    /**
                     * Run the callback function.
                     **/
                    if (typeof self.o.customStart == 'function') {
                        self.o.customStart.call(this, w);
                    }
                } else {
                    $(this)
                        .children()
                        .removeClass(self.customClass[1])
                        .addClass(self.customClass[0]);

                    /**
                     * Run the callback function.
                     **/
                    if (typeof self.o.customEnd == 'function') {
                        self.o.customEnd.call(this, w);
                    }
                }

                /**
                 * Lets save the setings.
                 **/
                self._saveSettingsWidget();

                e.preventDefault();
            });

            //*****************************************************************//
            /////////////////////////// DELETE WIDGETS //////////////////////////
            //*****************************************************************//

            /**
             * Allow users to delete the widgets.
             **/
            headers.on(clickEvent, '.jarviswidget-delete-btn', function (e) {

                var tWidget = $(this)
                    .parents(self.o.widgets);
                var removeId = tWidget.attr('id');
                var widTitle = tWidget.children('header')
                    .children('h2')
                    .text();

                /**
                 * Delete the widgets with a confirm popup.
                 **/

                if ($.SmartMessageBox) {

                    $.SmartMessageBox({
                        title: "<i class='fa fa-times' style='color:#ed1c24'></i> " + self.o.labelDelete +
                        ' "' + widTitle + '"',
                        content: self.o.deleteMsg,
                        buttons: '[No][Yes]'
                    }, function (ButtonPressed) {
                        //console.log(ButtonPressed);
                        if (ButtonPressed == "Yes") {
	                        /**
	                         * Run function for the indicator image.
	                         **/
                            self._runLoaderWidget($(this));

	                        /**
	                         * Delete the right widget.
	                         **/
                            $('#' + removeId)
                                .fadeOut(self.o.deleteSpeed, function () {

                                    $(this)
                                        .remove();

	                                /**
	                                 * Run the callback function.
	                                 **/
                                    if (typeof self.o.onDelete == 'function') {
                                        self.o.onDelete.call(this, tWidget);
                                    }
                                });
                        }

                    });

                } else {

                	/**
                     * Delete the right widget.
                     **/
                    $('#' + removeId)
                        .fadeOut(self.o.deleteSpeed, function () {

                            $(this)
                                .remove();

                            /**
                             * Run the callback function.
                             **/
                            if (typeof self.o.onDelete == 'function') {
                                self.o.onDelete.call(this, tWidget);
                            }
                        });

                }

                e.preventDefault();
            });

            //******************************************************************//
            /////////////////////////// REFRESH BUTTON ///////////////////////////
            //******************************************************************//

            /**
             * Refresh ajax upon clicking refresh link.
             **/
            headers.on(clickEvent, '.jarviswidget-refresh-btn', function (e) {

                /**
                 * Variables.
                 **/
                var rItem = $(this)
                    .parents(self.o.widgets),
                    pathToFile = rItem.data('widget-load'),
                    ajaxLoader = rItem.children(),
                    btn = $(this);

                /**
                 * Run the ajax function.
                 **/
                btn.button('loading');
                ajaxLoader.addClass("widget-body-ajax-loading");
                setTimeout(function () {
                    btn.button('reset');
                    ajaxLoader.removeClass("widget-body-ajax-loading");
                    self._loadAjaxFile(rItem, pathToFile, ajaxLoader);

                }, 1000);

                e.preventDefault();
            });

            headers = null;
        },

        /**
         * Destroy.
         *
         * @param:
         **/
        destroy: function () {
            var self = this,
                namespace = '.' + pluginName,
                sortItem = self.obj.find(self.o.grid + '.sortable-grid').not('[data-widget-excludegrid]');

            sortItem.sortable('destroy');
            self.widget.children('header').off(namespace);
            $(self.o.deleteSettingsKey).off(namespace);
            $(self.o.deletePositionKey).off(namespace);
            $(window).off(namespace);
            self.obj.removeData(pluginName);
        }
    };

    $.fn[pluginName] = function (option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data(pluginName);
            if (!data) {
                var options = typeof option == 'object' && option;
                $this.data(pluginName, (data = new Plugin(this, options)));
            }
            if (typeof option == 'string') {
                data[option]();
            }
        });
    };

    /**
     * Default settings(dont change).
     * You can globally override these options
     * by using $.fn.pluginName.key = 'value';
     **/

    $.fn[pluginName].defaults = {
        grid: 'section',
        widgets: '.jarviswidget',
        localStorage: true,
        deleteSettingsKey: '',
        settingsKeyLabel: 'Reset settings?',
        deletePositionKey: '',
        positionKeyLabel: 'Reset position?',
        sortable: true,
        buttonsHidden: false,
        toggleButton: true,
        toggleClass: 'min-10 | plus-10',
        toggleSpeed: 200,
        onToggle: function () { },
        deleteButton: true,
        deleteMsg: 'Warning: This action cannot be undone',
        deleteClass: 'trashcan-10',
        deleteSpeed: 200,
        onDelete: function () { },
        editButton: true,
        editPlaceholder: '.jarviswidget-editbox',
        editClass: 'pencil-10 | delete-10',
        editSpeed: 200,
        onEdit: function () { },
        colorButton: true,
        fullscreenButton: true,
        fullscreenClass: 'fullscreen-10 | normalscreen-10',
        fullscreenDiff: 3,
        onFullscreen: function () { },
        customButton: true,
        customClass: '',
        customStart: function () { },
        customEnd: function () { },
        buttonOrder: '%refresh% %delete% %custom% %edit% %fullscreen% %toggle%',
        opacity: 1.0,
        dragHandle: '> header',
        placeholderClass: 'jarviswidget-placeholder',
        indicator: true,
        indicatorTime: 600,
        ajax: true,
        loadingLabel: 'loading...',
        timestampPlaceholder: '.jarviswidget-timestamp',
        timestampFormat: 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
        refreshButton: true,
        refreshButtonClass: 'refresh-10',
        labelError: 'Sorry but there was a error:',
        labelUpdated: 'Last Update:',
        labelRefresh: 'Refresh',
        labelDelete: 'Delete widget:',
        afterLoad: function () { },
        rtl: false,
        onChange: function () { },
        onSave: function () { },
        ajaxnav: true
    };

    /*
     * REMOVE CSS CLASS WITH PREFIX
     * Description: Remove classes that have given prefix. You have an element with classes
     * 				"widget widget-color-red"
     * Usage: $elem.removeClassPrefix('widget-color-');
     */

    $.fn.removeClassPrefix = function (prefix) {

        this.each(function (i, it) {
            var classes = it.className.split(" ")
                .map(function (item) {
                    return item.indexOf(prefix) === 0 ? "" : item;
                });
            //it.className = classes.join(" ");
            it.className = $.trim(classes.join(" "));

        });

        return this;
    };
})(jQuery, window, document);


/***/ }),

/***/ 999:
/***/ (function(module, exports) {

// envEndpoint.js
var WIDGET_API_ENDPOINT='/api/widgets/';

// export it
exports.WIDGET_API_ENDPOINT = WIDGET_API_ENDPOINT;


/***/ })

},[1004]);
//# sourceMappingURL=main.bundle.js.map