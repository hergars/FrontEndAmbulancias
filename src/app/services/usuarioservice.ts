import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost/api/user';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getall`);
  }

  crear(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, usuario);
  }

  actualizar(id: number, usuario: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/update`, usuario);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}/delete`);
  }
}