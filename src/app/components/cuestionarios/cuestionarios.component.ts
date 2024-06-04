import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuestionario } from 'src/app/models/cuestionario';
import { CuestionarioService } from './cuestionario.service';
@Component({
  selector: 'app-cuestionarios',
  templateUrl: './cuestionarios.component.html',
  styleUrls: ['./cuestionarios.component.css']
})
export class CuestionariosComponent implements OnInit{
  public cuestionarios: Cuestionario[] = [];
  public titulo: string = 'Administrar cuestionarios';
  constructor(private objCuestionarioService:CuestionarioService,private router:Router) { }
  ngOnInit(): void {
    this.getCuestionarios();
  }
  getCuestionarios(){
    this.objCuestionarioService.getCuestionarios().subscribe(
      cuestionarios => this.cuestionarios = cuestionarios
    );
  }

  crearCuestionario(){
    this.router.navigate(['cuestionario/form']);
  }
}
