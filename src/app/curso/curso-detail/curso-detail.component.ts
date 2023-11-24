import { Component,Input, OnInit } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css']
})
export class CursoDetailComponent implements OnInit {

  constructor() { }

  @Input() cursoDetail!: Curso;
  OfertaCurso(ofrece: boolean): string {
      
    if (ofrece==true){

        return 'Sí'
      }
    else{
      return 'No'

    }
  }

  ngOnInit() {
  }

}
