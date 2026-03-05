import { Component, inject } from '@angular/core';   // ← добавь inject
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { SelectionService } from '../selection.service';
import { signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  protected readonly title = signal('selected_test');

  // ← вот это главное
  protected readonly selectionService = inject(SelectionService);
}