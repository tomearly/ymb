import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Headers} from '@angular/http';

@Injectable()
export class AboutmeService {

  constructor(private http: Http) { }

  getAboutmeInfo() {
    return this.http.get('/api/aboutme')
      .map(res => res.json());
  }

  editData(inputData) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = inputData;
    console.log(`This is the ID - ${body._id}`);
    let _id = body._id;

    //REMOVE _id FROM BODY
    delete body._id;

    this.http
      .put(`/api/aboutme/${_id}`,
        body, {
          headers
        })
        .subscribe(data => {
          alert('About me section edited');
        }, error => {
          console.log(JSON.stringify(error.json()));
    });
  }

  newData(body) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http
      .post('/api/aboutme',
        body, {
          headers
        })
        .subscribe(data => {
          alert('New about me section added');
        }, error => {
          console.log(JSON.stringify(error.json()));
    });
  }
}
