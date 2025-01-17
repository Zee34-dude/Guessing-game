import React from "react"
import Heading from "./AssemblyApp/Heading.jsx"
import clsx from "clsx"
import './Assemblyapp.css'
import { Languages } from "./AssemblyApp/LanguagesData.jsx"
import { getFarewellText } from "./AssemblyApp/Utils.jsx"
import { generateCurrentWord } from "./AssemblyApp/Utils.jsx"
import Confetti from "react-confetti"
import Countdown from "./AssemblyApp/Countdown.jsx"
export default function AssemblyApp() {
  //state values
  const [currentWord, setCurrentWord] = React.useState(() => generateCurrentWord())
  const [guessArray, setGuessArray] = React.useState([])
  //Derived Values
  const wrongGuess = guessArray.filter((letter, index) => {
    return !currentWord.includes(letter)
  }
  )
  const [timeUp, setTimeUp] = React.useState(false)
  const [resetTIme, setResetTime] = React.useState(false)
  const numGuessleft = (Languages.length - 1) - wrongGuess.length
  const isGameWon = currentWord.split('').every((letter) => guessArray.includes(letter))
  const isGameLost = wrongGuess.length >= Languages.length - 1|| timeUp
  const isGameOver = isGameLost || isGameWon 
  const lastGuessLetter = guessArray[guessArray.length - 1]

  // let indexes=wrongGuess.map((n,index)=>index)
  //static values



  const LanguageElement = Languages.map((language, index) => {
    const addlost = (index < wrongGuess.length)
    const className = clsx(
      'language-btn',
      {
        lost: addlost
      }
    )
    return (
      <button
        className={className}
        key={language.name}
        style={{
          backgroundColor: language.backgroundColor,
          color: language.color
        }}>
        {language.name}
      </button>
    )
  }
  )
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'
  const lettersElement = currentWord.split('').map((letter, index) => {
    const className = clsx(
      'letterbox',
      {
        redCol: !guessArray.includes(letter) && isGameLost
      }

    )
    return (
      <span
        key={index}
        className={className}
      >
        {guessArray.includes(letter) ? letter.toLocaleUpperCase() : isGameLost ? letter.toUpperCase() : null}
      </span>)
  }

  )
  function getLetters(letter) {
    setGuessArray((prevLetters) => prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter])
  }
  function handleState(seconds, minutes) {
    if (seconds == 0 && minutes == 0) {
      setTimeUp(true)
    }
  }


  const alphabetElement = alphabets.split('').map((letter, index) => {
    const isGuessed = guessArray.includes(letter)
    const isCorrect = isGuessed && currentWord.toLowerCase().includes(letter);
    const isWrong = isGuessed && !currentWord.toLowerCase().includes(letter);
    const className = clsx(
      'chip',

      {
        correct: isCorrect,
        wrong: isWrong,
        clear: wrongGuess.length > Languages.length - 1
      }

    )


    return (
      <button
        onClick={() => { getLetters(letter) }}
        className={className}
        key={index}
        disabled={isGameOver}
        aria-disabled={guessArray.includes(letter)
        }
        aria-label={`letter ${letter}`}
      >
        {letter}
      </button>
    )
  }
  )
  function resetGame() {
    setGuessArray([])
    setCurrentWord(generateCurrentWord())
    setResetTime(true)
    setTimeUp(false)
  }
  return (
    <>
      {isGameWon && <Confetti
        recycle={false}
        numberOfPieces={1000}
      />}
      <section className="header-section">
        <Heading
        />
        <Countdown
          isOver={isGameOver}
          reset={resetTIme}
          handleState={handleState}

        />
      </section>

      <section aria-live='polite' role='status' className="game-status">
        {
          isGameWon ?
            <div className="win-bar">
              <p>You Win!</p>
              <p>Well done!</p>
            </div>
            : isGameLost ?
              <div className="lose-bar">
                <p>You Lose!</p>
                <p>Nothing for you!</p>
              </div>

              :
              wrongGuess.length == 0 ? '' : <div className="farewell">{getFarewellText(Languages[wrongGuess.length - 1].name)}</div>
        }

      </section>
      <div className="languageList">
        {LanguageElement}
      </div>
      <section className="display-container">
        <div className="word-display">
          {lettersElement}
        </div>
      </section>
      {/*combined visually-hidden aria-live region for status update  */}
      <section
        className="sr-only"
        aria-live="polite"
        role="status"
      >
        <p>
          {
            currentWord.includes(lastGuessLetter) ?
              `correct! The letter ${lastGuessLetter} is in the word` :
              `sorry,the letter ${lastGuessLetter} is not in the word `}
          you have {numGuessleft}
        </p>
        <p>
          Current word:{currentWord.split('').map((letter) => guessArray.includes(letter) ? letter + '.' : 'Blank').join('')}

        </p>
      </section>
      <section className="keyboard" >
        {alphabetElement}
      </section>
      <section className="btn-container">
        {isGameOver && <button onClick={resetGame} className="new">New Game</button>}
      </section>
      <h3 className="guess-left">Guess left:{numGuessleft}</h3>
    </>


  )
}
// type rfce
