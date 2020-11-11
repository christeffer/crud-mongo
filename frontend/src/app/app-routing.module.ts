import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CityComponent } from './views/city/city.component';
import { CityCreateComponent } from './components/city/city-create/city-create.component';
import { CityDeleteComponent } from './components/city/city-delete/city-delete.component';
import { CityUpdateComponent } from './components/city/city-update/city-update.component';
import { StateComponent } from './views/state/state.component';
import { StateCreateComponent } from './components/state/state-create/state-create.component';
import { StateDeleteComponent } from './components/state/state-delete/state-delete.component';
import { StateUpdateComponent } from './components/state/state-update/state-update.component';


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
  {
    path: 'state',
    component: StateComponent,
  },
  {
    path: 'state/create',
    component: StateCreateComponent,
  },
  {
    path: 'state/update/:id',
    component: StateUpdateComponent,
  },
  {
    path: 'state/delete/:id',
    component: StateDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
