import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashbordComponent } from "./pages/dashbord/dashbord.component";
import { MailingComponent } from "./pages/mailing/mailing.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'dashboard', component: DashbordComponent },
      { path: 'mailing', component: MailingComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule { }