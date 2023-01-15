import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritCardComponent } from './writ-card.component';

describe('WritCardComponent', () => {
  let component: WritCardComponent;
  let fixture: ComponentFixture<WritCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
