import { Cuestionario } from "./cuestionario";
import { TipoPregunta } from "./tipoPregunta";

export class PreguntaC{
  idpregunta!: number;
  enunciado!: string;
  objTipoPreguntaEntity!: TipoPregunta;
  objCuestionario!: Cuestionario;
}
