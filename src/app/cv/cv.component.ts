import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {

  go :boolean = false 

  constructor() { }

  Go() {
    this.go = !this.go ;

    setTimeout(() => {
      this.go = !this.go
    }, 1500);

  }

  

  ngOnInit() {
  }

}