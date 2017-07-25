import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class AlbumsService {

    constructor(private http:Http) {

    }

    getSavedAlbums(): Observable<any> {
        return this.http.get("/savedAlbums")
            .map((res:Response) => res.json());
    }
}