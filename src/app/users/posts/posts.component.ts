import { Component, Input } from "@angular/core";
import { Comments } from "../types/comment.type";
import { Post } from "../types/post.type";
import { LABELS } from "./posts.constants";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent {
  @Input() allPosts: Post[];
  @Input() allComments: Comments[];
  @Input() set userId(value: number) {
    this.selectedUserId = value;
    this.getAllSelectedUserPosts(value);
  }

  labels = LABELS;
  selectedUserId: number;
  selectedUserPosts: Post[];
  showAllPosts: boolean = false;

  getAllSelectedUserPosts(user: number): void {
    this.selectedUserPosts = this.allPosts.filter(post => post.userId === user);
    this.showAllPosts = false;
  }

  showRestPosts(): void {
    this.showAllPosts = true;
  }

  getCommentsforpost(postID: number): Comments[] {
    return this.allComments.filter(comment => comment.postId === postID);
  }
}
