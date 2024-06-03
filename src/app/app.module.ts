import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/docentes/form.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DocentesComponent } from './components/docentes/docentes.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavigationComponent,
    DocentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
