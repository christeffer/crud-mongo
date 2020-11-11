import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root',
})
export class CityService {  

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  read(cityName: string = '', sortBy: string = '', order: string = ''): Observable<City[]> {
    let params = new HttpParams().set('cityName', cityName).set('sortBy', sortBy).set('order', order);
    return this.http.get<City[]>(`${environment.apiUrl}/city`, { headers: {'x-api-key' : '123'} }).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<City> {    
    return this.http.get<City>(`${environment.apiUrl}/city/${id}`, { headers: {'x-api-key' : '123'} }).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  create(city: City): Observable<City> {
    return this.http.post<City>(`${environment.apiUrl}/city`, city, { headers: {'x-api-key' : '123'} }).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(city: City): Observable<City> {    
    return this.http.put<City>(`${environment.apiUrl}/city/${city._id}`, city, { headers: {'x-api-key' : '123'} }).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<City> {    
    return this.http.delete<City>(`${environment.apiUrl}/city/${id}`, { headers: {'x-api-key' : '123'} }).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
