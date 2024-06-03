import { Component, OnInit } from '@angular/core';
import { Docente } from '../../models/docentes';
import { DocenteService } from './docente.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private objService:DocenteService,private router:Router){}

  public docente: Docente = new Docente();
  public titulo: string = 'Crear docente';
  public errores: string[] = [];
  ngOnInit(): void {
  }
  public crearCliente():void{
    this.objService.crearDocente(this.docente).subscribe(
      response =>{
        //this.router.navigate(['/']);
        Swal.fire('Nuevo cliente', `Cliente  creado con éxito!`, 'success');
      },
      err => {
        this.errores = err.error.errors as string[];
        console.error('Código del error desde el backend: ' + err.status);
        console.error(err.error.errors);
      }
    )
  }

}




