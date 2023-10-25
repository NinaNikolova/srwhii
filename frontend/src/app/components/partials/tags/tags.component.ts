import { Component } from '@angular/core';
import { OrganizationService } from 'src/app/services/organization.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags?: Tag[];
  constructor(organizationService: OrganizationService) {
    this.tags = organizationService.getAllTags();
  }
}