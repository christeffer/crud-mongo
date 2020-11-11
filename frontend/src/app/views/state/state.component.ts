import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css'],
})
export class StateComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Estados',
      icon: 'storefront',
      routeUrl: '/state',
    };
  }

  ngOnInit(): void {}

  goToStateCreate(): void {
    this.router.navigate(['state/create']);
  }
}
