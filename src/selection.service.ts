import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  count = signal(0);
  total = signal(0);

  add(value: number) {
    this.count.update(c => c + 1);
    this.total.update(t => t + value);
  }

  remove(value: number) {
    this.count.update(c => Math.max(0, c - 1));
    this.total.update(t => Math.max(0, t - value));
  }

  // опционально — сброс при уходе со страницы, но не обязательно
  reset() {
    this.count.set(0);
    this.total.set(0);
  }
}