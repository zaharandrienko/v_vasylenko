import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-projects-item',
  templateUrl: './projects-item.component.html',
  styleUrls: ['./projects-item.component.css']
})
export class ProjectsItemComponent implements OnInit {

  @Input("title") title : string ;

  @Input("imgSrc") imgSrc : string;

  @Input("date") date: string;

  constructor() { }

  ngOnInit() {
  }

}
