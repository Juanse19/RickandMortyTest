import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character } from 'src/app/@core/models/data.interface';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

const MY_FAVORITES = 'myFavorites';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private charactersFavSubject = new BehaviorSubject<Character[] | null>(null);
  charactersFav$ = this.charactersFavSubject.asObservable();

  constructor(private toastrSvc: ToastrService) {
    this.initialStorage();
  }

  addOrRemoveFavorite(character: Character): void {

    const { id } = character;
    console.log('id', { id });
    const currentsFav = this.getFavoritesCharacters();
    const found = !!currentsFav.find((fav: Character) => fav.id === id);
    found ? this.removeFromFavorite(id) : this.addToFavorite(character);
  }

  private addToFavorite(character: Character): void {
    try {
      const currentsFav = this.getFavoritesCharacters();
      localStorage.setItem(MY_FAVORITES, JSON.stringify([...currentsFav, character]));
      this.charactersFavSubject.next([...currentsFav, character]);

      Swal.fire({
        title: `${character.name} personaje añadido a favoritos`,
        timer: 1000,
        timerProgressBar: true,
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('RickAndMorty')
        }
      })

    } catch (error) {
      console.log('Error al guardar en localStorage', error);
      Swal.fire({
        title: `Error al guardar en localStorage ${error} `,
        timer: 2000,
        timerProgressBar: true,
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('RickAndMorty')
        }
      })

    }
  }

  private removeFromFavorite(id: number): void {
    try {
      const currentsFav = this.getFavoritesCharacters();
      const characters = currentsFav.filter((item: any) => item.id !== id);
      localStorage.setItem(MY_FAVORITES, JSON.stringify([...characters]));
      this.charactersFavSubject.next([...characters]);

      Swal.fire({
        title: `Personaje eliminado de favoritos`,
        timer: 2000,
        timerProgressBar: true,
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('RickAndMorty')
        }
      })

    } catch (error) {
      console.log('Error al eliminar localStorage', error);

      Swal.fire({
        title: `Error al eliminar localStorage ${error} `,
        timer: 2000,
        timerProgressBar: true,
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('RickAndMorty')
        }
      })

    }

  }

  getFavoritesCharacters(): any {
    try {
      const charactersFav = JSON.parse(localStorage.getItem(MY_FAVORITES) || "[]");
      this.charactersFavSubject.next(charactersFav);
      return charactersFav;
    } catch (error) {
      console.log('Error al obtener favoritos de localStorage', error);
    }

  }

  clearStorage(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.log('Error limpiar localStorage', error);
    }
  }

  private initialStorage(): void {
    const currents = JSON.parse(localStorage.getItem(MY_FAVORITES) || "[]");
    if (!currents) {
      localStorage.setItem(MY_FAVORITES, JSON.stringify([]));
    }
    this.getFavoritesCharacters();
  }

}
