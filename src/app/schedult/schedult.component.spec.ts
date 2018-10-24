import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedultComponent } from './schedult.component';

describe('SchedultComponent', () => {
  let component: SchedultComponent;
  let fixture: ComponentFixture<SchedultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
