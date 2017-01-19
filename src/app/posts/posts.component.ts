import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];

  public postsForm = this.fb.group({
    name: ['', Validators.required],
    id: ['', Validators.required],
    price: ['', Validators.required],
    _id: [ '', Validators.required]
  });

  constructor(private postsService: PostsService, public fb: FormBuilder) { }

  saveData(event) {
    this.postsService.saveData(JSON.stringify(this.postsForm.controls));
  }

  editData(event) {
    console.log(event);
    this.postsService.editData(JSON.stringify(event));
  }

  deleteData(event) {
    console.log(event);
    this.postsService.deleteData(JSON.stringify(event));
  }

  ngOnInit() {
    // Retrieve posts from the API
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
