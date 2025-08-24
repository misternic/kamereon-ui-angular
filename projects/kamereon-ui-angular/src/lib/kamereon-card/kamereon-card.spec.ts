import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamereonCard } from './kamereon-card';

describe('KamereonCard', () => {
  let component: KamereonCard;
  let fixture: ComponentFixture<KamereonCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KamereonCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KamereonCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
