import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
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
  }, { updateOn: 'submit' });

  onSubmit(): void {
    this.form = new FormGroup(
      this.form.controls,
      { updateOn: 'change' }
    );
  }
}
