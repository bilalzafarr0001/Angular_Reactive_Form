import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-text-input',
  templateUrl: './dynamic-text-input.component.html',
  styleUrls: ['./dynamic-text-input.component.css'],
})
export class DynamicTextInputComponent {
  types: any = {};
  inputType: string = '';
  form = new FormGroup({
    inputs: new FormArray([]),
  });

  get inputs(): FormArray {
    return this.form.get('inputs') as FormArray;
  }

  onAddInput(input: HTMLInputElement) {
    //const control = new FormControl(null, [Validators.required, inputType]);
    //(<FormArray>this.form.get('inputs')).push(control);

    const control = new FormControl();
    let controlsArray = this.form.get('inputs') as FormArray;
    const length = controlsArray.length;
    this.inputType = input.value; // setting input control type to that user entered
    // get the array index mark it as key and its value will be input_value
    console.log('array length is:\t', length);
    this.types[length] = input.value;
    controlsArray.push(control);
  }
  get f() {
    return this.form.controls;
  }

  submit() {
    console.log('form value', this.form.value);
  }
}
