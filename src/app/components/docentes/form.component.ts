import { Component, OnInit } from '@angular/core';
import { Docente } from '../../models/docentes';
import { DocenteService } from './docente.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Telefono } from 'src/app/models/telefono';
import { Departamento } from 'src/app/models/departamento';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private objService:DocenteService,private router:Router){}

  public docente: Docente = new Docente();
  public telefono:Telefono = new Telefono();
  public titulo: string = 'Crear docente';
  public errores: string[] = [];
  ngOnInit(): void {
  }
  public crearDocente():void{
    this.docente.objTelefonoEntity = this.telefono;

    this.objService.crearDocente(this.docente).subscribe(
      response =>{
        this.router.navigate(['/docentes']);
        Swal.fire('Nuevo docente', `Docente  creado con éxito!`, 'success');
      },
      err => {
        this.errores = err.error.errors as string[];
      }
    )
  }

}




