import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxHomeComponent } from './inbox-home.component';

describe('InboxHomeComponent', () => {
  let component: InboxHomeComponent;
  let fixture: ComponentFixture<InboxHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
