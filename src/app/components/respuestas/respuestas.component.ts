import { Component, OnInit } from '@angular/core';
import { Cuestionario } from 'src/app/models/cuestionario';
import { CuestionarioService } from '../cuestionarios/cuestionario.service';
import { Router,ActivatedRoute  } from '@angular/router';
import { RespuestaCuestionario } from 'src/app/models/RespuestaCuestionario';
import { Docente } from 'src/app/models/docentes';
import { Respuesta } from 'src/app/models/respuesta';
import { RespuestaService } from './respuesta.service';
import { PreguntaCuestionario } from 'src/app/models/PreguntaCuestionario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent implements OnInit {
  public tituloC: string = 'Crear cuestionario';
  public respuestaCuestionario: RespuestaCuestionario = new RespuestaCuestionario();
  public respuesta: Respuesta = new Respuesta();
  public objPregunta: PreguntaCuestionario = new PreguntaCuestionario();
  public respuestas: Respuesta[] = [];
  public objDocente: Docente = new Docente();
  public cuestionarios: Cuestionario[] = [];
  public DocenteId: string = ''; // para almacenar el id capturado de la URL
  public cuestionarioSeleccionado: Cuestionario = new Cuestionario();
  
  constructor(private objRespuestaService:RespuestaService,private objCuestionarioService: CuestionarioService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.DocenteId = params['id']; // Captura el id de la URL
      console.log(this.DocenteId);
    });
    this.getCuestionarios();
  }

  getCuestionarios() {
    this.objCuestionarioService.getCuestionarios().subscribe(
      cuestionarios => this.cuestionarios = cuestionarios
    );
  }

  opcionSeleccionada: string = '';

  tipoPreguntaSeleccionada(opSeleccionada: string) {
    this.opcionSeleccionada = opSeleccionada;
    this.cuestionarioSeleccionado = this.cuestionarios.find(item => item.titulo === opSeleccionada) || new Cuestionario();
  }

  registrarRespuesta() {
    this.respuestaCuestionario.objCuestionario = this.cuestionarioSeleccionado;
    this.objDocente.idPersona = Number(this.DocenteId);
    this.respuestaCuestionario.objDocente = this.objDocente;
    this.respuestas.push(this.respuesta);
    this.objPregunta.respuestaEntities = this.respuestas;
    this.objPregunta.idpregunta = this.cuestionarioSeleccionado.preguntaEntities[0].idpregunta;
    this.respuestaCuestionario.objPregunta = this.objPregunta;
    console.log(JSON.stringify(this.respuestaCuestionario));
    this.objRespuestaService.registrarRespuestas(this.respuestaCuestionario).subscribe(
      response => {
        this.irAtras();
        console.log(response);
        Swal.fire('Nueva respuesta', `Respuesta registrada con éxito!`, 'success');
      },
      err => {
        console.error(err);
        this.irAtras();
        Swal.fire('Error', 'No se pudo registrar la respuesta', 'error');
      }
    );
  }
  irAtras() {
    this.router.navigate(['/docentes']);
  }
}
