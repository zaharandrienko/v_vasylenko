import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  showBio(){
    this.router.navigate(['Bio'], {relativeTo: this.route});
  }
  showCV(){
    this.router.navigate(['CV'], {relativeTo: this.route});
  }
  showAwards(){
    this.router.navigate(['Awards'], {relativeTo: this.route});
  }
  showReviews(){
    this.router.navigate(['Reviews'], {relativeTo: this.route});
  }

}
