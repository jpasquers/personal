import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { Review } from './review';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class FeedbackService {

    constructor(private http:Http) {

    }

    postReview(review: Review): Observable<any> {
        return this.http.post("/review", review)
            .map((res:Response) => res.json());
    }

    getReviews(): Observable<any> {
        return this.http.get("/reviews")
            .map((res:Response) => res.json());
    }
}