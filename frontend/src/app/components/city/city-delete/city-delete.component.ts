import { Router, ActivatedRoute } from '@angular/router';
import { City } from './../../../models/city.model';
import { CityService } from './../../../services/city.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-delete',
  templateUrl: './city-delete.component.html',
  styleUrls: ['./city-delete.component.css'],
})
export class CityDeleteComponent implements OnInit {
  city: City;

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

  deleteCity(): void {
    this.cityService.delete(this.city._id).subscribe(() => {
      this.cityService.showMessage('Cidade excluida com sucesso!');
      this.router.navigate(['/city']);
    });    
  }

  cancel(): void {
    this.router.navigate(['/city']);
  }
}
