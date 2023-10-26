import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizationService } from 'src/app/services/organization.service';
import { Organization } from 'src/app/shared/models/Organization';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  organizations: Organization[] = [];
  constructor(private organizationService: OrganizationService, activatedRoute: ActivatedRoute) {
    // subscribe means any time the params changed to call the function inside subscribe
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.organizations = this.organizationService.getAllBySearchTerm(params.searchTerm);
      } else if (params.tag) {
        this.organizations = this.organizationService.getAllOrganizationsByTag(params.tag);
      } else {
        this.organizations = organizationService.getAll();

      }
    })

  }

  // we need for search to listen to the route -ActivatedRoute

}
