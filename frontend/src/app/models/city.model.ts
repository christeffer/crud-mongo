import {State} from './state.model';
export interface City {
  _id?: string;
  name: string;
  minutes: Number;
  state: State;
}
