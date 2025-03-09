import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedlistComponent } from './completedlist.component';

describe('CompletedlistComponent', () => {
  let component: CompletedlistComponent;
  let fixture: ComponentFixture<CompletedlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompletedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
