import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'tryAngular';
  date = new Date();
  name:string = "dovi";

  constructor(){
    console.log("hey")
  }
  
}
