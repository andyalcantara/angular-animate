import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InFromBottomComponent } from './in-from-bottom.component';

describe('InFromBottomComponent', () => {
  let component: InFromBottomComponent;
  let fixture: ComponentFixture<InFromBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InFromBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InFromBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
