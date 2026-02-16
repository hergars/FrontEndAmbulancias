import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Inicio } from './components/inicio/inicio';
import { Usuario } from './components/usuario/usuario';
import { Servicios } from './components/servicios/servicios';
import { Vehiculo } from './components/vehiculo/vehiculo'; 
import { Institucion } from './components/institucion/institucion'; 
import { Asignaservicio } from './components/asignaservicio/asignaservicio';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'inicio', component: Inicio },
  { path: 'usuarios', component: Usuario },
  { path: 'servicios', component: Servicios },
  { path: 'vehiculos', component: Vehiculo },
  { path: 'instituciones', component: Institucion },
  { path: 'asignaservicios', component: Asignaservicio },
  { path: '**', redirectTo: 'login' }
];
