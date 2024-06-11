import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DocenteService } from './components/docentes/docente.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/docentes/form.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { DocentesComponent } from './components/docentes/docentes.component';
import { HeaderComponent} from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import { CuestionariosComponent } from './components/cuestionarios/cuestionarios.component';
import { FormCuestionariosComponent } from './components/cuestionarios/form-cuestionarios.component';
import { CuestionarioService } from './components/cuestionarios/cuestionario.service';
import { RespuestasComponent } from './components/respuestas/respuestas.component';
import { RespuestaService } from './components/respuestas/respuesta.service';
import { ModalService } from './components/modal/modal.service';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavigationComponent,
    DocentesComponent,
    FooterComponent,
    HeaderComponent,
    CuestionariosComponent,
    FormCuestionariosComponent,
    RespuestasComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    CommonModule
  ],
  providers: [DocenteService,CuestionarioService,RespuestaService,ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
