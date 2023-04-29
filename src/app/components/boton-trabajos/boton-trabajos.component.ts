import { Component, Input, OnInit, ElementRef  } from '@angular/core';


@Component({
  selector: 'app-boton-trabajos',
  templateUrl: './boton-trabajos.component.html',
  styleUrls: ['./boton-trabajos.component.css']
})
export class BotonTrabajosComponent implements OnInit{

  @Input() text: string = "";
  @Input() color: string = "";
  
  ngOnInit(): void {
    
  }



  constructor(private myElement: ElementRef) {
    }
    
    onClick() {
    let el = this.myElement.nativeElement.querySelector('ct');
    el.scrollIntoView({behavior: "smooth"})
  }
}

