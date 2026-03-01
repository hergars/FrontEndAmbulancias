import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuarioservice';
import { Cabecera } from '../cabecera/cabecera';
import { Pie } from '../pie/pie';
import { Navegacion } from '../navegacion/navegacion';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Cabecera, Pie, Navegacion],
  templateUrl: './usuario.html',
  styleUrls: ['./usuario.css']
})
export class UsuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  usuarios: any[] = [];
  editando: boolean = false;
  indiceEditar: number | null = null;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {
    this.usuarioForm = this.fb.group({
      nombre_usuario: [''],
      tipo_documento: [''],
      documento: [''],
      cod_pais: [''],
      cod_municipio: [''],
      id_rol: [''],
      sexo: [''],
      celular_usuario: [''],
      correo_usuario: [''],
      cod_eps: [''],
      tipo_sangre: [''],
      estado_usuario: [''],
      licencia: ['']
    });

  }
  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.usuarioService.getUsuarios()
      .subscribe({
        next: (data) => {
          this.usuarios = data;
          console.log("Usuarios desde backend:", data);
        },
        error: (err) => {
          console.error("Error al cargar usuarios:", err);
        }
      });
  }

  guardar() {
    const datos = this.usuarioForm.value;

    console.log("Datos enviados:", datos);

    // Simulación de respuesta backend
    setTimeout(() => {
      console.log("Respuesta simulada del backend:", {
        message: "Usuario creado correctamente",
        data: datos
      });
    }, 1000);
  }
  /*guardar() {
  
    if (this.editando && this.indiceEditar !== null) {
  
      const id = this.usuarios[this.indiceEditar].id;
  
      this.usuarioService.actualizar(id, this.usuarioForm.value)
        .subscribe(res => {
          console.log("Usuario actualizado en backend:", res);
          this.cargarUsuarios();
          this.usuarioForm.reset();
          this.editando = false;
          this.indiceEditar = null;
        });
  
    } else {
  
      this.usuarioService.crear(this.usuarioForm.value)
        .subscribe(res => {
          console.log("Usuario creado en backend:", res);
          this.cargarUsuarios();
          this.usuarioForm.reset();
        });
  
    }
  } */

  editar(usuario: any, index: number) {
    this.usuarioForm.patchValue(usuario);
    this.editando = true;
    this.indiceEditar = index;
  }

  eliminar(index: number) {

    const id = this.usuarios[index].id;

    this.usuarioService.eliminar(id)
      .subscribe(res => {
        console.log("Usuario eliminado:", res);
        this.cargarUsuarios();
      });
  }
}