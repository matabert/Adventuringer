import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatStepperIntl } from '@angular/material/stepper';

@Injectable()
export class StepperIntl extends MatStepperIntl {
  /**
   * Override the default 'optional' label text with
   * the user's choice, once it has been made.
   */
  override optionalLabel = 'Optional Label';
}

@Component({
  selector: 'app-creation-stepper',
  templateUrl: './creation-stepper.component.html',
  styleUrls: ['./creation-stepper.component.scss']
})
export class CreationStepperComponent implements OnInit {

  optionalLabels: string[] = ['DEFAULT1', 'DEFAULT2', 'DEFAULT3', 'DEFAULT4', 'DEFAULT5', 'DEFAULT6', 'DEFAULT7',]

  constructor(private _formBuilder: FormBuilder, private _matStepperIntl: MatStepperIntl) {
    this.updateOptionalLabels();
  }

  ngOnInit(): void { }

  updateOptionalLabels() {
    this._matStepperIntl.optionalLabel = this.optionalLabels[0];
    this._matStepperIntl.changes.next();
  }
}
