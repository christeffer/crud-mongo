import { City } from './../../../models/city.model';
import { CityService } from './../../../services/city.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-read',
  templateUrl: './city-read.component.html',
  styleUrls: ['./city-read.component.css'],
})
export class CityReadComponent implements OnInit {
  cities: City[];
  displayedColumns = ['_id', 'cityName', 'state', 'action'];

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    this.cityService.read().subscribe((cities) => {
      this.cities = cities;
    });
    
  }
}
