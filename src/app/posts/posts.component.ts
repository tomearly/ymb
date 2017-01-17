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
    id: ["", Validators.required]
  });

  saveData(event) {
    console.log(event);
    console.log(this);
    console.log(JSON.stringify(this.postsForm.controls));
    this.postsService.saveData({ 'id': '123',  'name': 'abcdef'});
  }

  ngOnInit() {
    // Retrieve posts from the API
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
