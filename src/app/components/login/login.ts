import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  //loginForm: FormGroup;
  isLoading = signal(false);
  errorMessage = signal('');

  //vaariables de solicitud
  public solicitud:any;
  public mensaje: string = '';

  constructor(private auth: Auth) {
    this.solicitud = {
      email:'',
      password:''
    }
  }

  // constructor(private fb: FormBuilder, private router: Router) {
  //   this.loginForm = this.fb.group({
  //     usuario: ['', [Validators.required, Validators.minLength(3)]],
  //     password: ['', [Validators.required, Validators.minLength(6)]],
  //     recuerda: [false]
  //   });
  // }

  OnSubmit() {
    console.log(this.solicitud);

    this.auth.login(this.solicitud).subscribe({
      next: (response: any) => {
        this.mensaje = response.message;

        // guardar token si existe
        if(response.token){
          localStorage.setItem('token', response.token);
        }

        // redireccionar si login correcto
        if(response.success){
          window.location.href = '/inicio';
        }
      },
      error: (error) => {
        this.mensaje = error.error.message;
      }
    });
  }

  // onLogin() {
  //   if (this.loginForm.valid) {
  //     this.isLoading.set(true);
  //     this.errorMessage.set('');

  //     const credenciales = this.loginForm.value;
  //     //Proabndo que llegan las credenciales
  //     console.log('Intentando iniciar sesión con:', credenciales);

  //     // Simular llamada al servidor
  //     setTimeout(() => {
  //       // Validación simple de ejemplo
  //       if (credenciales.usuario === 'admin' && credenciales.password === 'admin123') {
  //         this.loginForm.reset();
  //         // Va a la página de inicio
  //         this.router.navigate(['/inicio']);
  //       } else {
  //         this.errorMessage.set('Usuario o contraseña incorrectos');
  //       }
  //       this.isLoading.set(false);
  //     }, 1500);
  //   }
  // }
}

