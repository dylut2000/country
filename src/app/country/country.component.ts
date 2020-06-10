import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  @Input('selectedCountry') selectedCountry: any;
  @Input('borders') borders: any;
  @Output() onSelectBorderCountry = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }


  selectBorderCountry(country) {
    this.onSelectBorderCountry.emit(country);
  }

}
