import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {


  @Input("name") title : string ;

  @Input("post") Post : string;


  constructor() { }

  ngOnInit() {
  }

}
