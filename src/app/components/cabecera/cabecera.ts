import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-cabecera',
  imports: [],
  templateUrl: './cabecera.html',
  styleUrl: './cabecera.css',
})
export class Cabecera {
  constructor(private Auth: Auth, private Router: Router) {}

  logout() {
  this.Auth.logout();            // borra token
  this.Router.navigate(['/login']); // o window.location.href
}
}
