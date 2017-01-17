import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];

  constructor(private postsService: PostsService, public fb: FormBuilder) { }

  public postsForm = this.fb.group({
    name: ["", Validators.required],
    id: ["", Validators.required],
    price: ["", Validators.required]
  });

  saveData(event) {
    this.postsService.saveData(JSON.stringify(this.postsForm.controls));
  }

  ngOnInit() {
    // Retrieve posts from the API
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
