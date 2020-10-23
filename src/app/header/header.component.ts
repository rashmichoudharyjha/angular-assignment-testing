import { Component } from "@angular/core";
import { LABELS } from "./header.constant";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  labels = LABELS;
}
