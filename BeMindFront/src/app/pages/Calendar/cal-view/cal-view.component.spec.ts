import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalViewComponent } from './cal-view.component';

describe('CalViewComponent', () => {
  let component: CalViewComponent;
  let fixture: ComponentFixture<CalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
