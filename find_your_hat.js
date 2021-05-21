const prompt = require('prompt-sync')({sigint: true});

class Field {
  constructor(field, y, x){
    this.field = field;
    this.y = y;
    this.x = x;
  }

  // Prints current state of the field
  print(){
    let oneLineField = [];
    let finallyField = "";
    for(let i = 0 ; i < this.field.length ; i++){
      for (let j = 0; j < this.field[0].length ; j++){
        oneLineField.push(this.field[i][j]);
      }
      finallyField += oneLineField.join('') + "\n";
      oneLineField = [];
    }
    console.log(finallyField);
  }

  startGame(width, height){
    this.generateField(width, height);
    width = width-1;
    height = height-1;
    
    this.y = 0;
    this.x = 0;
    this.clearConsole();
    myField.print();

    let moveResult = true;
    while(moveResult){
        const direction = prompt('Which way? \n');
        moveResult = this.move(direction, this.y, this.x);
      }
  }

  move(place,y,x){
    if(place.toUpperCase() === 'W'){
      let yTemp = --this.y;
          try {
            if(this.field[yTemp][this.x] === 'O'){
              console.log("sorry you lose!");
              return false;
            }
            this.y = yTemp;
            if(this.field[this.y][this.x] === '^'){
              console.log("Congratulation you win!");
              return false;
            }
            this.field[this.y][this.x] = '*';
            this.clearConsole();
            myField.print();
            return true;
          } catch (e) {
            if (e instanceof TypeError) {
              console.log('You can\'t go away from play area');
              return false;
            }
          }
      }
    else if(place.toUpperCase() === 'S'){
      let yTemp = ++this.y;
          try {
            if(this.field[yTemp][this.x] === 'O'){
              console.log("sorry you lose!");
              return false;
            }
            this.y = yTemp;
            if(this.field[this.y][this.x] === '^'){
              console.log("Congratulation you win!");
              return false;
            }
            this.field[this.y][this.x] = '*';
            this.clearConsole();
            myField.print();
            return true;
          } catch (e) {
            if (e instanceof TypeError) {
              console.log('You can\'t go away from play area');
              return false;
            }
          }
      }
    else if(place.toUpperCase() === 'A'){
      let xTemp = --this.x;
          try {
            if(this.field[this.y][xTemp] === 'O'){
              console.log("sorry you lose!");
              return false;
            }
            this.x = xTemp;
            if(this.field[this.y][this.x] === '^'){
              console.log("Congratulation you win!");
              return false;
            }
            this.field[this.y][this.x] = '*';
            this.clearConsole();
            myField.print();
            return true;
          } catch (e) {
            if (e instanceof TypeError) {
              console.log('You can\'t go away from play area');
              return false;
            }
          }
      }
    else if(place.toUpperCase() === 'D'){
      let xTemp = ++this.x;
          try {
            if(this.field[this.y][xTemp] === 'O'){
              console.log("sorry you lose!");
              return false;
            }
            this.x = xTemp;
            if(this.field[this.y][this.x] === '^'){
              console.log("Congratulation you win!");
              return false;
            }
            this.field[this.y][this.x] = '*';
            this.clearConsole();
            myField.print();
            return true;
          } catch (e) {
            if (e instanceof TypeError) {
              console.log('You can\'t go away from play area');
              return false;
            }
          }
      }else{
        console.log("You must past W,A,S or D");
        return true;
      }
  }

clearConsole(){
  const readline = require('readline')
  const blank = '\n'.repeat(process.stdout.rows)
  console.log(blank)
  readline.cursorTo(process.stdout, 0, 0)
  readline.clearScreenDown(process.stdout)
}

  setStartAndEndPoint(width, height){
    this.field[height-2][width-2] = '^';
    this.field[0][0] = '*'
  }
  
  generateField(width, height){
    let fieldArray = [];
    let randomElementArray = ['░','░','░','O'];
    let randomElementField = 0;
    let widthLineElementArr = [];
    for(let i = 0; i < height ; i++){
        for(let j = 0; j < width ; j++){
          randomElementField = Math.floor(Math.random()*4);
          widthLineElementArr.push(randomElementArray[randomElementField]);
        }
      fieldArray.push(widthLineElementArr);
      widthLineElementArr = [];
    }
    this.field = fieldArray;
    this.setStartAndEndPoint(width, height);
    return "Field created!"
  }


}

const myField = new Field([],12,12);
myField.startGame(10,5);

