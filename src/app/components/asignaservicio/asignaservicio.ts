import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AsignacionService } from '../../services/asignaservicioservice';
import { Cabecera } from '../cabecera/cabecera';
import { Pie } from '../pie/pie';
import { Navegacion } from '../navegacion/navegacion';

@Component({
  selector: 'app-asignacion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Cabecera, Pie, Navegacion],
  templateUrl: './asignaservicio.html',
  styleUrl: './asignaservicio.css'
})
export class AsignacionComponent {

  asignacionForm: FormGroup;
  asignaciones: any[] = [];
  editando = false;
  idEditar: number | null = null;

  constructor(
    private fb: FormBuilder,
    private asignacionService: AsignacionService
  ) {

    this.asignacionForm = this.fb.group({
      paciente: [''],
      fecha: [''],
      hora: [''],
      tiposervicio: [''],
      instituciono: [''],
      departamentoo: [''],
      ciudado: [''],
      instituciond: [''],
      departamentod: [''],
      ciudadd: ['']
    });

    this.cargarAsignaciones();
  }

  cargarAsignaciones() {
    this.asignacionService.getAsignaciones()
      .subscribe(data => this.asignaciones = data);
  }

  guardar() {

    console.log("JSON enviado:", this.asignacionForm.value);

    if (this.editando && this.idEditar !== null) {

      this.asignacionService.actualizar(this.idEditar, this.asignacionForm.value)
        .subscribe(() => this.resetForm());

    } else {

      this.asignacionService.crear(this.asignacionForm.value)
        .subscribe(() => this.resetForm());
    }
  }

  editar(a: any) {
    this.asignacionForm.patchValue(a);
    this.editando = true;
    this.idEditar = a.id;
  }

  eliminar(id: number) {
    this.asignacionService.eliminar(id)
      .subscribe(() => this.cargarAsignaciones());
  }

  resetForm() {
    this.cargarAsignaciones();
    this.asignacionForm.reset();
    this.editando = false;
    this.idEditar = null;
  }
}