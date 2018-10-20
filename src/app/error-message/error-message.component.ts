import { Component,  Input, Inject, Optional } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

import { FormSubmissionDirective, FORMSUBMISSION } from '../form-submission.directive';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent {
  @Input() formElement: AbstractControl = new FormControl();

  constructor(@Optional() @Inject(FORMSUBMISSION) private formSubmission: FormSubmissionDirective | null) {}

  show(): boolean {
    return this.formSubmission && this.formSubmission.submitted && this.formElement.invalid;
  }
}
