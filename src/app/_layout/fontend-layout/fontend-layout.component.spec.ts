import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontendLayoutComponent } from './fontend-layout.component';

describe('FontendLayoutComponent', () => {
  let component: FontendLayoutComponent;
  let fixture: ComponentFixture<FontendLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontendLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontendLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
