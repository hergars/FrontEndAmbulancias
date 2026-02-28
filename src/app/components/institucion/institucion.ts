import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InstitucionService } from '../../services/institucionservice';
import { Cabecera } from '../cabecera/cabecera';
import { Pie } from '../pie/pie';
import { Navegacion } from '../navegacion/navegacion';

@Component({
  selector: 'app-institucion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Cabecera, Pie, Navegacion],
  templateUrl: './institucion.html',
  styleUrl: './institucion.css'
})
export class InstitucionComponent {

  institucionForm: FormGroup;
  instituciones: any[] = [];
  editando = false;
  idEditar: number | null = null;

  constructor(
    private fb: FormBuilder,
    private institucionService: InstitucionService
  ) {

    this.institucionForm = this.fb.group({
      nombre: [''],
      direccion: [''],
      telefono: [''],
      departamento: [''],
      ciudad: [''],
      complejidad: ['']
    });

    this.cargarInstituciones();
  }

  cargarInstituciones() {
    this.institucionService.getInstituciones()
      .subscribe(data => {
        this.instituciones = data;
      });
  }

  guardar() {

    if (this.editando && this.idEditar !== null) {

      this.institucionService.actualizar(this.idEditar, this.institucionForm.value)
        .subscribe(() => {
          this.resetForm();
        });

    } else {

      console.log("JSON enviado:", this.institucionForm.value);

      this.institucionService.crear(this.institucionForm.value)
        .subscribe(() => {
          this.resetForm();
        });
    }
  }

  editar(inst: any) {
    this.institucionForm.patchValue(inst);
    this.editando = true;
    this.idEditar = inst.id;
  }

  eliminar(id: number) {
    this.institucionService.eliminar(id)
      .subscribe(() => {
        this.cargarInstituciones();
      });
  }

  resetForm() {
    this.cargarInstituciones();
    this.institucionForm.reset();
    this.editando = false;
    this.idEditar = null;
  }
}