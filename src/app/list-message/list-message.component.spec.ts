import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMessageComponent } from './list-message.component';

describe('ListMessageComponent', () => {
  let component: ListMessageComponent;
  let fixture: ComponentFixture<ListMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
