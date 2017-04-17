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

    private showDialog = true;
    private selectedAboutMe = {
      _id: null
    };

    public aboutmeForm = this.fb.group({
      description: ['', Validators.required]
    });

    public aboutmeEditForm = this.fb.group({
      _id: ['', Validators.required],
      description: ['', Validators.required]
    });

    constructor(private aboutmeService: AboutmeService, public fb: FormBuilder) { }

    deleteData(_id) {
      console.log(_id);
      this.aboutmeService.deleteData(_id);
    }

    newData() {
      this.aboutmeService.newData(this.aboutmeForm.value);
    }

    editData() {
      this.aboutmeService.editData(this.aboutmeEditForm.value);
    }

    ngOnInit() {
      // Retrieve Treatment from the API
      this.aboutmeService.getAboutmeInfo().subscribe(aboutmeInfo => {
        this.aboutmelist = aboutmeInfo;
      });
    }

}
