import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent implements OnInit {
  @ViewChild('MiFormulario') MiFormulario!: NgForm;

  initForm = {
    producto: '',
    precio: 0,
    existencias: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  nombreValido(): boolean {
    return (
      this.MiFormulario?.controls['producto']?.invalid &&
      this.MiFormulario?.controls['producto']?.touched
    );
  }

  precioValido(): boolean {
    return (
      this.MiFormulario?.controls['precio']?.touched &&
      this.MiFormulario?.controls['precio']?.value < 0
    );
  }

  existenciasValidas(): boolean {
    return (
      this.MiFormulario?.controls['existencias']?.touched &&
      this.MiFormulario?.controls['existencias']?.value < 0
    );
  }

  // guardar(MiFormulario: NgForm) {
  guardar() {
    this.MiFormulario.resetForm({
      producto: 'Algo',
      precio: -1,
      existencias: -1,
    });
    console.log('Posteo correcto');
  }
}
