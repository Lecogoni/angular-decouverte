import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routing.module';
import { MessagingModule } from './messaging/messaging.module';
import { PagesModule } from './pages/pages.module';
import { UsersModule } from './users/users.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    PagesModule,
    UsersModule,
    MessagingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }