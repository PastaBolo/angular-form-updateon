import { Component, Inject, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { FormSubmissionDirective, FORMSUBMISSION } from '../form-submission.directive';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent {
  @Input() formElement: AbstractControl;

  constructor(@Inject(FORMSUBMISSION) private formSubmission: FormSubmissionDirective) {}

  show(): boolean {
    return this.formSubmission.submitted && this.formElement.invalid;
  }
}
