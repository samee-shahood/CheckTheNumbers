import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguehomeComponent } from './leaguehome.component';

describe('LeaguehomeComponent', () => {
  let component: LeaguehomeComponent;
  let fixture: ComponentFixture<LeaguehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaguehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
