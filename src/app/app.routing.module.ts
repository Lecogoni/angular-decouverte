import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SingleMessageComponent } from "./messaging/single-message/single-message.component";
import { WrittingComponent } from "./messaging/writting/writting.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { MailingComponent } from "./pages/mailing/mailing.component";
import { UserComponent } from "./pages/user/user.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
      { path: 'mailing', component: MailingComponent },
      { path: 'user', component: UserComponent },
      { path: 'new message', component: WrittingComponent },
      { path: 'singlemessage/:id', component: SingleMessageComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule { }