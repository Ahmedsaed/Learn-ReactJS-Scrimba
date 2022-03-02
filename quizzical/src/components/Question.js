import './Question.css'

export default function Question({text, answers, handleClick, chosen, index, validate, correct_answer, updateScore}) {
    const answersElements = answers.map((answer, AIndex) => {
        let style = ""
        if (!validate && chosen === AIndex)
            style = "chosen"
        else if (validate && answers[AIndex] !== correct_answer && chosen === AIndex)
            style = "incorrect"
        else if (validate && (answers[AIndex] === correct_answer || chosen === AIndex)) {
            style = "correct"
        }
        
        
        return (
            <button className={'choice ' + style} key={AIndex} onClick={() => handleClick(index, AIndex)}>
                {decodeURIComponent(answer)}
            </button>
        )
    })

    return (
        <>
            <div className='quiz-question'>
                <p className='question-text'>{decodeURIComponent(text)}</p>
                <div className='question-choices'>
                    {answersElements}
                </div>
            </div>
            <hr width="100%" style={{border: "0.794239px solid #DBDEF0"}}/>
        </>
    );
}

// function shuffle(array) {
//     let currentIndex = array.length,  randomIndex;
  
//     // While there remain elements to shuffle...
//     while (currentIndex !== 0) {
  
//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
  
//       // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }
  
//     return array;
// }