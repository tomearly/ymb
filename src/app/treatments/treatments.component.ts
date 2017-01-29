import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TreatmentsService } from '../treatments.service';
// Require the thing
const stringify = require('json-stringify-safe');

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent implements OnInit {

  treatments: any = [];

  public treatmentsForm = this.fb.group({
    name: ['', Validators.required],
    id: ['', Validators.required],
    price: ['', Validators.required],
    _id: [ '', Validators.required]
  });

  constructor(private treatmentsService: TreatmentsService, public fb: FormBuilder) { }

  newData(event) {
    this.treatmentsService.newData(stringify(this.treatmentsForm.controls));
  }

  editData(event) {
    this.treatmentsService.editData(JSON.stringify(event));
  }

  ngOnInit() {
    // Retrieve Treatment from the API
    this.treatmentsService.getAllTreatments().subscribe(treatmentData => {
      this.treatments = treatmentData;
    });
  }
}
