import {Component, OnInit} from '@angular/core';
import {ProjectsService} from "../../main/services/projects.service";
import {Project} from "../../main/model/project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }
}
