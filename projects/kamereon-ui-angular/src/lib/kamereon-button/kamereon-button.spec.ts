import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamereonButton } from './kamereon-button';

describe('KamereonButton', () => {
  let component: KamereonButton;
  let fixture: ComponentFixture<KamereonButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KamereonButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KamereonButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
