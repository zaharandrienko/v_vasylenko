import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalPhotosComponent } from './festival-photos.component';

describe('FestivalPhotosComponent', () => {
  let component: FestivalPhotosComponent;
  let fixture: ComponentFixture<FestivalPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivalPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivalPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
