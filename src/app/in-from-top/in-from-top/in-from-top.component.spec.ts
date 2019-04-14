import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InFromTopComponent } from './in-from-top.component';

describe('InFromTopComponent', () => {
  let component: InFromTopComponent;
  let fixture: ComponentFixture<InFromTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InFromTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InFromTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
