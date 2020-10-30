import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { DataApi } from "./user.constant";
import { Comments } from "../users/types/comment.type";
import { Post } from "../users/types/post.type";
import { UserResponse } from "./types/usersResponse.type";

@Injectable({
  providedIn: "root"
})
export class UserService {
  userListAPI = `${DataApi}/users`;
  usersPostAPI = `${DataApi}/posts`;
  usersCommentsAPI = `${DataApi}/comments`;
  constructor(private http: HttpClient) { }

  // Error handling for the API is done through http intercepter

  getUsersList(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(this.userListAPI);
  }

  getUsersPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.usersPostAPI);
  }

  getcomments(): Observable<Comments[]> {
    return this.http.get<Comments[]>(this.usersCommentsAPI);
  }
}
