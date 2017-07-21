import { Component, OnInit } from '@angular/core';
import { Review } from './review';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  reviews: Review[];
  rating: Number;
  model: any;
  requestSubmitted: Boolean;
  requestSuccess: Boolean;
  
  constructor(private feedbackService: FeedbackService) {
    
  }

  ngOnInit() {
    this.requestSubmitted = false;
    this.requestSuccess = false;

    this.feedbackService.getReviews().subscribe((reviews) => {
      this.reviews = reviews;
    }, (err) => {

    })
  }

  onRatingUpdate(rating: Number) {
    this.rating = rating;
  }

  onSubmit() {
    
    var review: Review = new Review(this.model.name,
                                    this.model.comment,
                                    this.rating);
    this.feedbackService.postReview(review).subscribe((review) => {
      this.requestSubmitted = true;
      this.requestSuccess = true;
      this.reviews.push(review);
    }, (error) => {
      this.requestSubmitted = true;
      this.requestSuccess = false;
    });
  }

  

}
