import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
    // here we define observable - the return type of organization.services; then we only need to subscribe ones for all of them
    let organisatiosObservable: Observable<Organization[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        organisatiosObservable = this.organizationService.getAllBySearchTerm(params.searchTerm);
      } else if (params.tag) {
        organisatiosObservable = this.organizationService.getAllOrganizationsByTag(params.tag);
      } else {
        organisatiosObservable = organizationService.getAll();

      }
      organisatiosObservable.subscribe((serverOrganizations) => {
        this.organizations = serverOrganizations;
      })
    })

  }

  // we need for search to listen to the route -ActivatedRoute

}
