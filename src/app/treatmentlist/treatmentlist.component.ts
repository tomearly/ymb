import { Component, OnInit } from '@angular/core';
import { TreatmentsService } from '../treatments.service';
import { FilterDataPipe } from '../filterdata.pipe';

@Component({
  selector: 'app-treatmentlist',
  templateUrl: './treatmentlist.component.html',
  styleUrls: ['./treatmentlist.component.css']
})
export class TreatmentlistComponent implements OnInit {

  treatments: any = [];

  constructor(private treatmentsService: TreatmentsService ) { }

  ngOnInit() {
    this.treatmentsService.getAllTreatments().subscribe(treatmentData => {
      this.treatments = treatmentData;
    });
  }
}
