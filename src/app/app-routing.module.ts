import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { SuperligaenComponent } from './components/superligaen/superligaen.component';
import { ClubDetailsComponent } from './components/club-details/club-details.component';

const routes: Routes = [
  { path: 'superligaen', component: SuperligaenComponent },
  { path: 'details/:id', component: ClubDetailsComponent }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(
      routes, 
      { enableTracing: true } // Debugging = true
    ), 
    HttpClientModule 
  ],
  exports: [ 
    RouterModule 
  ],
  providers: [ HttpClient]
})
export class AppRoutingModule {
  

 }
