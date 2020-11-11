import { Router, ActivatedRoute } from '@angular/router';
import { State } from '../../../models/state.model';
import { StateService } from '../../../services/state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-delete',
  templateUrl: './state-delete.component.html',
  styleUrls: ['./state-delete.component.css'],
})
export class StateDeleteComponent implements OnInit {
  state: State;

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

  deleteState(): void {
    this.stateService.delete(this.state._id).subscribe(() => {
      this.stateService.showMessage('Estado excluido com sucesso!');
      this.router.navigate(['/state']);
    });    
  }

  cancel(): void {
    this.router.navigate(['/city']);
  }
}
