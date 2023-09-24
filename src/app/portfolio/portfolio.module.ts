import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from "./home/home.component";
import {ProjectsComponent} from './projects/projects.component';
import {ContactMeComponent} from './contact-me/contact-me.component';
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    ContactMeComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class PortfolioModule { }
