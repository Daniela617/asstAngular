import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/docentes/form.component';
import { FormCuestionariosComponent } from './components/cuestionarios/form-cuestionarios.component';
import { CuestionariosComponent } from './components/cuestionarios/cuestionarios.component';
import { DocentesComponent } from './components/docentes/docentes.component';

const routes: Routes = [
  {path: 'docente/form', component: FormComponent},
  {path: 'docentes', component: DocentesComponent},
  {path: 'cuestionario/form', component: FormCuestionariosComponent},
  {path: 'cuestionarios', component: CuestionariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
