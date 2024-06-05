import { Component, OnInit } from '@angular/core';
import { Docente } from '../../models/docentes';
import { DocenteService } from './docente.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit{
  constructor(private modalService: NgbModal,private objDocenteService:DocenteService,private router:Router) { }
  public docentes: Docente[] = [];
  public titulo: string = "Administrar docentes";
  ngOnInit(): void {
    this.getDocentes();
  }
  getDocentes(){
    this.objDocenteService.getDocentes().subscribe(
      docentes => this.docentes = docentes
    );
  }
  crearDocente(){
    this.router.navigate(['docente/form']);
  }
  registrarRespuesta(docente:Docente){
    this.router.navigate(['/respuestas',docente.idPersona]);
  }
  verInfo(){
    this.modalService.open(ModalComponent);
  }
}
