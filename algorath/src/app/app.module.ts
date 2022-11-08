import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import { ConnectUsersComponent } from './connect-users/connect-users.component';
import { ListConnectionsComponent } from './list-connections/list-connections.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListUsersComponent,
    CreateUsersComponent,
    ConnectUsersComponent,
    ListConnectionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
