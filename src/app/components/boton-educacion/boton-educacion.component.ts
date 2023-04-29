import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-educacion',
  templateUrl: './boton-educacion.component.html',
  styleUrls: ['./boton-educacion.component.css']
})
export class BotonEducacionComponent {
  @Input() text: string = "";
  @Input() color: string = "";
  
  ngOnInit(): void {
    
  }

  onClick(){
    console.log("Info!")
  }

}
