import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDoneComponent } from './task-done.component';

describe('TaskDoneComponent', () => {
  let component: TaskDoneComponent;
  let fixture: ComponentFixture<TaskDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
