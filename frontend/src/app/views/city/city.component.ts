import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Cidades',
      icon: 'storefront',
      routeUrl: '/city',
    };
  }

  ngOnInit(): void {}

  goToCityCreate(): void {
    this.router.navigate(['city/create']);
  }
}
