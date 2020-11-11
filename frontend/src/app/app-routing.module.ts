import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CityComponent } from './views/city/city.component';
import { CityCreateComponent } from './components/city/city-create/city-create.component';
import { CityDeleteComponent } from './components/city/city-delete/city-delete.component';
import { CityUpdateComponent } from './components/city/city-update/city-update.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'city',
    component: CityComponent,
  },
  {
    path: 'city/create',
    component: CityCreateComponent,
  },
  {
    path: 'city/update/:id',
    component: CityUpdateComponent,
  },
  {
    path: 'city/delete/:id',
    component: CityDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
