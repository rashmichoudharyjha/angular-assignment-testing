import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { Comments } from "./types/comment.type";
import { Post } from "./types/post.type";
import { Users } from "./types/user.type";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  usersList: Users[];
  allUserPosts: Post[];
  allComments: Comments[];
  isUserListLoaded: boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsersList().subscribe((list: any) => {
      if (list) {
        this.usersList = list.map(user => {
          return { id: user.id, name: user.name };
        });
        this.getAllPosts();
      }
    });
  }
  getAllPosts(): void {
    this.userService.getUsersPost().subscribe((post: Post[]) => {
      if (post) {
        this.allUserPosts = post;
        this.getAllComments();
      }
    });
  }

  getAllComments(): void {
    this.userService.getcomments().subscribe((comments: Comments[]) => {
      if (comments) {
        this.allComments = comments;
        this.isUserListLoaded = true;
      }
    });
  }
}
