import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../../services/state.service';
import { State } from '../../../models/state.model';

@Component({
  selector: 'app-state-form',
  templateUrl: './state-form.component.html',
  styleUrls: ['./state-form.component.css'],
})
export class StateFormComponent implements OnInit {
  state: State = {
    stateName:'', 
    abbreviation: '',
  };

  constructor(private stateService: StateService, private router: Router) {}

  ngOnInit(): void {}

  createState(): void {
    this.stateService.create(this.state).subscribe(() => {
      this.stateService.showMessage('Estado cadastrado');
      this.router.navigate(['/state']);
    });
  }

  cancel(): void {
    this.router.navigate(['/city']);
  }
}
