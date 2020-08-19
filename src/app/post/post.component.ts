import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input() postRef: Post;
@Output() deleted = new EventEmitter<void>();
@Output() upVoted = new EventEmitter<void>();

  constructor() { }

upVotePost(){
  this.upVoted.emit();
}

  deletePost(){
    this.deleted.emit();
  }

  ngOnInit(): void {
  }
}