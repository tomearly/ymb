import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { HomeComponent } from './home/home.component';
import { TreatmentsService } from './treatments.service';
import { AboutmeService } from './aboutme.service';
import { TreatmentlistComponent } from './treatmentlist/treatmentlist.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AboutmeListComponent } from './aboutmelist/aboutmelist.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { PriceListComponent } from './pricelist/pricelist.component';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';
import { FileUploadModule } from "ng2-file-upload";
import { CloudinaryModule, CloudinaryConfiguration, provideCloudinary } from '@cloudinary/angular';
import cloudinaryConfiguration from './config';

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
    component: TreatmentlistComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin/aboutme',
    component: AboutmeComponent,
    pathMatch: 'full'
  },
  {
    path: 'showcase',
    component: ShowcaseComponent,
    pathMatch: 'full'
  },
  {
    path: 'aboutme',
    component: AboutmeListComponent,
    pathMatch: 'full'
  },
  {
    path: 'pricelist',
    component: PriceListComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin/photo-upload',
    component: PhotoUploadComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TreatmentsComponent,
    HomeComponent,
    TreatmentlistComponent,
    AboutmeComponent,
    AboutmeListComponent,
    ShowcaseComponent,
    PriceListComponent,
    PhotoUploadComponent
  ],
  imports: [
    FileUploadModule,
    CloudinaryModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [TreatmentsService, AboutmeService, provideCloudinary(require('cloudinary-core'), cloudinaryConfiguration as CloudinaryConfiguration)], // Add the posts service
  bootstrap: [AppComponent]
})
export class AppModule { }
