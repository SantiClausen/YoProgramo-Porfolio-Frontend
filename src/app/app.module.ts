import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PanelEncabezadoComponent } from './components/panel-encabezado/panel-encabezado.component';
import { PanelBotonesComponent } from './components/panel-botones/panel-botones.component';
import { BotonInfoComponent } from './components/boton-info/boton-info.component';
import { BotonTrabajosComponent } from './components/boton-trabajos/boton-trabajos.component';
import { BotonContactoComponent } from './components/boton-contacto/boton-contacto.component';
import { PanelCuerposComponent } from './components/panel-cuerpos/panel-cuerpos.component';
import { CuerpoInfoComponent } from './components/cuerpo-info/cuerpo-info.component';
import { CuerpoContactoComponent } from './components/cuerpo-contacto/cuerpo-contacto.component';
import { CuerpoTrabajosComponent } from './components/cuerpo-trabajos/cuerpo-trabajos.component';
import { CuerpoHabilidadesComponent } from './components/cuerpo-habilidades/cuerpo-habilidades.component';
import { CuerpoEducacionComponent } from './components/cuerpo-educacion/cuerpo-educacion.component';
import { BotonHabilidadesComponent } from './components/boton-habilidades/boton-habilidades.component';
import { BotonEducacionComponent } from './components/boton-educacion/boton-educacion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PanelEncabezadoComponent,
    PanelBotonesComponent,
    BotonInfoComponent,
    BotonTrabajosComponent,
    BotonContactoComponent,
    PanelCuerposComponent,
    CuerpoInfoComponent,
    CuerpoContactoComponent,
    CuerpoTrabajosComponent,
    CuerpoHabilidadesComponent,
    CuerpoEducacionComponent,
    BotonHabilidadesComponent,
    BotonEducacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
