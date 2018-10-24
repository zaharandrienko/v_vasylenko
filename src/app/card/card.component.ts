import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input("title") title : string ;

  @Input("date") date : string;

  @Input("bui") bui : string;

  @Input("address") address : string;


  constructor() { }

  ngOnInit() {
  }

}
