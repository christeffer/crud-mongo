import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { State } from '../../models/state.model';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css'],
})
export class StateComponent implements OnInit {
  @Input() inputModel: string;
  @Output() inputModelChange = new EventEmitter<string>();
  states: State[];  
  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.stateService.read('','', 'stateName', 'asc').subscribe((states) => {    
      this.states = states;
    });
  }
}
