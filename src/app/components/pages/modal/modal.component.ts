import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/@core/backends/shared/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() character: any;

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
  }
  public cerrarModal(): void {
    this.modalService.cerrarModal();
  }

}
