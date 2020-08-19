import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Angular',
      thought: 'Angular is cool',
      votes: 0,
    },
    {
      title: 'Corona',
      thought: 'Corona is awful',
      votes: 0,
    },
    {
      title: 'Life',
      thought: 'Life is beautiful',
      votes: 0,
    },
  ];

  showForm: boolean = false;

  constructor() {}
  // methods go here

  onUpVote(index: number) {
    this.posts[index].votes++;
  }

  onDelete(index: number) {
    this.posts.splice(index, 1);
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onAdd(post: Post) {
    this.posts.unshift(post);
    this.toggleForm()
  }

  ngOnInit(): void {}
}
