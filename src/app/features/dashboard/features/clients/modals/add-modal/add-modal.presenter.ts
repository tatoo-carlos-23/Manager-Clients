import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class AddModalPresenter {
  constructor(private readonly formBuilder: FormBuilder) {}

  public form: FormGroup = this.formBuilder.group({
    names: [null, [Validators.required]],
    lastNames: [null, [Validators.required]],
    birthDate: [null, [Validators.required]],
  });

  public get names() {
    return this.form.get('names');
  }

  public get lastNames() {
    return this.form.get('lastNames');
  }

  public get birthDate() {
    return this.form.get('birthDate');
  }
}
