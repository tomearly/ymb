import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
// import { PlatformLocation } from '@angular/common';
import { AppComponent } from './app.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { HomeComponent } from './home/home.component';
import { TreatmentsService } from './treatments.service';
import { AboutmeService } from './aboutme.service';
import { TreatmentlistComponent } from './treatmentlist/treatmentlist.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
// We need to import the ReactiveFormsModule and import it

// Define the routes
const ROUTES = [
  {
    path: '',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: 'admin/treatments',
    component: TreatmentsComponent,
    pathMatch: 'full'
  },
  {
    path: 'treatments',
    component: TreatmentlistComponent
  },
  {
    path: 'admin/aboutme',
    component: AboutmeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TreatmentsComponent,
    HomeComponent,
    TreatmentlistComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [TreatmentsService, AboutmeService], // Add the posts service
  bootstrap: [AppComponent]
})
export class AppModule { }
