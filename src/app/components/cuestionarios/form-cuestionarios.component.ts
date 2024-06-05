import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CuestionarioService } from './cuestionario.service';
import { Cuestionario } from 'src/app/models/cuestionario';
import { Pregunta } from 'src/app/models/pregunta';
import { TipoPregunta } from 'src/app/models/tipoPregunta';

@Component({
  selector: 'app-form-cuestionarios',
  templateUrl: './form-cuestionarios.component.html',
  styleUrls: ['./form-cuestionarios.component.css']
})
export class FormCuestionariosComponent {
  constructor(private objService:CuestionarioService,private router:Router){}
  public cuestionario: Cuestionario = new Cuestionario();
  public pregunta: Pregunta = new Pregunta();
  public preguntaList : Pregunta[] = [];
  public tpPregunta: TipoPregunta[] = [];
  public tpPreguntaSeleccionada: TipoPregunta= new TipoPregunta();
  
  public titulC: string = 'Crear cuestionario';
  public errores: string[] = [];
  ngOnInit(): void {
    this.getTipoPregunta();
  }

  public crearCuestionario():void{
    this.pregunta.objTipoPreguntaEntity = this.tpPreguntaSeleccionada;
    this.preguntaList.push(this.pregunta);
    this.cuestionario.preguntaEntities = this.preguntaList;
    console.log(JSON.stringify(this.cuestionario));
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
  irAtras(){
    this.router.navigate(['/cuestionarios']);
  }

  opcionSleccionada: string = '';
  tipoPreguntaSeleccionada(tpSelected: string){
    this.opcionSleccionada = tpSelected;
    const filteredPreguntas = this.tpPregunta.filter(item => item.nombre !== undefined);
    this.tpPreguntaSeleccionada = filteredPreguntas.find(item => item.nombre === tpSelected)!;

  }
  public getTipoPregunta():void{
    this.objService.getTipoPregunta().subscribe(
      tpPregunta => this.tpPregunta = tpPregunta
    );
  }

}
