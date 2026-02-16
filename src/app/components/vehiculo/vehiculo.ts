import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cabecera } from '../cabecera/cabecera';
import { Pie } from '../pie/pie';
import { Navegacion } from '../navegacion/navegacion';

@Component({
  selector: 'app-vehiculo',
  imports: [Pie, Cabecera, RouterLink, Navegacion],
  templateUrl: './vehiculo.html',
  styleUrl: './vehiculo.css',
})
export class Vehiculo {

}
