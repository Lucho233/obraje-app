import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  listaNoticias = []
  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {
    this.noticiasService.getAllNotices().subscribe((noticias) => {
      this.listaNoticias = noticias
    })
  }

}
