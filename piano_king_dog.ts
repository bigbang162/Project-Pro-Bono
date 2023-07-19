//Project Pro Bono

//File: project-pro-bono.ts

//Project Pro Bono

//1. Import core modules
import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

//2. Import services 
import { ProBonoService } from './pro-bono.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-project-pro-bono',
  templateUrl: './project-pro-bono.component.html',
  styleUrls: ['./project-pro-bono.component.css']
})
export class ProjectProBonoComponent implements OnInit {

  //3. Declare class variables
  projects: any[];
  selectedProjectId: number;
  volunteers: any[];
  selectedVolunteerId: number;
  @ViewChild('volunteerForm') volunteerForm: ElementRef;

  //4. Constructor
  constructor(
    private proBonoService: ProBonoService,
    private dataService: DataService,
    private router: Router, 
    private route: ActivatedRoute) { }

  //5. Lifecycle hooks
  ngOnInit() {
    //6. Fetch project list from ProBonoService
    this.proBonoService.getProjects().subscribe(
      (projects) => {
        this.projects = projects;
      }
    );
    //7. Fetch volunteers list from DataService
    this.dataService.getVolunteers().subscribe(
      (volunteers) => {
        this.volunteers = volunteers;
      }
    );
    //8. Get route params for selected project & volunteer
    this.route.params.subscribe(
      (params: Params) => {
        this.selectedProjectId = +params['projectId'];
        this.selectedVolunteerId = +params['volunteerId'];
      }
    );
  }

  //9. Method to handle select project click
  onSelectProject(projectId: number) {
    this.selectedProjectId = projectId;
  }

  //10. Method to handle submit volunteer click
  onSubmitVolunteer(volunteerId: number){
    //11. Update selected volunteer
    this.selectedVolunteerId = volunteerId;
    //12. Route to project volunteer page
    this.router.navigate(['/project', this.selectedProjectId, 'volunteer', this.selectedVolunteerId]);
    //13. Reset form
    this.volunteerForm.nativeElement.reset();
  }
}