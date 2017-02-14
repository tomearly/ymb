import { Component, OnInit } from '@angular/core';
import { TreatmentsService } from '../treatments.service';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.css']
})
export class PriceListComponent implements OnInit {

  prices: any = [];

  constructor(private treatmentsService: TreatmentsService ) { }

  ngOnInit() {
    this.treatmentsService.getAllTreatments().subscribe(treatmentData => {
      this.prices = treatmentData;
    });
  }
}
