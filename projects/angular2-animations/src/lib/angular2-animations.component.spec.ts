import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular2AnimationsComponent } from './angular2-animations.component';

describe('Angular2AnimationsComponent', () => {
  let component: Angular2AnimationsComponent;
  let fixture: ComponentFixture<Angular2AnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular2AnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular2AnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
