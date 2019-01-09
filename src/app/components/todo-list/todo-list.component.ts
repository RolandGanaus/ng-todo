import { Component, OnInit } from '@angular/core';
import { ITodo, IPerson } from 'src/app/interfaces';
import { TodoClientService, PeopleClientService } from 'src/app/services';
import { ITodoFilter } from 'src/app/interfaces/todo-filter';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todoFilter: ITodoFilter = {
    done:null,
    assignedTo: null
  };
  public todos: Array<ITodo>;
  public people: Array<IPerson> = [];
  public newTodo: ITodo = this.createTodo();
  public doneCount: number = 0;

  constructor(private todoClient: TodoClientService, private peopleClient: PeopleClientService) { }

  ngOnInit() {
    this.loadTodos();
    this.peopleClient.getPeople().subscribe(result => this.people = result);
  }

  public refreshFilter() {
    this.todoFilter = {...this.todoFilter};
  }

  public deleteFilter() {
    this.todoFilter = {
      done: null,
      assignedTo: null
    }
  }

  public save() {
    this.saveTodo(this.newTodo, () => this.newTodo = this.createTodo())
  }

  public saveTodo(todo: ITodo, callback: () => void) {
    this.todoClient.saveTodo(todo).subscribe(result => {
      if (callback) {
        callback();
      }
      this.loadTodos();
    });
  }

  public editTodo(todo: ITodo) {
    this.newTodo = {...todo};
  }

  public deleteTodo(todo: ITodo) {
    this.todoClient.deleteTodo(todo).subscribe(() => this.loadTodos());
  }

  public loadTodos(): void {
    this.todoClient.getTodos().subscribe(result => {
      this.todos = result;
      this.doneCount = result.filter(value => value.done).length;
    });
  }

  private createTodo(): ITodo {
    return {
      id: null,
      description: null,
      assignedTo: null
    };
  }

}
