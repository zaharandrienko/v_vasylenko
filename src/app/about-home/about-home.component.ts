import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.css']
})
export class AboutHomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any) { }

  title: HTMLDocument;
  show: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {

    if (this.document.documentElement.scrollTop > 400) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  ngOnInit() {
  }

}
