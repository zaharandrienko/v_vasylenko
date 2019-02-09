import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any) { }

  title: HTMLDocument;
  show: boolean = false;
  go :boolean = false 

  @HostListener("window:scroll", [])
  onWindowScroll() {

    
    this.show = this.document.documentElement.scrollTop > 400; 

    // if (this.document.documentElement.scrollTop > 400) {
    //   this.show = true;
    // } else {
    //   this.show = false;
    // }
  }

  ngOnInit() {
  }
  Go() {
    this.go = !this.go ;

  }

}
