import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { RespuestaCuestionario } from 'src/app/models/RespuestaCuestionario';
@Injectable()
export class RespuestaService {
  private urlEndPoint: string = 'http://localhost:5000/api/docente';
  private urlEndPointGet: string = 'http://localhost:5000/api/docentes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }


  //crearDocente(respuesta: RespuestaCuestionario): Observable<RespuestaCuestionario>{}
    
}
