import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { of } from 'rxjs';
import { Docente } from '../../models/docentes';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Departamento } from 'src/app/models/departamento';

@Injectable()
export class DocenteService{
  private urlEndPoint: string = 'http://localhost:5000/api/docente';
  private urlEndPointGet: string = 'http://localhost:5000/api/docentes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }

  getDepartamentos(): Observable<Departamento[]>{
    return this.http.get<Departamento[]>(`${this.urlEndPointGet}/deptos`);
  }
  getDocentes(): Observable<Docente[]>{
    return this.http.get<Docente[]>(this.urlEndPointGet);
  }

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
