import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  @Input('countries') countries: any;
  @Output() onSelectedCountry = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }



  getCountry (country) {
    this.onSelectedCountry.emit(country);
  }

}
