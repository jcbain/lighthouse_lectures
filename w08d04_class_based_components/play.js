class Rectangle {
  constructor(length, width){
    this.length = length;
    this.width = width;
  }

  calculateArea(){
    return this.length * this.width;
  }

}

const rect = new Rectangle(10, 5);
console.log(rect.calculateArea())

class RectangularPrism extends Rectangle{
  constructor(length, width, height){
    super(length, width);
    this.height = height;
    // this.calculateVolume = this.calculateVolume.bind(this);
  }
  

  calculateVolume(){
    return this.calculateArea() * this.height;
  }
  
}

const prism = new RectangularPrism(4, 3, 5);
console.log(prism.calculateVolume())

// show that this drops out of scope
// const calculateVolume = prism.calculateVolume;
// console.log(calculateVolume())