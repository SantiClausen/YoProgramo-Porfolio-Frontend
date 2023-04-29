import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoInfoComponent } from './components/cuerpo-info/cuerpo-info.component';
import { CuerpoContactoComponent } from './components/cuerpo-contacto/cuerpo-contacto.component';
import { CuerpoTrabajosComponent } from './components/cuerpo-trabajos/cuerpo-trabajos.component';
import { CuerpoHabilidadesComponent } from './components/cuerpo-habilidades/cuerpo-habilidades.component';
import { CuerpoEducacionComponent } from './components/cuerpo-educacion/cuerpo-educacion.component';

const routes: Routes = [
  {
    path: '',
    component: CuerpoInfoComponent
  },
  {
    path: 'contacto',
    component: CuerpoContactoComponent
  },
  {
    path: 'trabajo',
    component: CuerpoTrabajosComponent
  },
  {
    path: 'habilidades',
    component: CuerpoHabilidadesComponent
  },
  {
    path: 'educacion',
    component: CuerpoEducacionComponent
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
