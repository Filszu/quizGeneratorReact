import React from 'react'
import QuestionCard from './QuestionCard'

const QuestionsList = ({questions,changeQuestionCard,deleteQuestionCard}) => {
  return (
    <>
    <div>QuestionsList</div>
    {console.log(questions)}
    {
        questions.map((card)=>
                <QuestionCard q={card} key={card.id} changeQuestionCard={changeQuestionCard} deleteQuestionCard={deleteQuestionCard}/>
            )
    }

    {/* <QuestionCard q={QuestionsList[1]}/> */}
    {/* <QuestionCard q={QuestionsList}/> */}
    </>
    
  )
}

export default QuestionsList