import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session2TaskComponent } from './session2-task.component';

describe('Session2TaskComponent', () => {
  let component: Session2TaskComponent;
  let fixture: ComponentFixture<Session2TaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Session2TaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Session2TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
