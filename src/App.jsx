import React from 'react'
import Confetti from 'react-confetti';
import './App.css'
import Main from './memeApp/Main'
import Header from './memeApp/Header'
import WindowTracker from './functionalProgramming/windowTracker'
import Die from './Tenzies/Die.jsx'
import { nanoid } from 'nanoid'
import Timer from './Tenzies/Timer.jsx';
function App() {
  const [Dice, setDice] = React.useState(() => generateAllNewDice())
  const [count, setCount] = React.useState(0)
  const [reset, setReset] = React.useState(false)
  let gameWon =
    Dice.every(die => die.isHeld) &&
    Dice.every(die => die.value === Dice[0].value)

  function generateAllNewDice() {
    return new Array(10).fill(0)
      .map(() =>
      ({
        value: 5,
        isHeld: false,
        id: nanoid()
      })
      )
  }
  function rollDice() {
    if (!gameWon) {
      setDice(Dice.map((die) => {
        return die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
      }));
      setCount(prev => prev + 1)
    }
    else {
      setDice(generateAllNewDice())
      setCount(0)
      setReset(true)
      
    }

  }
  
  console.log(reset)

  const DiceElements = Dice.map((die) =>
    <Die
      key={die.id}
      hold={hold}
      isHeld={die.isHeld}
      id={die.id}
      value={die.value}
    />)
  function hold(id) {
    setDice(Dice.map((die) => {
      return die.id == id ? { ...die, isHeld: !die.isHeld } : die
    }))
  }
  const focus = React.useRef()
  React.useEffect(() => {
    if (gameWon) {
      focus.current.focus()
    }
  }, [gameWon])
  return (
    <>
      <main>
        {gameWon && <Confetti />}
        <div aria-live='polite' className='sr-only'>
          {gameWon && <p>Congrats!You Won!Press "New Game" to start again</p>}
        </div>
        <Timer isRunning={gameWon}
          count={count}
          reset={reset} />
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all are the same.Click each die to freeze it at its current value between rolls.</p>
        <h3>Rolls:{count}</h3>
        <div className='container'>
          <div className="die-container">
            {DiceElements}
          </div>
          <button ref={focus} onClick={rollDice} className="roll-btn">
            {gameWon ? 'New Game' : 'Roll'}
          </button>
        </div>
      </main>
    </>


  )
}
{/* <Header />
  <Main /> */}
{/* <button onClick={toggleShow}>
    Toggle WIndowTracker
    </button>
    {show && <WindowTracker />} */}

//   const [show, setShow] = React.useState(true)
//  const toggleShow=()=>{
//     setShow(preShow=>!preShow)
//   }
export default App
// const uniqueProperty=new Set(Dice.map((obj)=>obj.isHeld))
// console.log(uniqueProperty)
