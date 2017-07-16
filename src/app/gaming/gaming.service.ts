import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { DotaGame } from './dota-game';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class GamingService {

    constructor(private http:Http) {

    }

    getDotaHistory(): Observable<any> {
        return this.http.get("/gameHistory/Dota")
            .map((res:Response) => res.json());
    }
}