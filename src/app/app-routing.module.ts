import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
  { path: "", component: UsersComponent },
  { path: "error", component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
