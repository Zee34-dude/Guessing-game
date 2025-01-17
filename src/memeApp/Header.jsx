import trollFace from "./images/troll-face.jpg"

export default function Header(){
  return(
    <header className="header">
      <img width='30px' height='
    30px' src={trollFace} alt="" />
      <h1>Meme Generator</h1>
    </header>
  )
}