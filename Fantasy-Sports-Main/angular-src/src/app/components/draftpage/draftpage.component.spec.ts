import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftpageComponent } from './draftpage.component';

describe('DraftpageComponent', () => {
  let component: DraftpageComponent;
  let fixture: ComponentFixture<DraftpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
