import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {

  go1 :boolean = false 
  go2 :boolean = false 
  go3 :boolean = false 
  

  constructor() { }

  Go1() {
    this.go1 = !this.go1 ;

    setTimeout(() => {
      this.go1 = !this.go1
    }, 1500);

  }
  Go2() {
    this.go2 = !this.go2 ;

    setTimeout(() => {
      this.go2 = !this.go2
    }, 1500);

  }
  Go3() {
    this.go3 = !this.go3 ;

    setTimeout(() => {
      this.go3 = !this.go3
    }, 1500);

  }

  

  ngOnInit() {
  }

}
