import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NbSidebarModule, NbThemeModule } from '@nebular/theme';

import { Routes, RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { MessagingModule } from './messaging/messaging.module';
import { LayoutModule } from './layout/layout.module';
import { TemplateComponent } from './layout/template/template.component';


const appRoutes: Routes = [
  // { path: '', redirectTo: 'app', pathMatch: 'full' },
  //{ path: '', component: LayoutViewComponent, pathMatch: 'full' },
  //{ path: 'inbox', component: InboxComponent },
  { path: 'blog', component: TemplateComponent }
]


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NbThemeModule.forRoot(),
    MessagingModule,
    LayoutModule,
    NbSidebarModule.forRoot(),
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }