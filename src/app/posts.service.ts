import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('/api/posts')
      .map(res => res.json());
  }

  editData(postData) {
    console.log(postData);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = postData;

    this.http
      .put('/api/posts',
        body, {
          headers: headers
        })
        .subscribe(data => {
          alert('ok');
        }, error => {
          console.log(JSON.stringify(error.json()));
    });
  }

  saveData(postData) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = postData;

    this.http
      .post('/api/posts',
        body, {
          headers
        })
        .subscribe(data => {
          alert('ok');
        }, error => {
          console.log(JSON.stringify(error.json()));
    });
  }

  deleteData(postData) {
    console.log(postData);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let _id = postData._id;

    this.http
      .put('/api/post_remove',
        {
          _id: _id
        }, {
          headers: headers
        })
        .subscribe(data => {
          alert('ok');
        }, error => {
          console.log(JSON.stringify(error.json()));
    });
  }
}
