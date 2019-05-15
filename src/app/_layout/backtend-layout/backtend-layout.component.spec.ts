import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacktendLayoutComponent } from './backtend-layout.component';

describe('BacktendLayoutComponent', () => {
  let component: BacktendLayoutComponent;
  let fixture: ComponentFixture<BacktendLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacktendLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacktendLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
