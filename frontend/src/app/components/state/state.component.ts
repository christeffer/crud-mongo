import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { State } from '../../models/state.model';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css'],
})
export class StateComponent implements OnInit {
  @Input() inputModel: number;
  @Output() inputModelChange = new EventEmitter<number>();
  states: State[];
  displayedColumns = ['id', 'code'];
  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.stateService.read().subscribe((states) => {
      this.states = states;
    });
  }
}
