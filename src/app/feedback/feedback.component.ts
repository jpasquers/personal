import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  rating: Number;
  
  constructor() { }

  ngOnInit() {
  }

  onRatingUpdate(rating: Number) {
    this.rating = rating;
    console.log(this.rating);
  }

  

}
