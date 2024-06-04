import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router:Router){

  }

  irCuestionario(){
    this.router.navigate(['/cuestionarios']);
  }
  irDocente(){
    this.router.navigate(['/docentes']);
  }
}
