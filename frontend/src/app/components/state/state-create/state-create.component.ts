import { State } from '../../../models/state.model';
import { StateService } from '../../../services/state.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-state-create',
  templateUrl: './state-create.component.html',
  styleUrls: ['./state-create.component.css'],
})
export class StateCreateComponent implements OnInit {
  stateSelected: String;
  state: State = {
    stateName: '',
    abbreviation: '',
  };

  constructor(private stateService: StateService, private router: Router) {}

  ngOnInit(): void {}

  createState(): void {
    this.stateService.create(this.state).subscribe(() => {
      this.stateService.showMessage('Estado cadastrado!');
      this.router.navigate(['/state']);
    });
  }

  cancel(): void {
    this.router.navigate(['/state']);
  }
}
