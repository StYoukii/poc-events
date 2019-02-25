import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './top-bar/sidenav/sidenav.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventComponent } from './events-list/event/event.component';
import { SearchFormComponent } from './top-bar/search-form/search-form.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ThreadsComponent } from './events-list/event/threads/threads.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    EventsListComponent,
    EventComponent,
    SearchFormComponent,
    TopBarComponent,
    ThreadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModulesPro.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
