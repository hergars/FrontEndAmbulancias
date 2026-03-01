import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VehiculoService } from '../../services/vehiculoservice';
import { Cabecera } from '../cabecera/cabecera';
import { Pie } from '../pie/pie';
import { Navegacion } from '../navegacion/navegacion';

@Component({
  selector: 'app-vehiculo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Cabecera, Pie, Navegacion],
  templateUrl: './vehiculo.html',
  styleUrls: ['./vehiculo.css']
})
export class VehiculoComponent implements OnInit {

  vehiculoForm: FormGroup;
  vehiculos: any[] = [];
  editando = false;
  placaEditar: string | null = null;

    hoy = new Date();
  fechaLocal = this.hoy.getFullYear() + '-' +
    String(this.hoy.getMonth() + 1).padStart(2, '0') + '-' +
    String(this.hoy.getDate()).padStart(2, '0');

  constructor(
    private fb: FormBuilder,
    private vehiculoService: VehiculoService
  ) {

    this.vehiculoForm = this.fb.group({
      placa: [''],
      cod_secretaria: [''],
      tipo_vehiculo: [''],
      marca: [''],
      modelo: [''],
      soat: [''],
      tecnomecanica: [''],
      creado_por_vehiculo: ['ADM01'],
      fecha_creacion_vehiculo: [this.fechaLocal],
      estado_vehiculo: ['']
    });

  }
  ngOnInit(): void {
    this.cargarVehiculos();
  }

  cargarVehiculos() {
    this.vehiculoService.getVehiculos()
      .subscribe(data => {
        this.vehiculos = data;
        console.log("vehiculos desde backend:", data);
      });
  }

  guardar() {

  if (this.editando && this.placaEditar) {
    this.vehiculoService.actualizar(this.placaEditar, this.vehiculoForm.value)
      .subscribe(() => {
        this.resetForm();
      });
  } else {
    console.log("JSON enviado:", this.vehiculoForm.value);
    this.vehiculoService.crear(this.vehiculoForm.value)
      .subscribe(() => {
        this.resetForm();
        this.cargarVehiculos(); 
      });
}
  }

editar(vehiculo: any) {
  this.vehiculoForm.patchValue(vehiculo);
  this.editando = true;
  this.placaEditar = vehiculo.placa; 
}

eliminar(placaEditar: string) {
  const confirmado = confirm(`¿Estás seguro de eliminar el vehículo con placa "${placaEditar}"?`);
  if (!confirmado) {
    return; 
  }

  this.vehiculoService.eliminar(placaEditar)
    .subscribe(() => {
      alert(`Vehículo con placa "${placaEditar}" eliminado correctamente.`);
      this.cargarVehiculos(); 
    });
}

  resetForm() {
    this.cargarVehiculos();
    this.vehiculoForm.reset();
    this.editando = false;
    this.placaEditar = null;
  }
}