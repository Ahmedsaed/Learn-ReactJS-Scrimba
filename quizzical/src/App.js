import './App.css';
import Blob from './components/Blob';
import QuizMenu from './components/QuizMenu';
import Question from './components/Question';
import {useState, useEffect} from 'react'

export default function App() {
    const [isHidden, setIsHidden] = useState(false)
    const [validate, setValidate] = useState(false)
    const [questions, setQuestions] = useState([])
    const [score, setScore] = useState(0)
    

    function hideMenu() {
        setIsHidden(prev => !prev)
    }

    useEffect(() => {
        fetchQuestions();
    }, [])

    function fetchQuestions() {
        fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple&encode=url3986")
            .then(res => res.json())
            .then(data => setQuestions(data.results.map(question => ({
                text: question.question,
                correct_answer: question.correct_answer,
                incorrect_answers: question.incorrect_answers,
                answers: [question.correct_answer, ...question.incorrect_answers],
                chosenAnswer: -1
            }))));
    }

    function handleClick(QIndex, choice) {
        setQuestions(prevQuestions => prevQuestions.map((question, index) => {
            if (index === QIndex) {
                return {
                    ...question,
                    chosenAnswer: choice
                }
            }
            else {
                return question
            }
        }))
    }

    const QuestionElements = questions.map((question, QIndex) => (
        <Question 
            text={question.text} 
            answers={question.answers} 
            key={QIndex} 
            handleClick={handleClick} 
            chosen={question.chosenAnswer}
            index={QIndex} 
            validate={validate} 
            correct_answer={question.correct_answer}
        />
    ))

    function check() {
        if (!validate) {
            setValidate(true)
    
            for (let i = 0; i < questions.length; i++) {
                const question = questions[i];
                if (question.correct_answer === question.answers[question.chosenAnswer])
                    setScore(prev => prev + 1)
            }
        }
        else {
            setValidate(false)
            fetchQuestions()
            setScore(0)
        }
    }

    return (
        <div className="App">
            <Blob />
            {
                !isHidden ?
                <QuizMenu isHidden={isHidden} hideMenu={hideMenu}  /> :
                <div className='quiz'>
                    <div className='quiz-body'>
                        {QuestionElements}
                    </div>
                    <div>
                        {validate && <span className='quiz-result'>You scored {score}/{questions.length} correct answers</span>}
                        <button className='check-btn' onClick={check}>{validate ? "Play again" : "Check Answers"}</button>
                    </div>
                </div>
            }
        </div>
    );
}



    
      