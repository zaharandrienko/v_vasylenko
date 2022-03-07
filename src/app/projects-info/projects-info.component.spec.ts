import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsInfoComponent } from './projects-info.component';

describe('ProjectsInfoComponent', () => {
  let component: ProjectsInfoComponent;
  let fixture: ComponentFixture<ProjectsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
