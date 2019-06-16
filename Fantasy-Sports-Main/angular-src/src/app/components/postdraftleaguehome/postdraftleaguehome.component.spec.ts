import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdraftleaguehomeComponent } from './postdraftleaguehome.component';

describe('PostdraftleaguehomeComponent', () => {
  let component: PostdraftleaguehomeComponent;
  let fixture: ComponentFixture<PostdraftleaguehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostdraftleaguehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostdraftleaguehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
