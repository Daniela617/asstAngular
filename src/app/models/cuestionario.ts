import { Pregunta } from "./pregunta";

export class Cuestionario{
  idCuestionario!: number;
  descripcion!: string;
  preguntaEntities!: Pregunta[];
  titulo!: string;
}
