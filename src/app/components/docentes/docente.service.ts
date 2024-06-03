import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { of } from 'rxjs';
import { Docente } from '../../models/docentes';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable()
export class DocenteService{
  private urlEndPoint: string = 'http://localhost:5000/api/docente';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }

  crearDocente(docente: Docente): Observable<Docente>{
    return this.http.post<Docente>(this.urlEndPoint, docente, {headers: this.httpHeaders}).pipe(
      catchError(
        e => {

          if (e.status == 400) {
            return throwError(e);
          }
          console.log(e.error.mensaje);
          Swal.fire('Error al crear el docente', e.error.mensaje, 'error');
          return throwError(e);
      })
      );


  }
}
