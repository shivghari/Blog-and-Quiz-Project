let quizData = [
    {
        question: "1. Which of the following is True for the list?",
        a: 'Immutable',
        b: 'Mutable',
        c: 'A and B both',
        d: 'None of the above',
        ans: 'ans2'
    },
    {
        question: "2. How to define the empty list?",
        a: 'list[]',
        b: 'listname=[]',
        c: 'listname[]',
        d: 'list=()',
        ans: 'ans2'
    },
    {
        question: "3. What is the output of list1=[1,2,3] print(list1[1])",
        a: '2',
        b: '1',
        c: '3',
        d: '0',
        ans: 'ans1'
    },
    {
        question: "4. The python tuple is _____ in nature.",
        a: 'Unchangable',
        b: 'Immutable',
        c: 'Both A and B',
        d: 'Mutable',
        ans: 'ans3'
    },
    {
        question: "5. Find output : t = (1,2,3,4,5) print(t[1:4]) ",
        a: '1,2,3',
        b: '1,2,3,4',
        c: '3,4,5',
        d: '2,3,4',
        ans: 'ans4'
    },
    {
        question:'6. How can we declare the tuple?',
        a: 't = tuple()',
        b: 'a = (1,)',
        c: 'tuple[]',
        d: 'A and B both',
        ans: 'ans4'
    },
    {
        question:'7. Does the python set have duplicate elements?',
        a: 'No',
        b: 'Yes',
        c: 'Maybe',
        d: 'None of the above',
        ans: 'ans1'
    },
    {
        question:'8. Does the set supports indexing?',
        a: 'Yes',
        b: 'No',
        c: 'Sometimes',
        d: 'None Of the above',
        ans: 'ans2'
    },
    {
        question:'9. How to declare the set ? ',
        a: 's = {}',
        b: 's = set()',
        c: 's = {1,2,3}',
        d: 'B and C both',
        ans: 'ans4'
    },
    {
        question:'10. Find the output : s = {1,2,3,3,5} print(s)',
        a: '{1,2,3,5}',
        b: '{1,2,3,3,5}',
        c: '{1:2, 3:3, 5:0}',
        d: 'None of the above',
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