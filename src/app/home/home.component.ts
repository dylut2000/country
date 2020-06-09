import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  countries: any;
  selectedCountry: any;
  name: string;
  borders = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    // check if countries exists in storage
    if (!localStorage.getItem("countries")) {
      // get countries from country service
      this.apiService.getCountries().subscribe(countries => {
        // store server data into countries
        this.countries = countries;
        // store stringyfied data into local storage
        localStorage.setItem("countries", JSON.stringify(this.countries));
      });
      return;
    }

    // parse data from storage then store it to countries
    this.countries = JSON.parse(localStorage.getItem("countries"));
  }

  onSelectedCountry(country) {
    //console.log(country);
    this.selectedCountry = country;
    this.name = country.name;

    country.borders.forEach(alpha3Code => {
      this.borders.push(this.getBorderName(alpha3Code));
    });

    //console.log(this.borders);
  }

  getBorderName(alpha3Code) {
    return this.countries.filter(
      country => country.alpha3Code == alpha3Code
    )[0];
  }

  search(): void {
    let nameArray = this.name.split(" ");
    let name = "";

    for (let i = 0; i < nameArray.length; i++) {
      name += this.format_string(nameArray[i]) + " ";
    }

    this.name = name.trim();

    this.selectedCountry = this.countries.filter(
      country => country.name === this.name
    )[0];
  }

  format_string(str: string): string {
    let name = str.toLowerCase();
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}
