import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPerson } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PeopleClientService {

  private baseUrl: string = 'http://ng-train-rsoft-todo.westeurope.azurecontainer.io/api/people';

  constructor(private http: HttpClient) { }

  public getPeople(): Observable<Array<IPerson>> {
    return <Observable<Array<IPerson>>>this.http.get(this.baseUrl);
  }
}
