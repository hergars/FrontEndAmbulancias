import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Inicio } from './components/inicio/inicio';
import { UsuarioComponent } from './components/usuario/usuario';
import { Servicios } from './components/servicios/servicios';
import { VehiculoComponent  } from './components/vehiculo/vehiculo'; 
import { InstitucionComponent } from './components/institucion/institucion'; 
import { AsignacionComponent } from './components/asignaservicio/asignaservicio';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'inicio', component: Inicio },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'servicios', component: Servicios },
  { path: 'vehiculos', component: VehiculoComponent  },
  { path: 'instituciones', component: InstitucionComponent },
  { path: 'asignaservicios', component: AsignacionComponent },
  { path: '**', redirectTo: 'login' }
];
