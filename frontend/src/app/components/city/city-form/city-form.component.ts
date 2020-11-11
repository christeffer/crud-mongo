import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityService } from '../../../services/city.service';
import { City } from '../../../models/city.model';
import { State } from '../../../models/state.model';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css'],
})
export class CityFormComponent implements OnInit {
  city: City = {
    cityName: '',
    state: {stateName:'', abbreviation: ''},
  };

  constructor(private cityService: CityService, private router: Router) {}

  ngOnInit(): void {}

  createCity(): void {
    this.cityService.create(this.city).subscribe(() => {
      this.cityService.showMessage('Cidade criada');
      this.router.navigate(['/city']);
    });
  }

  cancel(): void {
    this.router.navigate(['/city']);
  }
}
