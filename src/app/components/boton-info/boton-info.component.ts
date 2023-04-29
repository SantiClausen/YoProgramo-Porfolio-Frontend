import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton-info',
  templateUrl: './boton-info.component.html',
  styleUrls: ['./boton-info.component.css']
})
export class BotonInfoComponent implements OnInit{

  @Input() text: string = "";
  @Input() color: string = "";
  
  ngOnInit(): void {
    
  }

  onClick(){
    console.log("Info!")
  }

}
