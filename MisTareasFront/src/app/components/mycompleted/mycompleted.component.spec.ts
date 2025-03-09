import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycompletedComponent } from './mycompleted.component';

describe('MycompletedComponent', () => {
  let component: MycompletedComponent;
  let fixture: ComponentFixture<MycompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MycompletedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MycompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
