/* tslint:disable:no-unused-variable */
import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursoService } from '../curso.service' ;

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {

  cursos: Array<Curso> = [];
  message: string = "";
  selectedCurso!: Curso;
  selected: Boolean = false;
  constructor(private cursoService: CursoService) { }

  getCursos(): void {
    this.cursoService.getCursos().subscribe((cursos) => {
      this.cursos = cursos;
      this.message = this.getCursosCertificados(this.cursos);
    });
  }

  ngOnInit() {
    this.getCursos();
  }


  getCursosCertificados(cursos: Curso[]): string {
  let cursoscertificados = "";
  cursos.forEach((curso) => {
    if (curso.offers_certificate) {
      cursoscertificados += curso.id + ", ";
      }
    });
    return `** los cursos ${cursoscertificados} están certificado **`;
  }

  onSelected(curso: Curso): void {
    this.selected = true;
    this.selectedCurso = curso;
  }

}
