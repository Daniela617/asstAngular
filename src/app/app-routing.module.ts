import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/docentes/form.component';

const routes: Routes = [
  {path: '', redirectTo: '/docentes/form', pathMatch: 'full'},
  {path: 'docentes/form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
