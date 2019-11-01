import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-contenido',
  templateUrl: './ver-contenido.component.html',
  styleUrls: ['./ver-contenido.component.scss']
})
export class VerContenidoComponent implements OnInit {
  grados
  gradoSeleccionado = false
  listaItems = []
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

  onSelectionChange() {
    this.gradoSeleccionado = true
    this.listaItems = [
      {
       titulo: "Hola mundo",
       texto: "lalala lalala",
       contenido: "contenido" 
      },
      {
       titulo: "Hola mundo 2",
       texto: "lalala lalala 2",
       contenido: "contenido" 
      },
      {
       titulo: "Hola mundo 3",
       texto: "lalala lalala 3",
       contenido: "contenido" 
      },
      {
       titulo: "Hola mundo 4",
       texto: "lalala lalala 4",
       contenido: "contenido" 
      },
    ]
  }

}
