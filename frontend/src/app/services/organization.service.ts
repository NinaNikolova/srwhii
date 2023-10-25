import { Injectable } from '@angular/core';
import { Organization } from '../shared/models/Organization';
import { sample_organizations, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor() { }
  getAll(): Organization[] {
    return sample_organizations;
  }
  getAllBySearchTerm(searchTerm: string) {
    return this.getAll().filter(o => o.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  getAllTags(): Tag[] {
    return sample_tags;
  }
  getAllOrganizationsByTag(tag: string): Organization[] {
    return tag === "All" ? this.getAll() :
      this.getAll().filter(o => o.tags?.includes(tag));
  }

}
