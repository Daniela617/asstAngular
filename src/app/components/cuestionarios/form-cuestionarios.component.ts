import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CuestionarioService } from './cuestionario.service';
import { Cuestionario } from 'src/app/models/cuestionario';

@Component({
  selector: 'app-form-cuestionarios',
  templateUrl: './form-cuestionarios.component.html',
  styleUrls: ['./form-cuestionarios.component.css']
})
export class FormCuestionariosComponent {
  constructor(private objService:CuestionarioService,private router:Router){}
  public cuestionario: Cuestionario = new Cuestionario();
  public titulo: string = 'Crear cuestionario';
  public errores: string[] = [];
  ngOnInit(): void {
  }

  public crearCuestionario():void{
    this.objService.crearCuestionario(this.cuestionario).subscribe(
      response =>{
        this.router.navigate(['/cuestionarios']);
        Swal.fire('Nuevo cuestionario', `Cuestionario creado con éxito!`, 'success');
      },
      err => {
        this.errores = err.error.errors as string[];
        console.error('Código del error desde el backend: ' + err.status);
        console.error(err.error.errors);
      }
    )
  }


}
