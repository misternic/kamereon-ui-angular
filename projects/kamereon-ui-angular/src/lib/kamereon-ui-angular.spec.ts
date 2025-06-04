import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamereonUiAngular } from './kamereon-ui-angular';

describe('KamereonUiAngular', () => {
  let component: KamereonUiAngular;
  let fixture: ComponentFixture<KamereonUiAngular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KamereonUiAngular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KamereonUiAngular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
