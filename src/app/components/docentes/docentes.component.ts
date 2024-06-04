import { Component, OnInit } from '@angular/core';
import { Docente } from '../../models/docentes';
import { DocenteService } from './docente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit{
  constructor(private objDocenteService:DocenteService,private router:Router) { }
  public docentes: Docente[] = [];
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
}
