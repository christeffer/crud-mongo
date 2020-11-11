import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { StateSelectComponent } from './components/state/select/state.component';
import { CityComponent } from './views/city/city.component';
import { CityCreateComponent } from './components/city/city-create/city-create.component';
import { CityReadComponent } from './components/city/city-read/city-read.component';
import { CityUpdateComponent } from './components/city/city-update/city-update.component';
import { CityDeleteComponent } from './components/city/city-delete/city-delete.component';
import { StateComponent } from './views/state/state.component';
import { StateCreateComponent } from './components/state/state-create/state-create.component';
import { StateReadComponent } from './components/state/state-read/state-read.component';
import { StateUpdateComponent } from './components/state/state-update/state-update.component';
import { StateDeleteComponent } from './components/state/state-delete/state-delete.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    StateSelectComponent, 
    CityComponent,   
    CityCreateComponent,
    CityReadComponent,
    CityUpdateComponent,
    CityDeleteComponent,
    StateComponent,
    StateCreateComponent,
    StateReadComponent,
    StateUpdateComponent,
    StateDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
