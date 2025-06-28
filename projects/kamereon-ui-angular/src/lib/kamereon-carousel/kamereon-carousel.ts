import {
  Component,
  computed,
  ContentChild,
  Input,
  signal,
  TemplateRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'kamereon-carousel',
  imports: [CommonModule],
  templateUrl: './kamereon-carousel.html',
  styleUrl: './kamereon-carousel.scss',
})
export class KamereonCarousel {
  @Input() items: any[] = [];
  currentIndex = signal(0);
  direction = signal<'next' | 'prev'>('next');
  @ContentChild('carouselItem', { static: false })
  itemTemplate?: TemplateRef<any>;

  getPosition = (index: number): string => {
    const len = this.items.length;
    const current = this.currentIndex();

    if (index === current) return 'center';

    return 'hidden';
  };

  readonly isPrevDisabled = computed(
    () =>
      this.items.length === 1 ||
      (this.items.length === 2 && this.currentIndex() === 0)
  );

  readonly isNextDisabled = computed(
    () =>
      this.items.length === 1 ||
      (this.items.length === 2 && this.currentIndex() === 1)
  );

  next() {
    if (!this.isNextDisabled()) {
      this.direction.set('next');
      this.currentIndex.update((v) => (v + 1) % this.items.length);
    }
  }

  prev() {
    if (!this.isPrevDisabled()) {
      this.direction.set('prev');
      this.currentIndex.update(
        (v) => (v - 1 + this.items.length) % this.items.length
      );
    }
  }
}
