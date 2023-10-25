import { Component } from '@angular/core';
import { OrganizationService } from 'src/app/services/organization.service';
import { Organization } from 'src/app/shared/models/Organization';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  organizations: Organization[] = [];
  constructor(private organizationService: OrganizationService) {
    this.organizations = organizationService.getAll();
  }

}
