import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressDetailComponent } from './press-detail.component';

describe('PressDetailComponent', () => {
  let component: PressDetailComponent;
  let fixture: ComponentFixture<PressDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
