import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-festival', 
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.css']
})
export class FestivalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public cars = [{name : "test1"}, {name : "test2"}, {name : "test3"} , {name : "test4"},{name : "test5"} ];
  
  public totalCount = 3;
  public index = 0;
  prev(){
    if(this.index === this.totalCount){
      
    }
  }
  

}
