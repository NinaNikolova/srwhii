import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizationService } from 'src/app/services/organization.service';
import { Organization } from 'src/app/shared/models/Organization';

@Component({
  selector: 'app-organization-page',
  templateUrl: './organization-page.component.html',
  styleUrls: ['./organization-page.component.css']
})
export class OrganizationPageComponent {
  organization!: Organization;
  constructor(activatedRoute: ActivatedRoute, organizationService: OrganizationService) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.organization = organizationService.getOrganizationById(params.id);
      }
    })
  }
}
