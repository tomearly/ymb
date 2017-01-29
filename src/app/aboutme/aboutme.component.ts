import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AboutmeService } from '../aboutme.service';
// Require the thing
const stringify = require('json-stringify-safe');

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

    aboutmelist: any = [];

    public aboutmeForm = this.fb.group({
      description: ['', Validators.required],
      _id: [ '', Validators.required]
    });

    constructor(private aboutmeService: AboutmeService, public fb: FormBuilder) { }

    newData(event) {
      this.aboutmeService.newData(stringify(this.aboutmeForm.controls));
    }

    editData(event) {
      this.aboutmeService.editData(JSON.stringify(event));
    }

    ngOnInit() {
      // Retrieve Treatment from the API
      this.aboutmeService.getAboutmeInfo().subscribe(aboutmeInfo => {
        this.aboutmelist = aboutmeInfo;
      });
    }

}
