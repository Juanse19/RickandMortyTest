import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationModalService {

  public modal = false;
  private urlApi = environment.urlApi;

  constructor(private httpClient: HttpClient) { }

  public abrirModal(): void {
    this.modal = true;
  }

  public cerrarModal(): void {
    this.modal = false;
  }

  public getLocacion(id: string) {
    return this.httpClient.get<Location>(`${this.urlApi}/location/${id}`);
  }

}
