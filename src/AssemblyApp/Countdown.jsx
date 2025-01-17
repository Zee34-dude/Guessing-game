import React from "react";
import clsx from "clsx";
export default function Countdown(props) {
  const [minutes, setMinutes] = React.useState(0)
  const [seconds, setSeconds] = React.useState(59)

  const [start, setStart] = React.useState(false)
  React.useEffect(() => {
    let intervalId;
    if (start) {
      intervalId =
        setInterval(() => {

          if (seconds > 0) {
            setSeconds(seconds - 1)
          }
          else if (minutes > 0) {
            setMinutes(minutes - 1)
            setSeconds(59)
          }
        }, 1000)
    }
    else if (props.reset) {
      setMinutes(0)
      setSeconds(59)
    }
    if (props.isOver) {
      setStart(false)
    }


    return () => clearInterval(intervalId)
  }, [start, seconds, minutes, props.reset, props.isOver])

  const handleStart = () => {
    setStart(true)
  }
  React.useEffect(() => {
    props.handleState(seconds, minutes);
  },[seconds,minutes])

  const className = clsx(
    {
      redCol: seconds < '11',
    }

  )
  return (
    <div className="timer">
      <h1 className={className}>
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </h1>
      <button className='start-game' onClick={handleStart}>Start Timer</button>
    </div>
  )
}

