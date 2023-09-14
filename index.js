const quizData =[
    {
        question:"Manni bhai ka B'day kab aata hai?",
        options:["14 February","14 January","15 January","Wo Avatar hai Bday nhi aata" ],
        correct:1,
    },
    {
        question:"Arti rozana kitna roti khati hai??",
        options:["1","2","Wo bhaat khati hai","only Adha"],
        correct:2,
    },
    {
        question:"Bajrangi bhai ka college me kya naam hai",
        options:["Prashant","Harshit","Benam Badsaah","Nahi Bataunga"],
        correct:0,
    },
    {
        question:"Thik hai yaar -- kisne kaha tha (favourite dialouge) ?",
        options:["Lalu Bhai","Babu bhai","Tinku bhai","Pyare Bapu"],
        correct:2,
    }
];

const quiz = document.querySelector('.quiz');
const answerElm = document.querySelectorAll(".answer");
const[questionElm, option_1,option_2,option_3,option_4]
= document.querySelectorAll("#question, .option_1,.option_2, .option_3, .option_4 ");
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () =>{
    const {question,options} = quizData[currentQuiz];
    // console.log(`this is important ${quizData[currentQuiz].correct}`);
    questionElm.innerHTML =`${currentQuiz+1}.  ${question}`;
    options.forEach((curOption,index)=> window[`option_${index+1}`].innerHTML =curOption);
};

loadQuiz();

//step 4 -- Get Selected Answer Function on Button click
const getSelectedOption = () =>{
    // let ansIndex;
    // answerElm.forEach((curOption, index)=>{
    //     if(curOption.checked){
    //         ansIndex = index;
    //     }
    // });
    // return ansIndex;
    let answerElement = Array.from(answerElm); 
    return answerElement.findIndex((curElem,index)=> curElem.checked);
};
//deselected answer---
const deselectedAnswers = () =>{
    answerElm.forEach((curElem) => curElem.checked = false);
}
submitBtn.addEventListener('click',()=>{
    const selectedOptionIndex = getSelectedOption();
    // console.log(selectedOptionIndex);


    if(selectedOptionIndex == quizData[currentQuiz].correct){
        score += 1;
    }

    currentQuiz++;

    if(currentQuiz< quizData.length){
        deselectedAnswers();
        loadQuiz();
    }else{
        quiz.innerHTML = `
        <div class="result">
        <h2> Your score : ${score}/${quizData.length} Correct Answers</h2>
        <p>🎁 Congratulations on completing the quiz</p>
        <button class="reloadButton" onclick="location.reload()">Play Again</button>
    </div>`;
    // console.log(`Your score : ${score}/${quizData.length} Correct Answers`)
    }
});