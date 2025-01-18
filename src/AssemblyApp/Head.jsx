export default function Heading({ isGameLost, isGameWon }) {
  return (
    <main>
      <header>
        <h1> Guess The Word </h1>
        <p>Guess the word within 8 attempts. You lose a life for each letter you guess wrong.</p>
      </header>
    </main>

  )
}