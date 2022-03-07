import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouruselComponent } from './courusel.component';

describe('CouruselComponent', () => {
  let component: CouruselComponent;
  let fixture: ComponentFixture<CouruselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouruselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
