import { Respuesta } from "./respuesta";
import { TipoPregunta } from "./tipoPregunta";

export class Pregunta{
  idpregunta!: number;
  respuestaEntities!: Respuesta[];
  enunciado!: string;
  objTipoPreguntaEntity!: TipoPregunta;
}
