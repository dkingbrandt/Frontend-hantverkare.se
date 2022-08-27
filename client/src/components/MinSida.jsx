import React from 'react'
import { useState } from 'react'
import { erase, post, put, get } from "../utility/fetchHealper"
import "./../css/Adds.css"

export default function MinSida() {

  const [heading, setHeading] = useState("")
  const [description, setDescription] = useState("")
  const [img, setImg] = useState("")
  const [counter, setCounter] = useState(0)
  const [popUp, setPopUp] = useState(false)






  const handlePopUp = () => {
    setPopUp(current => !current); //toggle
  }


  return (

    <div>
      <div>
        <input value={img} placeholder="Bild" onChange={(e) => setImg(e.target.value)}></input>
        <input value={heading} placeholder="Rubrik" onChange={(e) => setHeading(e.target.value)}></input>
        <textarea value={description} placeholder="Beskrivning" onChange={(e) => setDescription(e.target.value)} ></textarea>

        <button onClick={() => {

          handlePopUp();
        }} >Förhandsgranska</button>

        <div className='blurr'
          style={{
            opacity: popUp ? '1' : '0',
            visibility: popUp ? 'visible' : 'hidden',
            zIndex: popUp ? '2' : '-2',

          }}

        >
          <div className='popUp'>
            <div>
              <p className="popUp--close" onClick={handlePopUp} >&times; </p>
              <img className='popUp--img' src={img}></img>
              <h1 className='popUp--title'>{heading}</h1>
              <p className='popUp--description'>{description}</p>

              <button onClick={() => {
                post("http://127.0.0.1:8080/myPage", {
                  id: counter,
                  img: img,
                  heading: heading,
                  description: description,


                })

                setCounter(Date.now())
              }}
              >Publicera Annons</button>
            </div>





          </div>
        </div>




      </div>
    </div >
  )
}
