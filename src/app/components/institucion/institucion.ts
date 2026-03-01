import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InstitucionService } from '../../services/institucionservice';
import { Cabecera } from '../cabecera/cabecera';
import { Pie } from '../pie/pie';
import { Navegacion } from '../navegacion/navegacion';

@Component({
  selector: 'app-institucion',
  imports: [CommonModule, ReactiveFormsModule, Cabecera, Pie, Navegacion],
  templateUrl: './institucion.html',
  styleUrls: ['./institucion.css']
})
export class InstitucionComponent implements OnInit {

  institucionForm: FormGroup;
  instituciones: any[] = [];
  editando = false;
  idEditar: number | null = null;

    hoy = new Date();
  fechaLocal = this.hoy.getFullYear() + '-' +
    String(this.hoy.getMonth() + 1).padStart(2, '0') + '-' +
    String(this.hoy.getDate()).padStart(2, '0');

  constructor(
    private fb: FormBuilder,
    private institucionService: InstitucionService
  ) {

    this.institucionForm = this.fb.group({
      id_institucion: [null],  
      nombre_institucion: [''],
      direccion_institucion: [''],
      cod_municipio: [''],
      tipo_institucion: [''],
      creado_por_institucion: ['ADMIN01'],
      fecha_creacion_institucion: [this.fechaLocal],
      estado_institucion: ['Activo']
    });
  }
  ngOnInit(): void {
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
    this.cargarInstituciones();
  }

  editar(inst: any) {
    this.institucionForm.patchValue(inst);
    this.editando = true;
    this.idEditar = inst.id_institucion;
  }

eliminar(id: number) {
  const confirmado = confirm(`¿Estás seguro de eliminar la institución con ID ${id}?`);
  if (!confirmado) {
    return; 
  }

  this.institucionService.eliminar(id)
    .subscribe(() => {
      alert(`Institución con ID ${id} eliminada correctamente.`);
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