import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cabecera } from '../cabecera/cabecera';
import { Pie } from '../pie/pie';
import { Navegacion } from '../navegacion/navegacion';

@Component({
  selector: 'app-institucion',
  imports: [RouterLink, Cabecera, Pie, Navegacion],
  templateUrl: './institucion.html',
  styleUrl: './institucion.css',
})
export class Institucion {

}
