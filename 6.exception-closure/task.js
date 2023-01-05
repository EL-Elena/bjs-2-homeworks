function parseCount(numberForParse) {
  if(isNaN(numberForParse)) {
    throw new Error("Невалидное значение");
  }  
  return Number.parseFloat(numberForParse); 
}

function validateCount(newNumberForParse) {
  try {
    return parseCount(newNumberForParse);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
    if((a + b) < c || (a + c) < b || (c + b) < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area () {
    return +Math.sqrt(this.perimeter / 2 * ((this.perimeter / 2 - this.a) * (this.perimeter / 2 - this.b) * (this.perimeter / 2 - this.c))).toFixed(3);
  }
}

function getTriangle (a, b, c) {
  try {
    const Triangle1 = new Triangle (a, b, c);
    return Triangle1;
    } catch (error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }, get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}