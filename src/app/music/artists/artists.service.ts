import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ArtistsService {

    constructor(private http:Http) {

    }

    getTopArtists(): Observable<any> {
        return this.http.get("/topArtists")
            .map((res:Response) => res.json());
    }
}