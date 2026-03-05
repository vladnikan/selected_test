import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Header } from "../../components/header/header";
import { SelectionService } from '../../../selection.service';  

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './checkbox.html',
})
export class Checkbox {
  constructor(public selection: SelectionService) {}

  toggle(value: number, checked: boolean) {
    if (checked) {
      this.selection.add(value);
    } else {
      this.selection.remove(value);
    }
  }
}