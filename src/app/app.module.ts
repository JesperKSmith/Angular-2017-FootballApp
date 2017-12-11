import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { SuperligaenComponent } from './components/superligaen/superligaen.component';
import { ClubDetailsComponent } from './components/club-details/club-details.component';

import { DataService } from './services/database/data.service';


import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SuperligaenComponent,
    ClubDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
