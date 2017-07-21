import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class PlayingService {

    constructor(private http:Http) {

    }

    getCurrentlyPlaying(): Observable<any> {
        return this.http.get("/currentlyPlaying")
            .map((res:Response) => res.json());
    }
}