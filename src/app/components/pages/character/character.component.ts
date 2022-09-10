import { ChangeDetectionStrategy, Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/@core/backends/shared/services/character.service';
import { LocalStorageService } from 'src/app/@core/backends/shared/services/local-storage.service';
import { LocationModalService } from 'src/app/@core/backends/shared/services/location-modal.service';
import { ModalService } from 'src/app/@core/backends/shared/services/modal.service';
import { Character } from 'src/app/@core/models/data.interface'

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})

export class CharacterComponent implements OnInit {

  public characters?: any;
  public location?: any;
  public characterData: any;
  public characterSeleccionado: any;
  public locationSeleccionado: any;
  public infoPagination: any;
  public loading = true;
  public alive: boolean = true;
  public filtro_valor = '';

  constructor(private characterService: CharacterService,
              private activatedRouter: ActivatedRoute,
              public modalService: ModalService,
              public locationmodalService: LocationModalService,
              private localStorageSvc: LocalStorageService) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  handleSearch(value: string) {
    this.filtro_valor = value
  }

  getIcon(): string {
    return this.characters?.isFavorite ? 'heart-solid.svg' : 'heart.svg';
  }

  public getCharacter(): void {
    this.activatedRouter.paramMap.subscribe(params => {
      let page = +params.get('page');
      this.characterService.getcharcters(page).subscribe(
        (data: any) => {
          this.loading = false;
          this.characters = data.results;
          this.infoPagination = data.info;
        }
        );
    });

  }

  public getLocation(id: any){

    let data = id.substr(-2)
    this.locationmodalService.getLocacion(data)
    .subscribe(res => {
      this.location = res;
      console.log(this.location);
      this.locationSeleccionado = this.location;
      this.locationmodalService.abrirModal();
    });

  }

  public abrirModal(character: number): void {
    this.characterSeleccionado = character;
    this.modalService.abrirModal();
  }

  toggleFavorite(character: any): void {
    let datacharacter = character
    const isFavorite = this.characters.isFavorite;
    this.getIcon();
    //this.characters.isFavorite = !isFavorite;
    this.localStorageSvc.addOrRemoveFavorite(datacharacter);
    this.getIcon();
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
