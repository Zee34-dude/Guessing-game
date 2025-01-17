import { useState ,useEffect} from "react"
export default function Main() {
  const [Meme, setMeme] = useState({
    topText: 'One Does not simply',
    bottomText: 'walk into Mordor',
    image: 'https://i.imgflip.com/9f7zj4.jpg'
  })
  const [imageData, setImageData]=useState([ ])
  function handleChange(event) {
    const { value,name } = event.currentTarget
    setMeme({
      ...Meme,  
      [name]:value})
      
  }

  useEffect(()=>{
    fetch('https://api.imgflip.com/get_memes').then(res=>res.json())
    .then(data=>setImageData(data.data.memes))
  },[])
  function handleImageUrl(){
   let number=Math.floor(Math.random()*100)
    console.log(number)
    setMeme({
      ...Meme,
      image:imageData[number].url
    })
  }

  return (
    <main>
      <div className="form">
        <label htmlFor="">
          Top Text
          <input type="text"
            placeholder="one does not simply"
            name="topText" 
            onChange={handleChange} 
            value={Meme.topText}/>
        </label>
        <label htmlFor="">
          Bottom Text
          <input type="text"
            placeholder="walk into Morder"
            name="bottomText" 
            onChange={handleChange}
            defaultValue={Meme.bottomText}/>
        </label>
        <button onClick={handleImageUrl}>get a new image</button>
      </div>
      <div className="meme">
        <img className="meme-image" height='300px' src={Meme.image} alt="" />
        <span className="top text">{Meme.topText}</span>
        <span className="bottom text">{Meme.bottomText}</span>
      </div>
    </main>
  )
}