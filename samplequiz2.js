let quizData = [
    {
        question: "1. Which structure repeats a sequence of instructions until a specific condition is met?",
        a: 'Classes And Object',
        b: 'Looping',
        c: 'Conditioning',
        d: 'Exception Heandaling',
        ans: 'ans2'
    },
    {
        question: "2. Which is/are most common loops in current?",
        a: 'do while loop',
        b: 'while loop',
        c: 'for loop',
        d: 'B and C both',
        ans: 'ans4'
    },
    {
        question: "3. Which loop will you use when you know how many time you want iteration ?",
        a: 'for loop',
        b: 'while loop',
        c: 'do while loop',
        d: 'All of them can used',
        ans: 'ans1'
    },
    {
        question: "4. Which loop will you use when you don't know how many time you want iteration ?",
        a: 'for loop',
        b: 'while loop',
        c: 'do while loop',
        d: 'all of them can used',
        ans: 'ans2'
    },
    {
        question: "5. What is the syntax of for loop in Python ?",
        a: 'for(int i; i<10 ; i++);',
        b: 'for {int i; i<10 ; i++}',
        c: 'for i in range(0,10):',
        d: 'none of the above',
        ans: 'ans3'
    },
    {
        question:'6. What is the syntax of while loop?',
        a: 'while(conditions){}',
        b: 'while{condition};',
        c: 'A and B Both',
        d: 'while conditions:',
        ans: 'ans4'
    },
    {
        question:'7. lst = [1,2,3] for i in lst: print(i)',
        a: '1,2,3',
        b: '0,1,2,3',
        c: 'error : Syntex error',
        d: 'None of the above',
        ans: 'ans1'
    },
    {
        question:'8. for i in range(10):print(i)',
        a: '1,2,3,4,5,6,7,8,9,10',
        b: '0,1,2,3,4,5,6,7,8,9,10',
        c: '0,1,2,3,4,5,6,7,8,9',
        d: 'None Of the above',
        ans: 'ans3'
    },
    {
        question:'9. Are loops sotoring all the value paremenantly in memory?',
        a: 'No',
        b: 'Yes',
        c: 'Maybe',
        d: 'None of the above',
        ans: 'ans1'
    },
    {
        question:'10. range() function can use in which loop?',
        a: 'for loop',
        b: 'while loop',
        c: 'do while loop',
        d: 'A and B both',
        ans: 'ans1'
    },
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    const questionList = quizData[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    })
    return answer;
}

const  deselectAll =() => {
    answers.forEach((curAnsElem) => {
        curAnsElem.checked = false;
    } )
}
submit.addEventListener('click' , () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === quizData[questionCount].ans){
        score++;
    }
    questionCount++;

    deselectAll();
    if(questionCount < quizData.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
            <h3>You Scored : ${score}/${quizData.length}</h3>
            <button class="btn" onclick = "location.reload()">Start Again</button>
        `;       
        showScore.classList.remove('scoreArea');
    }
})