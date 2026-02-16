import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cabecera } from '../cabecera/cabecera';
import { Pie } from '../pie/pie';
import { Navegacion } from '../navegacion/navegacion';

 
@Component({
  selector: 'app-usuario',
  imports: [Pie, Cabecera, RouterLink, Navegacion],  
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {

}
