import { Respuesta } from "./respuesta";
import { TipoPregunta } from "./tipoPregunta";

export class Pregunta{
  enunciado!: string;
  objTipoPreguntaEntity!: TipoPregunta;
  respuestaEntities!: Respuesta[];
}
