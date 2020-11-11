import { State } from '../../../models/state.model';
import { StateService } from '../../../services/state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-read',
  templateUrl: './state-read.component.html',
  styleUrls: ['./state-read.component.css'],
})
export class StateReadComponent implements OnInit {
  states: State[];
  displayedColumns = ['_id', 'stateName', 'abbreviation', 'action'];

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.stateService.read().subscribe((states) => {
      this.states = states;
    });
    
  }
}
