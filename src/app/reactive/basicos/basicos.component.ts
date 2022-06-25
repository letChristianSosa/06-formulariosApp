import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 3090'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5),
  // });

  // Usando FormBuilder es una forma mas facil de leer el codigo
  miFormulario: FormGroup = this.fB.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.min(0), Validators.required]],
    existencias: [, [Validators.min(0), Validators.required]],
  });

  constructor(private fB: FormBuilder) {}

  campoValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
