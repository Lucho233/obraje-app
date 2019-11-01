import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-contenido',
  templateUrl: './item-contenido.component.html',
  styleUrls: ['./item-contenido.component.scss']
})
export class ItemContenidoComponent implements OnInit {
  @Input() titulo
  @Input() texto
  @Input() contenido
  constructor() { }

  ngOnInit() {
  }
      nombre = "Pri"
}
