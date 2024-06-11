import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RespuestaDocente } from 'src/app/models/respuestaDocente';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() docenteId!: number;
  respuesta: RespuestaDocente = new RespuestaDocente()

  constructor(private objService : ModalService,public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.objService.getCuestionariosResuelto(this.docenteId).subscribe(data => {
      this.respuesta = data;
    });
  }

  close() {
    this.activeModal.close();
  }
}
