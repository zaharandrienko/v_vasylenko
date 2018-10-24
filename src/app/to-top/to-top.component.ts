import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-to-top',
  templateUrl: './to-top.component.html',
  styleUrls: ['./to-top.component.css']
})
export class ToTopComponent {

  constructor(@Inject(DOCUMENT) private document: any) { }

  title: HTMLDocument;
  show: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {

    if (this.document.documentElement.scrollTop > 300) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  toTop(){
    window.scroll(0,0);
  }




  }