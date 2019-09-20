import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class sharingService {
    private readonly sharedObjSubject = new Subject<any>();

    constructor() {

    }

    /**
     * setObject
     */
    setObj(obj: any) {
        this.sharedObjSubject.next({ sharedObj: obj });
    }
    /**
       * getObject
       */
    getObj(): Observable<any> {
        return this.sharedObjSubject.asObservable();
    }
}
