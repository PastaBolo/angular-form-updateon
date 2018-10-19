import { Directive, InjectionToken, forwardRef, HostBinding, HostListener } from '@angular/core';

export const FORMSUBMISSION = new InjectionToken<FormSubmissionDirective>('form submission directive');

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'form',
  providers: [{ provide: FORMSUBMISSION, useExisting: forwardRef(() => FormSubmissionDirective) }]
})
export class FormSubmissionDirective {
  @HostBinding('class.submitted') submitted = false;

  @HostListener('ngSubmit') onSubmit() {
    this.submitted = true;
  }
}
