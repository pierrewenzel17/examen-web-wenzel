import { Component, EventEmitter, Input, Output } from '@angular/core';
import Musique from 'src/app/models/musique';
import * as moment from 'moment';

@Component({
  selector: 'carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent {

  @Input() musique: Musique | undefined

  @Output('musiqueDelete') delete$: EventEmitter<any> = new EventEmitter();

  @Output('musiqueUpdate') update$: EventEmitter<any> = new EventEmitter();

  moment = moment

  constructor() {
    // vide
  }

  delete() {
    this.delete$.emit(this.musique);
  }

  update() {
    this.update$.emit(this.musique);
  }

}
