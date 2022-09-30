import React from 'react'
/*
 {
    "id": 10,
    "question": "What country does this flag belong to?",
    "img": "ic_flag_of_new_zealand",
    "optionA": "Australia",
    "optionB": "New Zealand",
    "optionC": "Tuvalu",
    "optionD": "USA",
    "correctAnswer":2
  }
*/
// function handleChange(field_name){
//   console.log(id, field_name)
//   // changeField(id, field_name)

// }


const QuestionCard = ({q,changeQuestionCard}) => {

  
  function handleChange(e){
    console.log("changed")
    // console.log(e.target.value)
    changeQuestionCard(q.id,e)

  }

  return (
    <>
    <section className="questionCard">

      
      <div><h1>Question id:{q.id}</h1> </div>
      {/* <p>question</p> */}
      <input type="text" name="question" placeholder='question' value={q.question?q.question:""} onChange={handleChange}/>

      <input type="text" name="optionA" placeholder='optionA' value={q.optionA} onChange={handleChange}/>

      <input type="text" name="optionB" placeholder='optionB' value={q.optionB} onChange={handleChange}/>
      <input type="text" name="optionC" placeholder='optionC' value={q.optionC} onChange={handleChange}/>
      <input type="text" name="optionD" placeholder='optionD'
      value={q.optionD} onChange={handleChange}/>
      <label htmlFor="correctAnswer">correct answer</label>
      <select name="correctAnswer" id="correctAnswer" value={q.correctAnswer} onChange={handleChange}>
          <option value="1">A</option>
          <option value="2">B</option>
          <option value="3">C</option>
          <option value="4">D</option>
      </select>
    </section>

    </>
  )
}

export default QuestionCard
