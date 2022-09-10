import { Component, Input, OnInit } from '@angular/core';
import { LocationModalService } from 'src/app/@core/backends/shared/services/location-modal.service';
import { ModalService } from 'src/app/@core/backends/shared/services/modal.service';

@Component({
  selector: 'app-location-modal',
  templateUrl: './location-modal.component.html',
  styleUrls: ['./location-modal.component.scss']
})
export class LocationModalComponent implements OnInit {

  @Input() location: any;

  constructor(public locationmodalService: LocationModalService) { }

  ngOnInit(): void {
    console.log(location);

  }
  public cerrarModal(): void {
    this.locationmodalService.cerrarModal();
  }
}
