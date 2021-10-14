import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  date = 'Date';
  title = 'reactive-forms';
  hobbiesData = ['Collecting Coins', 'WAtering Plants'];
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', [Validators.required, this.urlValidator]),
    hobbies: new FormArray([]),
  });

  urlValidator(control: AbstractControl) {
    if (!control.value.startsWith('https') || !control.value.includes('.me')) {
      return { urlValid: true };
    }
    return null;
  }
  get bodyUrl() {
    return this.form.get('body');
  }

  get hobbies(): FormArray {
    return this.form.get('hobbies') as FormArray;
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.form.get('hobbies')).push(control);
  }
  get f() {
    return this.form.controls;
  }

  submit() {
    console.log('form value', this.form.value);
  }
}
