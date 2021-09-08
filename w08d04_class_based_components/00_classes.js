// 1 declaring classes
// 1 much like there are function key words
// 1 there is a class keyword
// class Rectangle {};

// 2 to instantiate a new Rectangle
// 2 and I can log it to tell us what type of class it is
// const myRectangle = new Rectangle();
// console.log(myRectangle);

// 3 but we want to store some key value pairs in it
// 3 so we get a method that we call that get's 
// 3 passed our parameters any time our class is instantiated
class Rectangle {
  constructor(length, width) {
    // 4 to make reference to an object
    // 4 while inside an object we use `this`
    // 4 so we can store these parameters as 
    // 4 keys on our instantiated class
    this.length = length;
    this.width = width;
  }
  
  // 6 but we may want other functionality
  // 6 we may want a method that calculates 
  // 6 the area
  calculateArea() {
    return this.length * this.width;
  }
  // 7 and now we can test that out
}

// 5 and we can test that out
const rect = new Rectangle(5,4); // anything we pass here get passed directly to the constructor
console.log(rect);
// 5 or I can explicitly reference those
// 5 values using . notation
console.log(rect.length, rect.width)

// 8 and this should work
console.log(rect.calculateArea())


// 9 now what if i want to extend this functionality
// 9 to another class... a sub class
// 9 what if we want to create a 3d rectangle
// 9 a rectangularprism perhaps
// 9 we can use the extends keyword to 
// 9 derive a class from our Rectangle
class RectangularPrism extends Rectangle {
  // 10 but i'm extending the rectangle
  // 10 but i don't just need what a rectangle
  // 10 needed. Along with lenght and width
  // 10 i need a third dimension, height
  constructor(length, width, height){
    // 11 what will happen here? 
    // this.height = height;
    // 11 must call super constructor;
    // 11 i first have to instantiate the parent class
    // 11 if we actually declare a constructor
    super(length, width)
    this.height = height;
    // 12 now this should work
  }

  // 13 now i want to be able to calculate the volume 
  // 13 because i'm working with a 3d object
  calculateVolume() {
    // 13 we can now use those attributes to calculate the volume
    // return this.width * this.length * this.height;

    // 14 but wait, we have a way to calculate area
    // 14 can't we just use that and multiply on height?
    // 14 yup
    return this.calculateArea() * this.height;
  }
}

// 15 now lets try this out
const myPrism = new RectangularPrism(4,5, 2)
console.log(myPrism.calculateVolume())