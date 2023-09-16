import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input('rating') rating: number = 5;
  @Output() nuovoRating = new EventEmitter();

  massimoRating: number = 10;
  ratingArray: number[] = [];

  constructor() {}

  ngOnInit() {
    for (let index = 0; index < this.massimoRating; index++) {
      this.ratingArray.push(index);
    }
  }

  calcolaRating(rating: number) {
    this.nuovoRating.emit(rating);
  }

  statoIcona(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
