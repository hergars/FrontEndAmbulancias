import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecera } from './components/cabecera/cabecera';
import { Pie } from './components/pie/pie';
import { Inicio } from './components/inicio/inicio';
import { Navegacion } from './components/navegacion/navegacion';
import { Login } from './components/login/login';
import { Usuario } from './components/usuario/usuario';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pie, Cabecera, Inicio, Navegacion, Login, Usuario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ambulancia');
}
