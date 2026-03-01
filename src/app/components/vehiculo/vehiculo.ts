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
  idEditar: number | null = null;

  constructor(
    private fb: FormBuilder,
    private vehiculoService: VehiculoService
  ) {

    this.vehiculoForm = this.fb.group({
      placa: [''],
      codsecretaria: [''],
      tipo_vehiculo: [''],
      marca: [''],
      modelo: [''],
      soat: [''],
      tecnicomecanica: [''],
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

    if (this.editando && this.idEditar !== null) {

      this.vehiculoService.actualizar(this.idEditar, this.vehiculoForm.value)
        .subscribe(() => {
          this.resetForm();
        });

    } else {

      console.log("JSON enviado:", this.vehiculoForm.value);

      this.vehiculoService.crear(this.vehiculoForm.value)
        .subscribe(() => {
          this.resetForm();
        });
    }
  }

  editar(vehiculo: any) {
    this.vehiculoForm.patchValue(vehiculo);
    this.editando = true;
    this.idEditar = vehiculo.id;
  }

  eliminar(id: number) {
    this.vehiculoService.eliminar(id)
      .subscribe(() => {
        this.cargarVehiculos();
      });
  }

  resetForm() {
    this.cargarVehiculos();
    this.vehiculoForm.reset();
    this.editando = false;
    this.idEditar = null;
  }
}