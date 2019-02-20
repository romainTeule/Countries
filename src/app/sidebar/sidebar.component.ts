import { Component, OnInit } from '@angular/core';

import { Constants } from '../Models/constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get CurrencyField(): string { return Constants.CURRENCY[0] ; }
  get RegionField(): string { return Constants.REGION[0] ; }
  get LanguageField(): string { return Constants.LANGUAGE[0] ; }
}
