import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/@core/backends/shared/services/character.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  paginas!: number[];
  public pageActual!: number;
  public publicTotalPages = 34;
  public desde!: number;
  public hasta!: number;

  constructor(public characterService: CharacterService,
    private activatedRouter: ActivatedRoute,) { }

    ngOnInit(): void {
      this.initPaginator(1);
      this.activatedRouter.paramMap.subscribe( params => {
        let page = +params.get('page');
        this.pageActual = page;
      });
    }

    private initPaginator(numero: any): void {

      let next = numero;
      this.desde = Math.min(Math.max(1, next - 4), this.publicTotalPages - 5);

      this.hasta = Math.max(Math.min(this.publicTotalPages, next + 4), 6);

      if (this.publicTotalPages > 5) {
        this.paginas = new Array(this.hasta - this.desde + 1).fill(0).map((_valor, indice) => indice + this.desde);
      } else {

        this.paginas = new Array(this.publicTotalPages).fill(0).map((_valor, indice) => indice + 1);
      }
    }

    public contadorPage(): void {
      this.characterService.contadorPage();
      this.initPaginator(this.characterService.contador);
    }

    public contadorDismiss(): void {
      this.characterService.contadorDismiss();
      this.initPaginator(this.characterService.contador);
    }

}
