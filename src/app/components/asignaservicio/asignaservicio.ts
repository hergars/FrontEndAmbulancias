import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cabecera } from '../cabecera/cabecera';
import { Pie } from '../pie/pie';
import { Navegacion } from '../navegacion/navegacion';

@Component({
  selector: 'app-asignaservicio',
  imports: [RouterLink, Cabecera, Pie, Navegacion],
  templateUrl: './asignaservicio.html',
  styleUrl: './asignaservicio.css',
})
export class Asignaservicio {
  
}
