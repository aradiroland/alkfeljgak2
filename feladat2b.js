"use strict" 
class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    setX(x){
        this.x = x;
    }

    setY(y){
        this.y = y;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }
}

var p = new Point(2,3);
console.log(p);

class Circle extends Point{
    constructor(x,y,r){
        super(x,y);
        this.r = r;
    }
    setR(r){
        this.r = r;
    }

    getArea(){
        return this.r * this.r * Math.PI;
    }
}

var c = new Circle(2,3,2)
console.log(c);
console.log(c.getArea());

var c2 = Object.create(c);
c2.setR(4);
console.log(Object.getPrototypeOf(c2));