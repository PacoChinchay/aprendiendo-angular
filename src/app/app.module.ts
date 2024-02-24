import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    BotonesComponent,
    FormularioComponent,
    BuclesComponent,
    SwitchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
