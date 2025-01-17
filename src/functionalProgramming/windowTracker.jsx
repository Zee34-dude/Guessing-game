import React from 'react'
export default function WindowTracker() {
  const [windowWidth,setWindowWidth]=React.useState(window.innerWidth)
  function changeWidth(){
    console.log('resized')
    setWindowWidth(window.innerWidth)
  }
  React.useEffect(()=>{
    window.addEventListener('resize', changeWidth);
    // returns a function that cleans any side effect that was created inside the  useEffect
    return function(){
      window.removeEventListener('resize',changeWidth)
    }
  })
  
  return (<h1>Window Width:{windowWidth}</h1>)
}