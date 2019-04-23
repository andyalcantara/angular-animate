import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestDirectivesService {

  fire = false;

  constructor() { }

  setPropertyToTrue() {
    this.fire = true;
  }
}
