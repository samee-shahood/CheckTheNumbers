import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateleagueComponent } from './createleague.component';

describe('CreateleagueComponent', () => {
  let component: CreateleagueComponent;
  let fixture: ComponentFixture<CreateleagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateleagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateleagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
