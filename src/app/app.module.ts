import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { LayoutComponent } from './layout/layout.component';
import { GallaryComponent } from './gallary/gallary.component';

import { NgxSpinnerModule } from "ngx-spinner";  
import { NgxPaginationModule } from 'ngx-pagination';
import { TourpackageComponent } from './tourpackage/tourpackage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FranchiseComponent } from './franchise/franchise.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnquiryComponent,
    LayoutComponent,
    GallaryComponent,
    TourpackageComponent,
    FranchiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
