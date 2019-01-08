import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITodo } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodoClientService {

  private baseUrl: string = 'http://ng-train-rsoft-todo.westeurope.azurecontainer.io/api/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Array<ITodo>> {
    return <Observable<Array<ITodo>>>this.http.get(this.baseUrl);
  }

  saveTodo(todo: ITodo): Observable<ITodo> {
    if (todo.id>0) {
      return <Observable<ITodo>>this.http.patch(this.baseUrl + '/' + todo.id, todo);
    } else {
      return <Observable<ITodo>>this.http.post(this.baseUrl, todo);
    }
  }

  deleteTodo(todo: ITodo): Observable<Object> {
    return this.http.delete(this.baseUrl + '/' + todo.id);
  }
}
