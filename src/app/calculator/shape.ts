export abstract class Shape {

    protected _sideA : number;
    protected _sideB : number;

    get SideA() {return this._sideA;}
    get SideB() {return this._sideB;}

    public constructor(sideA : number, sideB : number){
        this._sideA = sideA;
        this._sideB = sideB;
    }



    /* 
     * Forces objects that extends Shape, 
     * to implement Area and Circumference calculations.
    */
    abstract calculateArea() : number;
    abstract calculateCircumference() : number;
    abstract validShape() : boolean;


}

export class Square extends Shape {
    /**
     * calculateArea: Calculates the shapes area. 
     * Returns : number 
    */
    public calculateArea() {
        let result : number = this._sideA * this._sideA;
        return result;
    }

    /**
     * calculateCircumference: Calculates the shapes Circumference. 
     * Returns : number 
    */
    public calculateCircumference() {
        let result : number = this._sideA * 4;
        return result;
    }

    /**
     * validShape: Checks if the shape has valid dimensions. 
     * Returns : boolean. 
    */
    public validShape(){
        if(this._sideA != this._sideB){
            return false;
        }
        else
        {
            return true;
        }
    }
}

export class Rectangle extends Shape {
    /**
     * calculateArea: Calculates the shapes area. 
     * Returns : number 
    */
    public calculateArea() {
        let result : number = this._sideA * this._sideB;
        return result;
    }

    /**
     * calculateCircumference: Calculates the shapes Circumference. 
     * Returns : number 
    */
    public calculateCircumference() {
        let result : number = 2 * (this._sideA + this._sideB);
        return result;
    }

    /**
     * validShape: Checks if the shape has valid dimensions. 
     * Returns : boolean. 
    */
   public validShape(){
    if(this._sideA == this._sideB){
        return false;
    }
    else
    {
        return true;
    }
}
}