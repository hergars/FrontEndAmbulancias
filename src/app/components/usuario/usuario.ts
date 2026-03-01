import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuarioservice';
import { Cabecera } from '../cabecera/cabecera';
import { Pie } from '../pie/pie';
import { Navegacion } from '../navegacion/navegacion';
import { Usuario } from '../../models/usuariomodels';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Cabecera, Pie, Navegacion],
  templateUrl: './usuario.html',
  styleUrls: ['./usuario.css']
})
export class UsuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  usuarios: Usuario[] = [];
  editando: boolean = false;
  indiceEditar: number | null = null;

  hoy = new Date();
  fechaLocal = this.hoy.getFullYear() + '-' +
    String(this.hoy.getMonth() + 1).padStart(2, '0') + '-' +
    String(this.hoy.getDate()).padStart(2, '0');

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {
    this.usuarioForm = this.fb.group({
      id: [null],  // 👈 id agregado para editar
      nombre_usuario: ['', Validators.required],
      tipo_documento: ['', Validators.required],
      documento: ['', Validators.required],
      cod_pais: [null, Validators.required],
      cod_municipio: [null, Validators.required],
      id_rol: [null, Validators.required],
      sexo: ['', Validators.required],
      celular_usuario: [''],
      correo_usuario: ['', [Validators.required, Validators.email]],
      cod_eps: [null, Validators.required],
      tipo_sangre: [''],
      estado_usuario: ['Activo'],
      creado_por_usuario: ['Admin'],
      fecha_creacion_usuario: [this.fechaLocal],
      create_at: [this.hoy.toISOString()],
      licencia: ['']
    });
  }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.usuarioService.getUsuarios()
      .subscribe({
        next: (data: Usuario[]) => {
          this.usuarios = data;
        },
        error: (err) => {
          console.error("Error al cargar usuarios:", err);
        }
      });
  }

  guardar() {
    if (this.usuarioForm.invalid) {
      alert('Por favor complete todos los campos requeridos correctamente.');
      return;
    }

    // Convertir campos numéricos a number antes de enviar
    const usuario: Usuario = {
      ...this.usuarioForm.value,
      cod_pais: Number(this.usuarioForm.value.cod_pais),
      cod_municipio: Number(this.usuarioForm.value.cod_municipio),
      id_rol: Number(this.usuarioForm.value.id_rol),
      cod_eps: Number(this.usuarioForm.value.cod_eps),
      create_at: new Date().toISOString()
    };

    if (this.editando && usuario.id) {
      this.usuarioService.actualizar(usuario.id, usuario)
        .subscribe(res => {
          console.log("Usuario actualizado:", res);
          this.cargarUsuarios();
          this.usuarioForm.reset();
          this.editando = false;
          this.indiceEditar = null;
        }, err => console.error(err));
    } else {
      this.usuarioService.crear(usuario)
        .subscribe(res => {
          console.log("Usuario creado:", res);
          this.cargarUsuarios();
          this.usuarioForm.reset();
        }, err => console.error(err));
    }
  }

  editar(usuario: Usuario, index: number) {
    this.usuarioForm.patchValue(usuario); // copia id y demás campos
    this.editando = true;
    this.indiceEditar = index;
  }

  eliminar(index: number) {
    const id = this.usuarios[index].id!;
    const usuario = this.usuarios[index];
    const confirmado = confirm(`¿Seguro de eliminar a "${usuario.nombre_usuario}"?`);
    if (!confirmado) return;

    this.usuarioService.eliminar(id)
      .subscribe(res => {
        console.log("Usuario eliminado:", res);
        this.cargarUsuarios();
      }, err => console.error(err));
  }
}

