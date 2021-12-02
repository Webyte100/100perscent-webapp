/**This class describes  functions of rating component with  fetching rating with numbers
* @author S.Swetha, Shruti Sunil Mayekar 
* @version 12.0.2
**/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  stars: number[] = [1, 2, 3, 4, 5];
  @Input() rating: number;
  constructor() { }
  ngOnInit() {
  }
  fetchRating(star: number) {
    this.rating = star;
    //this.service.ratingUpdate();
  }

  starFill(star: number){
    return (this.starFull(star)||(this.starHalf(star)));
  }

  starFull(star: number){
    return ((star<=this.rating));
  }

  starHalf(star: number){
    return (star<(this.rating+1))&&(star>(this.rating))&&(this.rating%1!=0);
  }
}
