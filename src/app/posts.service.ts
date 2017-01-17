import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('/api/posts')
      .map(res => res.json());
  }

  saveData(postData) {
        var body = `name=${postData.name}&id=${postData.id}`;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        this.http
          .post('/api/posts',
            body, {
              headers: headers
            })
            .subscribe(data => {
                  alert('ok');
            }, error => {
                console.log(JSON.stringify(error.json()));
            });
  }
}
