import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TreatmentsService } from '../treatments.service';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent implements OnInit {

  treatments: any = [];

  private showDialog = true;
  private selectedTreatment = {
    _id: null
  };

  public treatmentsForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      id: ['', Validators.required],
      inactive: ['', Validators.required],
      gender: ['', Validators.required]
    });

  public treatmentsEditForm = this.fb.group({
    _id: ['', Validators.required],
    name: ['', Validators.required],
    price: ['', Validators.required],
    id: ['', Validators.required],
    inactive: ['', Validators.required],
    gender: ['', Validators.required]
  });

  constructor(private treatmentsService: TreatmentsService, public fb: FormBuilder) { }

  newData() {
    this.treatmentsService.newData(this.treatmentsForm.value);
  }

  editData() {
    this.treatmentsService.editData(this.treatmentsEditForm.value);
  }

  ngOnInit() {
    // Retrieve Treatment from the API
    this.treatmentsService.getAllTreatments().subscribe(treatmentData => {
      this.treatments = treatmentData;
    });
  }
}
