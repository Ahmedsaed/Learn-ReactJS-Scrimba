import React, {useState, useEffect} from "react"
import Die from "./components/Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import './App.css'

export default function App() {

    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)
    const [numRolls, setNumRolls] = useState(0)
    const [bestScore, setBestScore] = useState(() => localStorage.getItem("BestScore"))
    
    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [dice])

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    
    function rollDice() {
        if(!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDie()
            }))
            setNumRolls(prevNum => prevNum + 1)
        } else {
            setTenzies(false)
            saveBestScore()
            setNumRolls(0)
            setDice(allNewDice())
        }
    }

    function saveBestScore() {
        if (!JSON.parse(bestScore)) {
            localStorage.setItem('BestScore', JSON.stringify(numRolls))
            setBestScore(numRolls)
        }
        else if ((JSON.parse(bestScore) || 0)  > numRolls) {
            localStorage.setItem('BestScore', JSON.stringify(numRolls))
            setBestScore(numRolls)
        }
    }
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))
    
    return (
        <>
            {tenzies && <Confetti />}
            <main>
                <h1 className="title">Tenzies</h1>
                <p className="instructions">Roll until all dice are the same. 
                Click each die to freeze it at its current value between rolls.</p>
                <div className="dice-container">
                    {diceElements}
                </div>
                <div className="bottom-section">
                    <button className="roll-dice" onClick={rollDice}>
                        {tenzies ? "New Game" : "Roll"}
                        {!tenzies && <div className="vl"></div>}
                        {!tenzies && <p>{numRolls}</p>}
                    </button>
                    <p className="bottom-text">Best Score:  {bestScore ? bestScore : "0"}</p>
                </div>
            </main>
        </>
    )
}