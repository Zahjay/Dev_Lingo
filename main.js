console.log('I work!')


   //Contains the h1,h2, and button.
   class Layout{
    constructor(title, buttonContent, title2){
    this.title = title;
    this.buttonContent = buttonContent;
    this.title2 = title2; 
  }
  //method that gets the elements and prepares for the content 
   show(){
    document.querySelector('#header').innerHTML = this.title;
    document.querySelector('#butty1').innerHTML = this.buttonContent;
    document.querySelector('#header2').innerHTML = this.title2;
   }
  };
//This is the mastermind that controls what goes in the screen
const viewport =  new Layout('Test the Dev', 'Click Me To Start', 'Can You Handle  <br> the Interview?');
//calling the method
 viewport.show();

// index of first question
let questionNumber = 0;
//variable for value score starts 
let score = 0;

// Array of questions
const questArray = ['What is the abbreviation for HyperText Markup Language?','What does Cascading Style Sheet stand for?','What Does DOM stand for?','As a devloper you must type often, fill in the blank for the homerow key on the left hand. a,s,d...','Who created Javascript?', 'I hold a list of things and have [], what am I?','What does GUI stand for?',  'Is git a version control system? Answer yes or no.','What does pwd stand for?', 'Answer yes or no.' + 'Should you clone a repo in a repo?', 'Finally, Who is the CEO and Founder of General Assembly?'];console.log(questArray);
console.log(questArray[11]);
//array for answers
const answerArray=['html', 'css', 'document object model','f', 'brendan eich','array','graphical user interface','yes', 'print working directory','no','jake schwartz'];
console.log(answerArray);

//Event Lisnters For Buttons
 // start button
 const button1 = document.querySelector('#butty1');
 button1.addEventListener('click', function(){
     changeQuestion(0)
 })
// Next button
const button = document.querySelector('#butty3');
button.addEventListener('click', function(){changeQuestion(questionNumber)});

//Input submit button
const checkAnswerBtn = document.querySelector('#butty2');
checkAnswerBtn.addEventListener('click', function(){checkAnswer(questionNumber)});

//Function has one parameter number.

//This Works!!!!! It declares a winner!
function changeQuestion(number) {
    console.log('changing question', number);

if (number === questArray.length && score === 60){
      alert('You Won!');
    }else if(number === answerArray.length && score < 60){
  
       alert('You lost,try again')
       return;
    }
document.querySelector('#board').innerHTML = questArray[number]; 
//return stops the function, so undefined doesn't show.
};

 function checkAnswer(index){
    //let answer is a variable that sets the answer to id of questions .value grabs inputed text. Uppercase makes text uppercase when inputed. This keeps it 
    let answer = document.querySelector('#answers').value.toUpperCase();
    //Bollean statement | if the first questiom in the array and the value answer is equal to uppercase HTML then alert message plus the score else do the oppisite.  
    if( answer === answerArray[index].toUpperCase()){
      score = score + 5;
      alert('Nice! Your current score is: ' + score);
    } else {
        score = score - 5;
        alert('Go look it up! your current score is: ' + score);
    }
    // clearing/resetting input field  left empty string to make sure that is rests after every    question.
    document.querySelector('#answers').value = '';
   // Makes the question index increase by 1 each time.
       questionNumber++;
  };

 
 