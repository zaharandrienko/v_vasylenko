import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  showPortraits(){
    this.router.navigate(['Portraits'], {relativeTo: this.route});
  }
  showStage(){
    this.router.navigate(['Stage'], {relativeTo: this.route});
  }
  showBackstage(){
    this.router.navigate(['Backstage'], {relativeTo: this.route});
  }
  showOpera(){
    this.router.navigate(['Opera'], {relativeTo: this.route});
  }
  showPersonal(){
    this.router.navigate(['Personal'], {relativeTo: this.route});
  }

}
