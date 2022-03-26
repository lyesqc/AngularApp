import { Injectable } from '@angular/core';
import{ HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITodo } from '../dto/itodo';
const url ="https://jsonplaceholder.typicode.com/todos/";
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient:HttpClient) { 

  }
  public getToDoById( idTodo: string):Observable<ITodo>{

    return this.httpClient.get<ITodo>(url+idTodo);
  }

  public getAllToDos( ):Observable<ITodo[]>{

    return this.httpClient.get<ITodo[]>(url);
  }

  public postTodos(todo:ITodo){
    return this.httpClient.post(url, JSON.stringify(todo), {headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }});
  }
}
