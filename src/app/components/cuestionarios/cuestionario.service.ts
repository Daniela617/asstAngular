import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Cuestionario } from 'src/app/models/cuestionario';

@Injectable()
export class CuestionarioService{
  private urlEndPoint: string = 'http://localhost:5000/api/cuestionarios';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }

  getCuestionarios(): Observable<Cuestionario[]>{
    return this.http.get<Cuestionario[]>(this.urlEndPoint);
  }

  crearCuestionario(cuestionario: Cuestionario): Observable<Cuestionario>{
    return this.http.post<Cuestionario>(this.urlEndPoint, cuestionario, {headers: this.httpHeaders}).pipe(
      catchError(
        e => {

          if (e.status == 400) {
            return throwError(e);
          }
          console.log(e.error.mensaje);
          Swal.fire('Error al crear el cliente', e.error.mensaje, 'error');
          return throwError(e);
      })
      );
  }
}
