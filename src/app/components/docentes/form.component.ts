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
  public departamentos: Departamento[] = [];
  public departamentoSeleccionados: Departamento[] = [];
  public titulo: string = 'Crear docente';
  public errores: string[] = [];
  ngOnInit(): void {
    this.getDepartamentos();
  }
  public crearDocente():void{
    this.docente.objTelefonoEntity = this.telefono;
    this.docente.listaDepartamentos = this.departamentoSeleccionados;
    console.log(JSON.stringify(this.docente));
    this.objService.crearDocente(this.docente).subscribe(
      response =>{
        this.router.navigate(['/docentes']);
        console.log(response);
        Swal.fire('Nuevo docente', `Docente  creado con éxito!`, 'success');
      },
      err => {
        this.errores = err.error.errors as string[];
      }
    )
  }
  public updateSelection(depto:Departamento) {
    const index = this.departamentoSeleccionados.findIndex(d => d.idDepartamento === depto.idDepartamento);
    if (index === -1) {
      this.departamentoSeleccionados.push(depto);
    } else {
      this.departamentoSeleccionados.splice(index, 1);
    }
  }
  public getDepartamentos():void{
    this.objService.getDepartamentos().subscribe(
      departamentos => this.departamentos = departamentos
    );
  }

}




