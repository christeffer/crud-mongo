import { State } from '../../../models/state.model';
import { StateService } from '../../../services/state.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-update',
  templateUrl: './state-update.component.html',
  styleUrls: ['./state-update.component.css'],
})
export class StateUpdateComponent implements OnInit {
  stateSelected: String;
  state: State = {    
    stateName:'', abbreviation: '',
  };

  constructor(
    private stateService: StateService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const _id = this.route.snapshot.paramMap.get('id');
    this.stateService.readById(_id).subscribe((state) => {
      this.state = state;
    });
  }

  updateState(): void {
    this.stateService.update(this.state).subscribe(() => {
      this.stateService.showMessage('Estado atualizado com sucesso!');
      this.router.navigate(['/state']);
    });
  }

  cancel(): void {
    this.router.navigate(['F']);
  }
}
