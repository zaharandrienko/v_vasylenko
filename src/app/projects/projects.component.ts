import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  showProjects(){
    this.router.navigate(['ProjectsInfo'], {relativeTo: this.route});
  }

  showFestival(){
    this.router.navigate(['Festival'], {relativeTo: this.route});
  }
}
