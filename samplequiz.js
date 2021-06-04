let quizData = [
    {
        question: "1. Who invented the Python?",
        a: 'Guido Van Rossum',
        b: 'Dennis Ritchie',
        c: 'James Goslin',
        d: 'John Backus',
        ans: 'ans1'
    },
    {
        question: "2. Whis is not a feature of Python?",
        a: 'Readable',
        b: 'Cross Platform',
        c: 'Costly',
        d: 'Opensource',
        ans: 'ans3'
    },
    {
        question: "3. Form where the inspiration of name Python come from?",
        a: 'Snake',
        b: 'Person',
        c: 'Place',
        d: 'Circus',
        ans: 'ans4'
    },
    {
        question: "4. What is True for Python?",
        a: 'Complex Structure',
        b: 'Easy To Learn',
        c: 'Low Level Langauge',
        d: 'Not User Ferindly',
        ans: 'ans2'
    },
    {
        question:' 5. Which of the following is True?',
        a: 'Python is Free',
        b: 'Exception handeling',
        c: 'Auto Memory Management',
        d: 'All',
        ans: 'ans4'
    },
    {
        question:'6. What is the meaning of Anutomatic Memory Management?',
        a: 'Python Have Less Memory',
        b: 'Need More Data',
        c: 'Automatic Memory Clearing',
        d: 'No Need of Memory',
        ans: 'ans3'
    },
    {
        question:'7. Which Of the Following are application of the Python?',
        a: 'Web Development',
        b: 'Machine Learning',
        c: 'Machine Learning',
        d: 'All of above',
        ans: 'ans4'
    },
    {
        question:'8. Which subpart of Python used for Web Development?',
        a: 'Django and Flask',
        b: 'numpy and Scipy',
        c: 'Collection',
        d: 'None Of the above',
        ans: 'ans1'
    },
    {
        question:'9. Writing small programs for automate the simle tasks..means?',
        a: 'Web Development',
        b: 'Machine Learning',
        c: 'Scripting',
        d: 'Data Analysis',
        ans: 'ans3'
    },
    {
        question:'10. Face Recognition and Voice Recognition are examples of?',
        a: 'Scripting',
        b: 'Machine Learning',
        c: 'Web Development',
        d: 'Data Analysis',
        ans: 'ans2'
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