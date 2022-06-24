import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent implements OnInit {
  @ViewChild('MiFormulario') MiFormulario!: NgForm;

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
    console.log(this.MiFormulario);
  }
}
