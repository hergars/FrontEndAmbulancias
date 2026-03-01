import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Inicio } from './components/inicio/inicio';
import { UsuarioComponent } from './components/usuario/usuario';
import { Servicios } from './components/servicios/servicios';
import { VehiculoComponent  } from './components/vehiculo/vehiculo'; 
import { InstitucionComponent } from './components/institucion/institucion'; 
import { AsignacionComponent } from './components/asignaservicio/asignaservicio';
import { DepartamentosComponent } from './components/departamentos/departamentos';
import { authGuard } from './services/auth.guard';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'inicio', component: Inicio, canActivate: [authGuard] },
  { path: 'usuarios', component: UsuarioComponent, canActivate: [authGuard] },
  { path: 'servicios', component: Servicios, canActivate: [authGuard] },
  { path: 'vehiculos', component: VehiculoComponent, canActivate: [authGuard] },
  { path: 'instituciones', component: InstitucionComponent, canActivate: [authGuard] },
  { path: 'asignaservicios', component: AsignacionComponent, canActivate: [authGuard] },
  { path: 'departamentos', component: DepartamentosComponent },
  { path: '**', redirectTo: 'login' }
];
