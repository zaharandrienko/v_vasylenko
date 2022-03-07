import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courusel-item',
  templateUrl: './courusel-item.component.html',
  styleUrls: ['./courusel-item.component.css']
})
export class CouruselItemComponent implements OnInit {

  constructor() { }

  @Input()
  hide  = true;

  ngOnInit() {
  }

}
