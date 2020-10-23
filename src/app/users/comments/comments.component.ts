import { Component, Input } from "@angular/core";
import { Comments } from "../types/comment.type";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"]
})
export class CommentsComponent {
  @Input() commentList: Comments[];
}
