import { Component, OnInit } from '@angular/core';
import { TreatmentsService } from '../treatments.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'magicPipe' })
export class MagicPipe implements PipeTransform {
  transform(maleTreatments: any[]) {
    return maleTreatments.filter(treatment => treatment.gender == 'male');
  }
}

@Pipe({
  name: 'magicImpurePipe',
  pure: false
})
export class MagicImpurePipe extends MagicPipe {}

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
