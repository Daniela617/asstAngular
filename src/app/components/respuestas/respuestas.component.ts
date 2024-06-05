import { Component, OnInit } from '@angular/core';
import { Cuestionario } from 'src/app/models/cuestionario';
import { CuestionarioService } from '../cuestionarios/cuestionario.service';
import { Router } from '@angular/router';
import { RespuestaCuestionario } from 'src/app/models/RespuestaCuestionario';
import { Docente } from 'src/app/models/docentes';
import { Respuesta } from 'src/app/models/respuesta';
import { PreguntaCuestionario } from 'src/app/models/PreguntaCuestionario';

@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent implements OnInit{
  public respuestaCuestionario :RespuestaCuestionario = new RespuestaCuestionario();
  public respuesta:Respuesta = new Respuesta();
  public objPregunta: PreguntaCuestionario = new PreguntaCuestionario();
  public respuestas:Respuesta[] = [];
  public objDocente:Docente = new Docente();
  public cuestionarios: Cuestionario[] = [];
  public titulC: string = 'Crear cuestionario';
  public cuestionariosSelected: Cuestionario [] = [];
  public cuestionarioSeleccionado: Cuestionario = new Cuestionario();
  constructor(private objCuestionarioService:CuestionarioService,private router:Router) { }
  ngOnInit(): void {
    this.getCuestionarios();
  }
  getCuestionarios(){
    this.objCuestionarioService.getCuestionarios().subscribe(
      cuestionarios => this.cuestionarios = cuestionarios
      
    );
  }
  opcionSeleccionada: string = '';
  tipoPreguntaSeleccionada(opSeleccionada: string){
    this.opcionSeleccionada = opSeleccionada;
    const filteredCuestionario = this.cuestionariosSelected.filter(item => item.titulo !== undefined);
    this.cuestionarioSeleccionado = filteredCuestionario.find(item => item.titulo === opSeleccionada)!;
  }
  registrarRespuesta(){
    console.log(this.cuestionarioSeleccionado);
  }


}
