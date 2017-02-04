import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TreatmentsService } from '../treatments.service';
// Require the thing
const stringify = require('json-stringify-safe');

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent implements OnInit {

  treatments : any = [];

  public treatmentsForm = this.fb.group({
      name: ['', [<any>Validators.required]],
      price: ['', [<any>Validators.required]],
      id: ['', [<any>Validators.required]],
      inactive: ['', [<any>Validators.required]],
      gender: ['', [<any>Validators.required]]
    });

  constructor(private treatmentsService: TreatmentsService, public fb: FormBuilder) { }

  newData(event) {
    this.treatmentsService.newData(this.treatmentsForm.value);
  }

  editData(event) {
    this.treatmentsService.editData(this.treatmentsForm.value);
  }

  ngOnInit() {
    //Retrieve Treatment from the API
    this.treatmentsService.getAllTreatments().subscribe(treatmentData => {
      this.treatments = treatmentData;
    });
  }
}
