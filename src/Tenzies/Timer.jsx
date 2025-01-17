import React from "react"

export default function Timer(props) {
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [isRunning, setIsrunning] = React.useState(false);

  React.useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId =
        setInterval(() => {
          if (props.isRunning) {
            setIsrunning(false)
          }
          else {

            if (seconds < 59) {
              setSeconds(seconds + 1)
            }
            else if (minutes < 59) {
              setMinutes(minutes + 1)
              setSeconds(0)
            }
          }

        }, 1000);
    }
    else if (props.reset) {
      setMinutes(0)
      setSeconds(0)
    }
    return () => clearInterval(intervalId)
  }, [isRunning, seconds, minutes,props.reset]);

  const handleStart = () => {
    setIsrunning(true)
  }

  return (
    <div>
      <h1>
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </h1>
      <button onClick={handleStart}>Start Game</button>
    </div>
  )
}
