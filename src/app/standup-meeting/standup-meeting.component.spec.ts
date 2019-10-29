import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandupMeetingComponent } from './standup-meeting.component';

describe('StandupMeetingComponent', () => {
  let component: StandupMeetingComponent;
  let fixture: ComponentFixture<StandupMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandupMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandupMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
