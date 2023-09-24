import { Component } from '@angular/core';
import {BioService} from "../../main/services/bio.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bio$ = this.bioService.getBio();

  constructor(private bioService: BioService) { }
}
