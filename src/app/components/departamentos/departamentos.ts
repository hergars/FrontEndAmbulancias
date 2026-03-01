import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MunicipiosComponent } from '../municipios/municipios';
import { Cabecera } from "../cabecera/cabecera";
import { Navegacion } from "../navegacion/navegacion";
import { Pie } from "../pie/pie";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-departamentos',
  imports: [CommonModule, MunicipiosComponent, Cabecera, Navegacion, Pie, FormsModule],
  templateUrl: './departamentos.html',
  styleUrls: ['./departamentos.css']
})
export class DepartamentosComponent {
  departamentoIdSeleccionado: number | null = null;

  departamentos = [
    { id: 5, nombre: 'Antioquia' },
    { id: 8, nombre: 'Atlántico' },
    { id: 11, nombre: 'Bogotá, D.C.' },
    { id: 15, nombre: 'Boyacá' },
    { id: 23, nombre: 'Córdoba' },
    { id: 25, nombre: 'Cundinamarca' },
    { id: 76, nombre: 'Valle del Cauca' }
  ];

  municipioSeleccionadoId: number | null = null;

  recibirMunicipio(id: number) {
    this.municipioSeleccionadoId = id;
    console.log("Municipio recibido en el padre:", id);
  }
}