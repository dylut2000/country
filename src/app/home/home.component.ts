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
      this.apiService.getCountries().subscribe(data => {
        // store server data into countries
        this.countries = data;
        // store stringyfied data into local storage
        localStorage.setItem("countries", JSON.stringify(this.countries));
      });
      return;
    }

    // parse data from storage then store it to countries
    this.countries = JSON.parse(localStorage.getItem("countries"));
  }
}
