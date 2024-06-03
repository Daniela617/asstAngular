import { Departamento } from "./departamento";
import { Telefono } from "./telefono";

export class Docente
{
  tipoIdentificacion!: string;
  numeroIdentificacion!: number;
  nombres!: string;
  apellidos!: string;
  correo!: string;
  vinculacion!: string;
  objTelefonoEntity!: Telefono;
  listaDepartamentos!: Departamento[];
}
