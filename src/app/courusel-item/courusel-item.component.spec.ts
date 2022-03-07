import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouruselItemComponent } from './courusel-item.component';

describe('CouruselItemComponent', () => {
  let component: CouruselItemComponent;
  let fixture: ComponentFixture<CouruselItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouruselItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouruselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
