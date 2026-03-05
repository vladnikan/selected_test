import { Routes } from '@angular/router';
import { Checkbox } from './pages/checkbox/checkbox';
import { Welcome } from './pages/welcome/welcome';

export const routes: Routes = [
    { path: 'checkbox', component: Checkbox },
    { path: '', component: Welcome}
];
