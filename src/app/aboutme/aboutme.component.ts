import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AboutmeService } from '../aboutme.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

    aboutmelist: any = [];

    public aboutmeForm = this.fb.group({
      description: ['', Validators.required]
    });

    constructor(private aboutmeService: AboutmeService, public fb: FormBuilder) { }

    newData() {
      this.aboutmeService.newData(this.aboutmeForm.value);
    }

    editData() {
      this.aboutmeService.editData(this.aboutmeForm.value);
    }

    ngOnInit() {
      // Retrieve Treatment from the API
      this.aboutmeService.getAboutmeInfo().subscribe(aboutmeInfo => {
        this.aboutmelist = aboutmeInfo;
      });
    }

}
