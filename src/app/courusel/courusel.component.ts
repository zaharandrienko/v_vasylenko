import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courusel',
  templateUrl: './courusel.component.html',
  styleUrls: ['./courusel.component.css']
})
export class CouruselComponent implements OnInit {

  constructor() { }

  public index = 0;
  public lastIndex = 2;
  ngOnInit() {
  }


  prev(){

    if(this.index === 0){
      this.index = this.lastIndex;//po krugu
    } else {
      this.index--;

    }
  }
  next(){
    if(this.index == this.lastIndex){
      this.index = 0;
    } else {
      this.index++;

    }
  }

}
