import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
})
export class DinamicosComponent {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Christian',
    favoritos: [
      {
        id: 1,
        nombre: 'Dark Souls 3',
      },
      {
        id: 2,
        nombre: 'The Witcher 3',
      },
    ],
  };

  guardar() {
    console.log('Guardando', this.miFormulario.controls['nombre'].value);
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego,
    };
    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoJuego = '';
  }

  eliminar(i: number) {
    // this.persona.favoritos = this.persona.favoritos.filter(
    //   (juego) => juego.id != i + 1
    // );

    this.persona.favoritos.splice(i, 1);
  }
}
