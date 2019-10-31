import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-sub-contenido',
  templateUrl: './sub-contenido.component.html',
  styleUrls: ['./sub-contenido.component.scss']
})
export class SubContenidoComponent implements OnInit {

  titleControl: FormControl;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
  }

}
