import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-habilidades',
  templateUrl: './boton-habilidades.component.html',
  styleUrls: ['./boton-habilidades.component.css']
})
export class BotonHabilidadesComponent {
  @Input() text: string = "";
  @Input() color: string = "";
  
  ngOnInit(): void {
    
  }

  onClick(){
    console.log("Info!")
  }

}
