import { City } from './../../../models/city.model';
import { State } from './../../../models/state.model';
import { CityService } from './../../../services/city.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.css'],
})
export class CityCreateComponent implements OnInit {
  stateSelected: String;
  city: City = {
    cityName: '',
    state: {stateName:'', abbreviation: ''},
  };

  constructor(private cityService: CityService, private router: Router) {}

  ngOnInit(): void {}

  createCity(): void {
    this.cityService.create(this.city).subscribe(() => {
      this.cityService.showMessage('Cidade criado!');
      this.router.navigate(['/city']);
    });
  }

  cancel(): void {
    this.router.navigate(['/city']);
  }
}
