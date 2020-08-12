import { Component, OnInit } from '@angular/core';
import { Square, Rectangle, Shape } from './shape';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  public num1:number;
  public num2:number;
  public result:number;
  public resultMessage:string;

  constructor() { }

  ngOnInit(): void {
  }

  areaSquare(){
    let shape = new Square(this.num1 , this.num2);
    this.calcArea(shape);
  }
  areaRectangle(){
    let shape = new Rectangle(this.num1 , this.num2);
    this.calcArea(shape);
  }

  circumferenceSquare(){
    let shape = new Square(this.num1 , this.num2);
    this.calcCircumference(shape);
  }
  circumferenceRectangle(){
    let shape = new Rectangle(this.num1 , this.num2);
    this.calcCircumference(shape);
  }


  private calcArea(shape : Shape){
    this.result = shape.calculateArea();
    this.resultMessage = "Area of";
    if(shape instanceof Square)
    {
      this.resultMessage += " Square ";
    }
    else if (shape instanceof Rectangle)
    {
      this.resultMessage += " Rectangle ";
    }
    this.resultMessage += "where side A =" + shape.SideA + " and side B = " + shape.SideB;
    this.checkValidity(shape);
  }

  private calcCircumference(shape : Shape){
    this.result = shape.calculateCircumference();
    this.resultMessage = "Circumference of";
    if(shape instanceof Square)
    {
      this.resultMessage += " Square ";
    }
    else if (shape instanceof Rectangle)
    {
      this.resultMessage += " Rectangle ";
    }
    this.resultMessage += "where side A =" + shape.SideA + " and side B = " + shape.SideB;
    this.checkValidity(shape);
  }

  private checkValidity(shape : Shape){
    if(!shape.validShape()){
      this.result = 0;
      this.resultMessage = "!!!!The dimensions are not valid!!!!";
    }
  }

}
