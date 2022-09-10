import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public modal = false;
  constructor() { }
  public abrirModal(): void {
    this.modal = true;
  }

  public cerrarModal(): void {
    this.modal = false;
  }

}
