import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cabecera } from '../cabecera/cabecera';
import { Pie } from '../pie/pie';
import { Navegacion } from '../navegacion/navegacion';

@Component({
  selector: 'app-inicio',
  imports: [Cabecera, Pie, Navegacion],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

}
