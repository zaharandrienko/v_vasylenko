import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.css']
})
export class SoundComponent  {

  rota:boolean = false ;

  constructor() { }


  move(){
    this.rota = !this.rota
  }
  
}
