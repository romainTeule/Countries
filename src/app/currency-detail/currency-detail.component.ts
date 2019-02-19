import { Component, OnInit, Input } from '@angular/core';
import { Currency } from '../Models/currency';

@Component({
  selector: 'app-currency-detail',
  templateUrl: './currency-detail.component.html',
  styleUrls: ['./currency-detail.component.css']
})
export class CurrencyDetailComponent implements OnInit {

  @Input() Currency : Currency;
  constructor() { }

  ngOnInit() {
  }

}
