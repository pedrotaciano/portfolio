import { Component } from '@angular/core';
import { CurrencyCardComponent } from '../components/currency-card/currency-card.component';
import { Currency } from '../../models/currency';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [CurrencyCardComponent],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss',
})
export class CurrencyConverterComponent {
  currencyList: Currency[] = [];
}
