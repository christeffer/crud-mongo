import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';

import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {  
  state: String;
  name: String;
  
  constructor(
    private snackBar: MatSnackBar,
    private headerService: HeaderService    
  ) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: '',
    };
  }

  ngOnInit(): void {
    
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }  

  errorHandler(e: any): Observable<any> {
    this.showMessage(e, true);
    return EMPTY;
  }
}
