import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any) { }

  show: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {

    if (this.document.documentElement.scrollTop > 140) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  ngOnInit() {
  }

}
