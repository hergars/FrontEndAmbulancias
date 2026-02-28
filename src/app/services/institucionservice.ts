import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstitucionService {

  private apiUrl = 'http://localhost:8000/api/instituciones';

  constructor(private http: HttpClient) {}

  getInstituciones(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
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