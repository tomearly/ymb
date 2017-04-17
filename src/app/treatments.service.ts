import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Headers} from '@angular/http';

@Injectable()
export class TreatmentsService {

  constructor(private http: Http) { }

  // Get all treatments from the API
  getAllTreatments() {
    return this.http.get('/api/treatment')
      .map(res => res.json());
  }

  deleteData(_id) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http
      .delete(`/api/treatments/${_id}`,
        {
          headers
        })
      .subscribe(data => {
        alert('Treatment deleted');
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }

  editData(inputData) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = inputData;

    let _id = body._id;
    //REMOVE _id FROM BODY
    delete body._id;

    this.http
      .put(`/api/treatment/${_id}`,
          body, {
          headers
        })
        .subscribe(data => {
          alert('Treatment edited');
        }, error => {
          alert('Could not edit treatment');
          console.log(JSON.stringify(error.json()));
    });
  }

  newData(body) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http
      .post('/api/treatment',
          body, {
          headers
        })
        .subscribe(data => {
          alert('New treatment added');
        }, error => {
          alert('Could not save new treatment');
          console.log(JSON.stringify(error.json()));
    });
  }
}
