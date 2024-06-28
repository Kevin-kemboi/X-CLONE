import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() postId!: number;  // Using definite assignment assertion
  comments: any[] = [];  // Initialize to an empty array
  showComments: boolean = false;  // Initialize to false

  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void { }

  toggleComments(): void {
    this.showComments = !this.showComments;
    if (this.showComments) {
      this.commentsService.getComments(this.postId).subscribe(data => {
        this.comments = data;
      });
    }
  }
}
