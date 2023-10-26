import { Injectable } from '@angular/core';
import { Organization } from '../shared/models/Organization';
import { sample_organizations, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ORGANIZATIONS_BY_ID_URL, ORGANIZATIONS_BY_SEARCH_URL, ORGANIZATIONS_BY_TAG_URL, ORGANIZATIONS_TAGS_URL, ORGANIZATIONS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) { }
  // http send observable and we need to subscribe to it and after the connection to backend is finish it is give as or data or a error
  getAll(): Observable<Organization[]> {
    return this.http.get<Organization[]>(ORGANIZATIONS_URL);
  }
  getAllBySearchTerm(searchTerm: string) {
    return this.http.get<Organization[]>(ORGANIZATIONS_BY_SEARCH_URL + searchTerm);
  }
  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(ORGANIZATIONS_TAGS_URL);
  }
  getAllOrganizationsByTag(tag: string): Observable<Organization[]> {
    return tag === "All" ? this.getAll() :
      this.http.get<Organization[]>(ORGANIZATIONS_BY_TAG_URL + tag);
  }
  getOrganizationById(organizationId: string): Observable<Organization> {
    return this.http.get<Organization>(ORGANIZATIONS_BY_ID_URL + organizationId)
  }

}
