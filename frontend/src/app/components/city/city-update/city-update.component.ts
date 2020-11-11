import { City } from './../../../models/city.model';
import { CityService } from './../../../services/city.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-update',
  templateUrl: './city-update.component.html',
  styleUrls: ['./city-update.component.css'],
})
export class CityUpdateComponent implements OnInit {
  stateSelected: String;
  city: City = {
    cityName: '',
    state: {stateName:'', abbreviation: ''},
  };

  constructor(
    private cityService: CityService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const _id = this.route.snapshot.paramMap.get('id');
    this.cityService.readById(_id).subscribe((city) => {
      this.city = city;
    });
  }

  updateCity(): void {
    this.cityService.update(this.city).subscribe(() => {
      this.cityService.showMessage('Cidade atualizada com sucesso!');
      this.router.navigate(['/city']);
    });
  }

  cancel(): void {
    this.router.navigate(['F']);
  }
}
