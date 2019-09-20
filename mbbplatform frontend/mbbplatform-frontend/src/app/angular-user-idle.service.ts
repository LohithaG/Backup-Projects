import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx'
import { UserIdleConfig } from './angular-user-idle.config';
import { merge } from 'rxjs/operator/merge';
import { fromEvent } from 'rxjs';


@Injectable()
export class UserIdleService {
    protected timerStart$ = new Subject<boolean>();
    protected timeout$ = new Subject<boolean>();
    protected idle$: Observable<any>;
    protected activityEvents$: Observable<any>;
    protected timer$: Observable<any>;
    protected ping$: Observable<any>;
    protected idleSubscription: Subscription;
    protected idle = 600;
    protected timeout = 300;
    protected ping = 120;
    protected isInactivityTimer: boolean;
    protected isTimeout: boolean;
    constructor(config?: UserIdleConfig) {
        if (config) {
            this.idle = config.idle;
            this.timeout = config.timeout;
            this.ping = config.ping;
        }

        this.activityEvents$ = Observable.merge(
            Observable.fromEvent(window, 'mousemove'),
            Observable.fromEvent(window, 'resize'),
            Observable.fromEvent(document, 'keydown'));

        this.idle$ = Observable.from(this.activityEvents$);
    }

    startWatching() {
        // var _this = this;
        // this.idleSubscription = this.idle$
        //     .map(function () {
        //         if (_this.isInactivityTimer) {
        //             _this.timerStart$.next(false);
        //         }
        //     })
        //     .bufferTime(this.idle * 1000)
        //     .filter(function (arr) { return !arr.length; })
        //     .map(function () { return _this.timerStart$.next(true); })
        //     .subscribe();

        this.idleSubscription = this.idle$
            .bufferTime(1000)  // Starting point of detecting of user's inactivity
            .filter(arr => !arr.length && !this.isInactivityTimer)
            .switchMap(() => {
                this.isInactivityTimer = true;
                return Observable.interval(1000)
                    .takeUntil(Observable.merge(
                        this.activityEvents$,
                        Observable.timer(this.idle * 1000)
                            .do(() => this.timerStart$.next(true))))
                    .finally(() => this.isInactivityTimer = false);
            })
            .subscribe();
        this.setupTimer(this.timeout);
        this.setupPing(this.ping);
        
    }
    setupTimer(timeout) {

        var _this = this;
        this.timer$ = Observable.interval(1000)
            .take(timeout)
            .map(function () { return 1; })
            .scan(function (acc, n) { return acc + n; })
            .map(function (count) {
                if (count === timeout) {
                    _this.timeout$.next(true);
                }
                return count;
            });
    }
    setupPing(ping) {
        var _this = this;
        this.ping$ = Observable.interval(ping * 1000).filter(function () { return !_this.isTimeout; });
    }
    stopWatching() {
        this.stopTimer();
        if (this.idleSubscription) {
            this.idleSubscription.unsubscribe();
        }
    }
    stopTimer() {
        this.timerStart$.next(false);
    }
    resetTimer() {
        this.stopTimer();
        this.isTimeout = false;
    }
    onTimerStart() {

        var _this = this;
        return this.timerStart$
            .distinctUntilChanged()
            .switchMap(function (start) { return start ? _this.timer$ : Observable.of(null); });
        
    }
    onTimeout() {
        var _this = this;
        return this.timeout$
            .filter(function (timeout) { return !!timeout; })
            .map(function () {
                _this.isTimeout = true;
                return true;
            });
    }
    getConfigValue() {
        
        return {
            idle: this.idle,
            timeout: this.timeout,
            ping: this.ping
        };
    }


}
