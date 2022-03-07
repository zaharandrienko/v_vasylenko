import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-award',
  templateUrl: './new-award.component.html',
  styleUrls: ['./new-award.component.css']
})
export class NewAwardComponent implements OnInit {

  @Input("name") title : string ;

  @Input("imgSrc") imgSrc : string;

  @Input("post") Post : string;


  constructor() { }

  

  ngOnInit() {
  }

}
