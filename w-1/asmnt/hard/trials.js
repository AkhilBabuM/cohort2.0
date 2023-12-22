class Calculator {
  constructor(){this.result = 0}

  add(num){
    this.result += num
  }
  subtract(num){
    this.result -= num
  }
  multiply(num){
    this.result *= num
  }
  divide(num){
    if(num===0)
      throw new RangeError("wtf bruh")
    this.result /= num
  }
  clear(num){
    this.result = 0
  }
  print(){
    return this.result
  }
  calculate(string){
    string = string.replace(/\s+/g,'').trim();
    console.log(eval(string))
  }

}

let calculator = new Calculator()
calculator.add(5)
calculator.add(5)
calculator.subtract(2)

str = "(4+   3)*2"
calculator.calculate(str)
