import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AboutmeService } from '../aboutme.service';

@Component({
  selector: 'app-aboutmelist',
  templateUrl: './aboutmelist.component.html',
  styleUrls: ['./aboutmelist.component.css']
})
export class AboutmeListComponent implements OnInit {

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
