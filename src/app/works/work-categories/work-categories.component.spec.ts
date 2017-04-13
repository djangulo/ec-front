import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCategoriesComponent } from './work-categories.component';

describe('WorkCategoriesComponent', () => {
  let component: WorkCategoriesComponent;
  let fixture: ComponentFixture<WorkCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
