import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private apiUrl = 'http://localhost/api/vehiculos';

  constructor(private http: HttpClient) {}

  getVehiculos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getall`);
  }

  crear(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, data);
  }

  actualizar(placa: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${placa}/update`, data);
  }

  eliminar(placa: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${placa}/delete`);
  }
}