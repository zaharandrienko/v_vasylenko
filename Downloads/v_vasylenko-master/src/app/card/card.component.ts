import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input("title") title : string ;
  
  @Input("imgSrc") imgSrc : string;

  @Input("date") date : string;

  rota:boolean = false ;

  constructor() { }


  move(){
    this.rota = !this.rota
  }
  ngOnInit() {
  }

}
