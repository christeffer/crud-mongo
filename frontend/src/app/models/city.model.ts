import { State } from './state.model';
export interface City {
  _id?: string;
  cityName: string;  
  state: State;
}
