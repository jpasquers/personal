import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  starArrayModel: any[];
  starArrayVisible: any[];
  starArrayHover: any[];
  rating: Number;

  @Output() onRatingUpdate = new EventEmitter<Number>();

  constructor() {
    this.starArrayModel = new Array(5).fill(false);
    this.starArrayVisible = new Array(5).fill(false);
    this.starArrayHover = new Array(5).fill(false);
  }

  ngOnInit() {
  }

  starClick(index) {
    this.starArrayModel = this.starArrayModel.map((val, i) => i <= index);
    this.rating = index + 1;
    this.onRatingUpdate.emit(this.rating);
  }

  starHover(index) {
    this.starArrayHover = this.starArrayHover.map((val, i) => i <= index);
    this.starArrayVisible = this.starArrayHover.slice();
  }

  hoverStarContainer(isHovering) {
    if (isHovering) {
      this.starArrayVisible = this.starArrayHover.slice();
    }
    else {
      this.starArrayVisible = this.starArrayModel.slice();
      this.starArrayHover = new Array(5).fill(false);
    }
  }

}
