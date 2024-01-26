import { Routes } from '@angular/router';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';

export const routes: Routes = [
    { path: '', component: CurrencyConverterComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];
