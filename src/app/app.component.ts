import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';

  public num1: number;
  public num2: number;
  public answer: number;

  add(){
    console.log(this.num2);
    this.answer = this.num1+ this.num2;
  }

  sub(){
    this.answer = this.num1 - this.num2;
  }

  div(){

    this.answer = this.num1 / this.num2;
  }

  multi(){
  
    this.answer = this.num1 * this.num2;
  }
}
