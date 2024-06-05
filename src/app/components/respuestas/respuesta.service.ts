import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { RespuestaCuestionario } from 'src/app/models/RespuestaCuestionario';
@Injectable()
export class RespuestaService {
  private urlEndPoint: string = 'http://localhost:5000/api/respuesta';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }

  registrarRespuestas(respuesta: RespuestaCuestionario): Observable<RespuestaCuestionario>{
    return this.http.post<RespuestaCuestionario>(this.urlEndPoint, respuesta, {headers: this.httpHeaders}).pipe(
      catchError(
        e => {
          if (e.status == 400) {
            return throwError(e);
          }
          console.log(e.error.mensaje);
          return throwError(e);
      })
      );
  }

    
}
