import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { HomeComponent } from './home/home.component';
import { TreatmentsService } from './treatments.service';
import { AboutmeService } from './aboutme.service';
import { TreatmentListComponent } from './treatmentlist/treatmentlist.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AboutmeListComponent } from './aboutmelist/aboutmelist.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { PriceListComponent } from './pricelist/pricelist.component';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';
import { FilterDataPipe } from './filterdata.pipe';
import { TopnavComponent } from './topnav/topnav.component';

// We need to import the ReactiveFormsModule and import it


@NgModule({
  declarations: [
    AppComponent,
    TreatmentsComponent,
    HomeComponent,
    TreatmentListComponent,
    AboutmeComponent,
    AboutmeListComponent,
    ShowcaseComponent,
    PriceListComponent,
    PhotoUploadComponent,
    FilterDataPipe,
    TopnavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [TreatmentsService, AboutmeService], // Add the posts service
  bootstrap: [AppComponent]
})
export class AppModule { }
