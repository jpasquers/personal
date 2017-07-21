import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

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

  @Input()
  fixed: boolean;
  
  @Input()
  initial: Number;

  @Output() onRatingUpdate = new EventEmitter<Number>();

  constructor() {
    this.starArrayModel = new Array(5).fill(false);
    this.starArrayVisible = new Array(5).fill(false);
    this.starArrayHover = new Array(5).fill(false);
  }

  ngOnInit() {
    if (this.fixed) {
      /*rating will be passed in as 1-5*/
      for (var i=0; i<this.initial; i++) {
        this.starArrayModel[i] = true;
      }
      this.starArrayVisible = this.starArrayModel.slice();
    }
  }

  starClick(index) {
    if (!this.fixed) {
      this.starArrayModel = this.starArrayModel.map((val, i) => i <= index);
      this.rating = index + 1;
      this.onRatingUpdate.emit(this.rating);
    }
  }

  starHover(index) {
    if (!this.fixed) {
      this.starArrayHover = this.starArrayHover.map((val, i) => i <= index);
      this.starArrayVisible = this.starArrayHover.slice();
    }
  }

  hoverStarContainer(isHovering) {
    if (!this.fixed) {
      if (isHovering) {
        this.starArrayVisible = this.starArrayHover.slice();
      }
      else {
        this.starArrayVisible = this.starArrayModel.slice();
        this.starArrayHover = new Array(5).fill(false);
      }
    }
  }

}
