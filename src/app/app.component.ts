import { Component } from '@angular/core';
import {Todo} from "./todo"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string = 'tryAngular';
  todoValue:string = ""
  list:Todo[] = []

  unOnInit(){
    this.list = [];
    this.todoValue = "";
  }
}
