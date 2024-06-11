import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { RespuestaDocente } from 'src/app/models/respuestaDocente';
@Injectable()
export class ModalService{
  private urlEndPointGet: string = 'http://localhost:5000/api/respuestasDocente';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }

  getCuestionariosResuelto(id:number): Observable<RespuestaDocente>
  {
    return this.http.get<RespuestaDocente>(`${this.urlEndPointGet}/${id}`);
  }
}

