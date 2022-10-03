// import logo from './logo.svg';
import QuestionsList from './QuestionsList';
import {useState,useEffect} from 'react';
import NewCardButton from './NewCardButton';

const q1 ={
  "id": 0,
  "question": "What country does this flag belong to?",
  "img": "ic_flag_of_new_zealand",
  "optionA": "Australia",
  "optionB": "New Zealand",
  "optionC": "Tuvalu",
  "optionD": "USA",
  "correctAnswer":2
}

const q2 = 
    {
    "id": 1,
    "question": "Czy prońko lubi wyrzucać czyjeś karty do smietnika?",
    "img": "pr1",
    "optionA": "Nie, nie cierpi",
    "optionB": "Tak, uwielbia",
    "optionC": "Z tego co pamiętam, to zrobił to tylko raz",
    "optionD": "Jebać waciaka",
    "correctAnswer": 3
  }

//   const oldTemplate ={
  
//     "id": 99999999999,
//     "question": "",
//     "img": "",
//     "optionA": "",
//     "optionB": "",
//     "optionC": "",
//     "optionD": "",
//     "correctAnswer": 1
  
// }
// const qTemplate ={
//     "question": "",
//     "img": "",
//     "optionA": "",
//     "optionB": "",
//     "optionC": "",
//     "optionD": "",
//     "correctAnswer": 1
  
// }


function saveToLocalStorage(data_obj, name){
  
  // 'autoSave'
  const resultJSON = JSON.stringify(data_obj);
  localStorage.setItem(name, resultJSON);
}



function App() {
  const [questions, setQuestions] = useState([])
  const [result,setResult] = useState("result: ")

  

  useEffect(() =>{
    console.log("\n================================")
   
    // newQuiz();
    checkTheLocalStorage();
  },[]);

  function checkTheLocalStorage(){
    if(localStorage.getItem('autoSave')){
      
      setQuestions([])
      console.log('data in localStorage founded successfully')
      

      const dataFromLocalStorage = JSON.parse(localStorage.getItem('autoSave'))
      console.log(dataFromLocalStorage)
      setQuestions([dataFromLocalStorage])
    }
    else{
      console.log("new user")
      newQuiz();
    }
  }

  function newQuiz(){
     // xddd nie wiem czemu bez tego state przechowuje dalej wartosci
     setQuestions([])
     localStorage.clear();
    addNewCard(q1)
    // addNewCard(q2)
    
  }
  function addNewCard(card){

    // setQuestions([card])
    setQuestions(prevQ =>{
      return [...prevQ, card];
    })

  }
  // generate card id
  function genereteCard(){
    // const newId=questions.length
    // console.log(`last id: ${newId}`)

    // get last el id not last index couse question may be deleted
    const lastElId = questions[(questions.length-1)].id
    console.log(`last el id: ${lastElId}`)

    const newId = lastElId+1
    

    console.log(`NEW id: ${newId}`)

/*IDK why its not working that i supposed
    const emptyQuestion = qTemplate;

    emptyQuestion.id=newId;
    addNewCard(emptyQuestion)
    */
   
    
    addNewCard({
      "id": newId,
      "question": "",
      "img": "",
      "optionA": "",
      "optionB": "",
      "optionC": "",
      "optionD": "",
      "correctAnswer": 1
    
  }
  )

    // setQuestions(prevQ =>{
    //   return [...prevQ, emptyQuestion];
    // })

    
  }

  function changeQuestionCard(id,e){
    const newQList = [...questions];
    console.log(newQList);
    const editedQuestion = newQList.find(question => question.id === id);

    const inputName=e.target.name;
    const inputValue=e.target.value;
    // editedQuestion.

    console.log(editedQuestion)
    console.log(editedQuestion[inputName])

    console.log(`changed card id: ${id} \n in filed: ${inputName}\n with value: ${inputValue}`);

    editedQuestion[inputName] = inputValue;

    setQuestions(newQList)
    // setQuestions(editedQuestion)

    // after change autosave to localStorage
    saveToLocalStorage(newQList, "autoSave");


  }

  function deleteQuestionCard(id){
    console.log(`deleted card id: ${id}`)
    const newQList = [...questions];
    const editedQuestion = newQList.filter(question => question.id !== id);


    console.log(editedQuestion)
    setQuestions(editedQuestion)
    console.log(questions.length)
    if(questions.length <=1){
      addNewCard(q1)
    }
    

  }

  // -----------------
  function saveQuiz(){
    orderCards();
    const resultJSON = JSON.stringify(questions);
    setResult(resultJSON)
  }

  function orderCards(){
    const prevQ= [...questions];
    let newId=0;
    // const orderedQuestions = prevQ.map((card)=>{
    //   card.id=newId;
    //   newId++;
    // })

    // const orderedQuestions = prevQ.forEach((question)=>{
    //   question.id=newId;
    //   newId++;
    // })

    // const orderedQuestions = 
    for(const q of prevQ){
      q.id=newId;
      newId++;
    }

    const orderedQuestions = prevQ;

    console.log("\nordered questions")
    console.log(orderedQuestions)

    // setQuestions(orderedQuestions);
  }

  return (
    
    <>
    <div className="container">
      <h1>Quizz genrator</h1>
      <h2>For this <a href="https://github.com/Filszu/quizzApp_kotlin/" target="blank">github project</a></h2>
      {/* <QuestionCard q={q1}/>
      <QuestionCard q={q1}/> */}
      <QuestionsList questions={questions} changeQuestionCard={changeQuestionCard} deleteQuestionCard={deleteQuestionCard}/>
      <NewCardButton onClick={genereteCard} text="add new question"/>

      <NewCardButton onClick={saveQuiz} text="Generate JSON"/>
      <div className="resultArea">{result}</div>

      <NewCardButton onClick={newQuiz} text="New QUIZ"/>
    </div>

      
    </>
  
  );
}

export default App;
