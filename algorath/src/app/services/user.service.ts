import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from 'src/app/models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  url = 'http://localhost:400/algorath/users/';

  getUsuarios(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarUsuario(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarUsuario(user: user): Observable<any> {
    return this.http.post(this.url, user);
  }

  obtenerUsuario(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarUsuario(id: string, user: user): Observable<any> {
    return this.http.put(this.url + id, user);
  }


}
