import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-contenido',
  templateUrl: './ver-contenido.component.html',
  styleUrls: ['./ver-contenido.component.scss']
})
export class VerContenidoComponent implements OnInit {
  grados

  constructor() { 
    this.grados = [
      {
        nombre: "Primer Grado A",
        value: "pa"
      },
      {
        nombre: "Primer Grado B",
        value: "pb"
      },
      {
        nombre: "Segundo Grado A",
        value: "sa"
      },
      {
        nombre: "Segundo Grado B",
        value: "sb"
      },
      {
        nombre: "Tercer Grado A",
        value: "ta"
      },
      {
        nombre: "Tercer Grado B",
        value: "tb"
      },
      {
        nombre: "Cuarto Grado A",
        value: "ca"
      },
      {
        nombre: "Cuarto Grado B",
        value: "cb"
      },
      {
        nombre: "Quinto Grado A",
        value: "qa"
      },
      {
        nombre: "Quinto Grado B",
        value: "qb"
      },
      {
        nombre: "Sexto Grado A",
        value: "xa"
      },
      {
        nombre: "Sexto Grado B",
        value: "xb"
      }
    ]
  }

  ngOnInit() {
  }

}
