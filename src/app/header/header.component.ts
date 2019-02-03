import { Component,HostListener, Inject  } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor(@Inject(DOCUMENT) private document: any) { }

  title: HTMLDocument;
  show: boolean = false;
  rota : boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {

    if (this.document.documentElement.scrollTop > 140) {
      this.show = true;
    } else {
      this.show = false;
    }
  }



  
  rot(){
    this.rota = !this.rota
  }

  toTop(){
    window.scroll(0,0);
  }





}
