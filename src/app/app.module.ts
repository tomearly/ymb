import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { HomeComponent } from './home/home.component';
import { TreatmentsService } from './treatments.service';
// We need to import the ReactiveFormsModule and import it
import { ReactiveFormsModule } from '@angular/forms';
import { TreatmentlistComponent } from './treatmentlist/treatmentlist.component';

// Define the routes
const ROUTES = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin/treatments',
    component: TreatmentsComponent
  },
  {
    path: 'treatments',
    component: TreatmentlistComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TreatmentsComponent,
    HomeComponent,
    TreatmentlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [TreatmentsService], // Add the posts service
  bootstrap: [AppComponent]
})
export class AppModule { }
