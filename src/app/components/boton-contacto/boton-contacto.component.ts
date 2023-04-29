import { Component, Input, OnInit }  from '@angular/core';

@Component({
  selector: 'app-boton-contacto',
  templateUrl: './boton-contacto.component.html',
  styleUrls: ['./boton-contacto.component.css']
})
export class BotonContactoComponent implements OnInit{

  @Input() text: string = "";
  @Input() color: string = "";
  
  ngOnInit(): void {
    
  }

  onClick(){
    console.log("Contacto!")
  }
}
