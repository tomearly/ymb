import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Headers} from '@angular/http';

@Injectable()
export class AboutmeService {

  constructor(private http: Http) { }

  // Get all treatments from the API
  getAboutmeInfo() {
    return this.http.get('/api/aboutme')
      .map(res => res.json());
  }

  editData(inputData) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = inputData;

    this.http
      .put('/api/aboutme',
        body, {
          headers
        })
        .subscribe(data => {
          alert('ok');
        }, error => {
          console.log(JSON.stringify(error.json()));
    });
  }

  newData(inputData) {
    console.log(inputData);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = inputData;

    this.http
      .post('/api/aboutme',
        body, {
          headers
        })
        .subscribe(data => {
          alert('ok');
        }, error => {
          console.log(JSON.stringify(error.json()));
    });
  }
}
