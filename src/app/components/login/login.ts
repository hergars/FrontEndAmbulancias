import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;
  isLoading = signal(false);
  errorMessage = signal('');

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      recuerda: [false]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.isLoading.set(true);
      this.errorMessage.set('');

      const credenciales = this.loginForm.value;
      //Proabndo que llegan las credenciales
      console.log('Intentando iniciar sesión con:', credenciales);

      // Simular llamada al servidor
      setTimeout(() => {
        // Validación simple de ejemplo
        if (credenciales.usuario === 'admin' && credenciales.password === 'admin123') {
          this.loginForm.reset();
          // Va a la página de inicio
          this.router.navigate(['/inicio']);
        } else {
          this.errorMessage.set('Usuario o contraseña incorrectos');
        }
        this.isLoading.set(false);
      }, 1500);
    }
  }
  }

