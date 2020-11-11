import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { State } from '../models/state.model';

@Injectable({
  providedIn: 'root',
})
export class StateService {  

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  read(stateName: string = '', abbreviation: string = '', sortBy: string = '', order: string = ''): Observable<State[]> {
    let params = new HttpParams().set('stateName', stateName).set('abbreviation', abbreviation).set('sortBy', sortBy).set('order', order);
    // todo parametros de filtros e ordenação
    return this.http.get<State[]>(`${environment.apiUrl}/state`, { headers: {'x-api-key' : '123'} }).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }  

  readById(id: string): Observable<State> {    
    return this.http.get<State>(`${environment.apiUrl}/state/${id}`, { headers: {'x-api-key' : '123'} }).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  create(state: State): Observable<State> {
    return this.http.post<State>(`${environment.apiUrl}/state`, state, { headers: {'x-api-key' : '123'} }).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(state: State): Observable<State> {    
    return this.http.put<State>(`${environment.apiUrl}/state/${state._id}`, state, { headers: {'x-api-key' : '123'} }).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<State> {    
    return this.http.delete<State>(`${environment.apiUrl}/state/${id}`, { headers: {'x-api-key' : '123'} }).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
