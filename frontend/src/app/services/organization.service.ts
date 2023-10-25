import { Injectable } from '@angular/core';
import { Organization } from '../shared/models/Organization';
import { sample_organizations } from 'src/data';

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

}
