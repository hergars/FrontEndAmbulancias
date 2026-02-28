import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecera } from './components/cabecera/cabecera';
import { Pie } from './components/pie/pie';
import { Inicio } from './components/inicio/inicio';
import { Navegacion } from './components/navegacion/navegacion';
import { Login } from './components/login/login';
import { UsuarioComponent  } from './components/usuario/usuario';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
  
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pie, Cabecera, Inicio, Navegacion, Login, UsuarioComponent , ReactiveFormsModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ambulancia');
}
