import { Injectable } from '@angular/core';
import { promises } from 'breeze-client';
import IPromise = promises.IPromise;

@Injectable()
export class BusyService {

    private _busyCounter: number = 0;

    get isBusy(): boolean {
        return this._busyCounter > 0;
    }

    busy<T>(op: IPromise<T>): IPromise<T> {
        setTimeout(() => {
            this._busyCounter++;
            op.then(result => {
                this._busyCounter--;
            }).catch((reason: any) => {
                this._busyCounter--;
            });
        }, 300);

        return op;
    }
}