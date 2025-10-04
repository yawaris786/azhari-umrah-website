import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { GallaryComponent } from './gallary/gallary.component';
import { TourpackageComponent } from './tourpackage/tourpackage.component';
import { FranchiseComponent } from './franchise/franchise.component';

const routes: Routes = [
	{path : 'home', component : HomeComponent},
	{path : 'umrah', component : TourpackageComponent},
	{path : 'baghdad-umrah', component : TourpackageComponent},
	{path : 'popular-deals', component : TourpackageComponent},
	{path : 'gallary', component : GallaryComponent},
	{path : 'enquiry', component : EnquiryComponent},
	{path : 'offices', component : FranchiseComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
