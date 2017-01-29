import { Component, OnInit } from '@angular/core';
import { AboutmeService } from '../aboutme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  aboutmeList: any = [];

  constructor(private aboutmeService: AboutmeService ) { }

  ngOnInit() {
    this.aboutmeService.getAboutmeInfo().subscribe(aboutmeInfo => {
      this.aboutmeList = aboutmeInfo;
    });
  }

}
