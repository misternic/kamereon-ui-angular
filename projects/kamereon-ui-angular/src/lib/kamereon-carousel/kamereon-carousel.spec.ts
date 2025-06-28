import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamereonCarousel } from './kamereon-carousel';

describe('KamereonCarousel', () => {
  let component: KamereonCarousel;
  let fixture: ComponentFixture<KamereonCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KamereonCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KamereonCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
