import { i18nMetaToJSDoc, parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITodo } from '../dto/itodo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  todos:ITodo[]=[];
  itemId: number = 0;
  updateId="0";
  title="";
  constructor(private route: ActivatedRoute, private todoService :TodoService) {
    this.route.params.subscribe(params =>this.itemId = params['itemId']);
    
    todoService.getAllToDos().subscribe(todos => {
      console.log(todos);
      this.todos =todos;
    });
  }

  ngOnInit(): void {
  }
  getItemDetail(id:any, title:any){
    console.log("selected itemId :"+id);
    this.updateId = id;
    this.title = title;
    console.log("update title with value="+this.title);
  }
  save(todo:any, newTitle:any){
    console.log("new value :"+newTitle);
    this.updateId="";
    todo.title=newTitle;
    this.todoService.postTodos(todo);
  }
}
