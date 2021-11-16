//Calculator functionality using Function constructor

function Product(num1, num2) {
  this.num1 = num1;

  this.num2 = num2;

  this.add = () => this.num1 + this.num2;
  this.sub = () => this.num1 - this.num2;
  this.mult = () => this.num1 * this.num2;
  this.div = () => this.num1 / this.num2;
}

// module.exports=Product;
const product1 = new Product(20, 20);
console.log(product1.add());
console.log(product1.sub());
console.log(product1.mult());
console.log(product1.div());
// console.log(typeof (product1));
