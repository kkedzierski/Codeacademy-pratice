const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();
const nextPages = new Stack()
let currentPage = "czika.com";
let finish = false;
let showBack = false;
let showNext = false;
// ------------------------------
// Helper Functions
// ------------------------------
const showCurrentPage = action => {
    console.log(action);
    console.log(`You are on ${currentPage} website`);
    console.log(`Back page: ${backPages.peek() || 'no back pages'}`);
    console.log(`Next page: ${nextPages.peek() || 'no next pages'}`);
}
const newPage = page => {
  backPages.push(currentPage);
  currentPage = page;
  if(!nextPages.isEmpty()){
    nextPages.pop();
  }
  showCurrentPage("NEW PAGE: ");
};
const backPage = () => {
  nextPages.push(currentPage);
  currentPage = backPages.pop();
  showCurrentPage("BACK: ");

};
const nextPage = () => {
  backPages.push(currentPage);
  currentPage = nextPages.pop();
  showCurrentPage("NEXT: ");
}
/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

// ------------------------------
// User Interface
// ------------------------------
showCurrentPage('DEFAULT: ');
while(!finish){
  let instructions = baseInfo;
  if(!backPages.isEmpty()){
    instructions += `, ${backInfo}`;
    showBack = true;
  }else{
    showBack = false;
  }
  if(!nextPages.isEmpty()){
    instructions += `, ${nextInfo}`;
    showNext = true;
  }else{
    showNext = false;
  }
  instructions += `, ${quitInfo}`;
  console.log(instructions);
  const answer = prompt(question);
  const lowerCaseAnswer = answer.toLowerCase();
  if ((lowerCaseAnswer !== 'n') && (lowerCaseAnswer !== 'b') && (lowerCaseAnswer !== 'q')) {
    // we create a new page based on the url
    newPage(answer);
  }else if (showNext && (lowerCaseAnswer === 'n')){
    nextPage()
  }else if (showBack && (lowerCaseAnswer === 'b')){
    backPage();
  }else if(lowerCaseAnswer === 'b'){
    console.log('Cannot go back a page. Stack is empty.');
  }else if(lowerCaseAnswer === 'n'){
    console.log('Cannot go next a page. Stack is empty.');
  }else if(lowerCaseAnswer === 'q'){
    finish = true;
    break;
  }
}
