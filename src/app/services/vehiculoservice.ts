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
    return this.http.post(this.apiUrl, data);
  }

  actualizar(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}