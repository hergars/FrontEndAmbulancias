import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Cabecera } from '../cabecera/cabecera';
import { Pie } from '../pie/pie';


@Component({
  selector: 'app-navegacion',
  imports: [CommonModule, RouterLink ],
  templateUrl: './navegacion.html',
  styleUrl: './navegacion.css',
})
export class Navegacion {
  activeItem = signal('bases');
  menuAbierto = signal(false);

  setActive(item: string) {
    this.activeItem.set(item);
    this.menuAbierto.set(false); // Cerrar menú al seleccionar
  }

  toggleMenu() {
    this.menuAbierto.set(!this.menuAbierto());
  }
}
