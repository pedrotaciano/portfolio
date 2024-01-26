import { Component, Input } from '@angular/core';
import { Currency } from '../../../models/currency';

@Component({
  selector: 'app-currency-card',
  standalone: true,
  imports: [],
  templateUrl: './currency-card.component.html',
  styleUrl: './currency-card.component.scss'
})
export class CurrencyCardComponent {
  @Input() currency: Currency = {} as Currency;
}
