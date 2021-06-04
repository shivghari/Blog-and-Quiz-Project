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
    {
        question: "11. Which of the following is True for the list?",
        a: 'Immutable',
        b: 'Mutable',
        c: 'A and B both',
        d: 'None of the above',
        ans: 'ans2'
    },
    {
        question: "12. How to define the empty list?",
        a: 'list[]',
        b: 'listname=[]',
        c: 'listname[]',
        d: 'list=()',
        ans: 'ans2'
    },
    {
        question: "13. What is the output of list1=[1,2,3] print(list1[1])",
        a: '2',
        b: '1',
        c: '3',
        d: '0',
        ans: 'ans1'
    },
    {
        question: "14. The python tuple is _____ in nature.",
        a: 'Unchangable',
        b: 'Immutable',
        c: 'Both A and B',
        d: 'Mutable',
        ans: 'ans3'
    },
    {
        question: "15. Find output : t = (1,2,3,4,5) print(t[1:4]) ",
        a: '1,2,3',
        b: '1,2,3,4',
        c: '3,4,5',
        d: '2,3,4',
        ans: 'ans4'
    },
    {
        question:'16. How can we declare the tuple?',
        a: 't = tuple()',
        b: 'a = (1,)',
        c: 'tuple[]',
        d: 'A and B both',
        ans: 'ans4'
    },
    {
        question:'17. Does the python set have duplicate elements?',
        a: 'No',
        b: 'Yes',
        c: 'Maybe',
        d: 'None of the above',
        ans: 'ans1'
    },
    {
        question:'18. Does the set supports indexing?',
        a: 'Yes',
        b: 'No',
        c: 'Sometimes',
        d: 'None Of the above',
        ans: 'ans2'
    },
    {
        question:'19. How to declare the set ? ',
        a: 's = {}',
        b: 's = set()',
        c: 's = {1,2,3}',
        d: 'B and C both',
        ans: 'ans4'
    },
    {
        question:'20. Find the output : s = {1,2,3,3,5} print(s)',
        a: '{1,2,3,5}',
        b: '{1,2,3,3,5}',
        c: '{1:2, 3:3, 5:0}',
        d: 'None of the above',
        ans: 'ans1'
    },
    {
        question: "21. Which structure repeats a sequence of instructions until a specific condition is met?",
        a: 'Classes And Object',
        b: 'Looping',
        c: 'Conditioning',
        d: 'Exception Heandaling',
        ans: 'ans2'
    },
    {
        question: "22. Which is/are most common loops in current?",
        a: 'do while loop',
        b: 'while loop',
        c: 'for loop',
        d: 'B and C both',
        ans: 'ans4'
    },
    {
        question: "23. Which loop will you use when you know how many time you want iteration ?",
        a: 'for loop',
        b: 'while loop',
        c: 'do while loop',
        d: 'All of them can used',
        ans: 'ans1'
    },
    {
        question: "24. Which loop will you use when you don't know how many time you want iteration ?",
        a: 'for loop',
        b: 'while loop',
        c: 'do while loop',
        d: 'all of them can used',
        ans: 'ans2'
    },
    {
        question: "25. What is the syntax of for loop in Python ?",
        a: 'for(int i; i<10 ; i++);',
        b: 'for {int i; i<10 ; i++}',
        c: 'for i in range(0,10):',
        d: 'none of the above',
        ans: 'ans3'
    },
    {
        question:'26. What is the syntax of while loop?',
        a: 'while(conditions){}',
        b: 'while{condition};',
        c: 'A and B Both',
        d: 'while conditions:',
        ans: 'ans4'
    },
    {
        question:'27. lst = [1,2,3] for i in lst: print(i)',
        a: '1,2,3',
        b: '0,1,2,3',
        c: 'error : Syntex error',
        d: 'None of the above',
        ans: 'ans1'
    },
    {
        question:'28. for i in range(10):print(i)',
        a: '1,2,3,4,5,6,7,8,9,10',
        b: '0,1,2,3,4,5,6,7,8,9,10',
        c: '0,1,2,3,4,5,6,7,8,9',
        d: 'None Of the above',
        ans: 'ans3'
    },
    {
        question:'29. Are loops sotoring all the value paremenantly in memory?',
        a: 'No',
        b: 'Yes',
        c: 'Maybe',
        d: 'None of the above',
        ans: 'ans1'
    },
    {
        question:'30. range() function can use in which loop?',
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