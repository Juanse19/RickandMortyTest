import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/@core/backends/shared/services/local-storage.service';
import { Character } from 'src/app/@core/models/data.interface'

@Component({
  selector: 'app-favorite-character',
  templateUrl: './favorite-character.component.html',
  styleUrls: ['./favorite-character.component.scss']
})
export class FavoriteCharacterComponent implements OnInit {

  public favorite!: any;
  public characters?: any;
  public loading = true;
  public location?: any;

  constructor(private localStorageSvc: LocalStorageService) { }

  ngOnInit(): void {
     this.getFavoriteCharacter();
  }

  getIcon(): string {
    return this.characters?.isFavorite ? 'heart-solid.svg' : 'heart.svg';
  }

  getFavoriteCharacter() {
   this.favorite = this.localStorageSvc.getFavoritesCharacters()
   this.loading = false;
   console.log('favorite', this.favorite);
  }

  toggleFavorite(character: any): void {
    let datacharacter = character
    const isFavorite = this.favorite.isFavorite;
    this.getIcon();
    this.localStorageSvc.addOrRemoveFavorite(datacharacter);
    this.getFavoriteCharacter();
  }

}
