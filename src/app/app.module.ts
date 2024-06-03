import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DocenteService } from './components/docentes/docente.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/docentes/form.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DocentesComponent } from './components/docentes/docentes.component';
import { HttpClientModule } from '@angular/common/http';
import { CuestionariosComponent } from './components/cuestionarios/cuestionarios.component';
import { FormCuestionariosComponent } from './components/cuestionarios/form-cuestionarios.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavigationComponent,
    DocentesComponent,
    CuestionariosComponent,
    FormCuestionariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DocenteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
