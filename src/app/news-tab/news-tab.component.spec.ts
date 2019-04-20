import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTabComponent } from './news-tab.component';

describe('NewsTabComponent', () => {
  let component: NewsTabComponent;
  let fixture: ComponentFixture<NewsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
