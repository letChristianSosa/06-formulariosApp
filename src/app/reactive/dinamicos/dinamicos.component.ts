import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
})
export class DinamicosComponent {
  miFormulario: FormGroup = this.fB.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fB.array(
      [
        ['Dark Souls 3', Validators.required],
        ['Elden Ring', Validators.required],
      ],
      Validators.required
    ),
  });

  nuevoFavorito: FormControl = this.fB.control('', Validators.required);

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fB: FormBuilder) {}

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return;
    }
    this.favoritosArr.push(
      this.fB.control(this.nuevoFavorito.value, Validators.required)
    );
    this.nuevoFavorito.reset();
  }

  borrar(index: number) {
    this.favoritosArr.removeAt(index);
  }

  validarCampo(campo: string) {
    return (
      this.miFormulario.controls[campo].touched &&
      this.miFormulario.controls[campo].errors
    );
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }
}
