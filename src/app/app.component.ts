import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = new FormGroup({
    name: new FormControl(null, Validators.required),
    address: new FormGroup({
      zipCode: new FormControl(null, Validators.required),
      city: new FormControl()
    })
  }/*, { updateOn: 'submit' }*/);

  /**
   * This method is usefull in case the updateOn option of the
   * FormGroup has to be changed
   * 
   * In our case, this is useless because the validation is displayed depending
   * on the submitted property of the form-submission directive injected
   */
  // onSubmit(): void {
  //   this.form = new FormGroup(
  //     this.form.controls,
  //     { updateOn: 'change' }
  //   );
  // }
}
