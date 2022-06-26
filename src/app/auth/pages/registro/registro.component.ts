import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validators/validator.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group(
    {
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this.vs.nombreApellidoPattern),
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(this.vs.emailPattern)],
        [this.emailValidatorService],
      ],
      username: ['', [Validators.required, this.vs.noPuedeSerManco]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [this.vs.camposIguales('password', 'password2')],
    }
  );

  get EmailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    if (errors?.['required']) {
      return 'El correo es obligatorio';
    } else if (errors?.['pattern']) {
      return 'El correo es invalido';
    } else if (errors?.['emailTomado']) {
      return 'El correo ya esta en uso';
    } else {
      return '';
    }
  }

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorService,
    private emailValidatorService: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Christian Sosa',
      email: 'chrissm28@outlook.com',
      username: 'letChristianSosa',
    });
  }

  campoNoValido(campo: string) {
    return (
      this.miFormulario.controls[campo].touched &&
      this.miFormulario.controls[campo].errors
    );
  }

  submitFormulario() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }
}
