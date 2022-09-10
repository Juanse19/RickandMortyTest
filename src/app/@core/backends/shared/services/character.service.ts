import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character, Location } from 'src/app/@core/models/data.interface';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private urlApi = environment.urlApi;
  public contador = 2;

  constructor(private httpClient: HttpClient,
             private localStorageService: LocalStorageService) { }

  public getcharcters(page: number): Observable<any> {
    if (!page){
      page = 1;
    }
    return this.httpClient.get<Character[]>(`${this.urlApi}/character/?page=${page}`);
  }

  public contadorPage(): void {
    if (this.contador <= 34) {
      this.contador++;
    }
  }
  public contadorDismiss(): void {
    if (this.contador > 1){
      this.contador--;
    }
  }


}
