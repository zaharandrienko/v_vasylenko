import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  @Input("title") title : string ;

  @Input("imgSrc") imgSrc : string;

  @Input("date") date: string;

  constructor() { }

  ngOnInit() {
  }
}
