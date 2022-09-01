import React from 'react'
import { useState, useEffect } from "react"
import { get, post, put, erase } from "./../utility/fetchHealper"
import "./../css/Adds.css"
import Form from "./Form"
export default function Adds() {
  const [id, setId] = useState("");
  const [adds, setAdds] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [popUp, setPopUp] = useState(false);



  function showDetail(id) {

    const index = adds[id]
    if (index == adds[id]) {

      setTitle(adds[id].heading)
      setDescription(adds[id].description)
      setImg(adds[id].img)

      console.log(adds[id].heading);
    }
  }

  const handlePopUp = () => {
    setPopUp(current => !current); //toggle
  }

  useEffect(() => {
    get("http://127.0.0.1:8080/myPage").then((response) => setAdds(response.data))

  }, [])
  useEffect(() => {


  }, [])

  return (
    <div className='mainContainer'>
      <h2 className='title_adds'>Tillgängliga Tjänster</h2>
      <h2 className='mainHeading'></h2>
      {adds.map((add, id) => {
        return (
            <div className='addsContainer' key={id}>

              <img className='addsImg' src={add.img}></img>


              <div className='textBox'>

                <h3 className='addsHeading'>{add.heading}</h3>
                <p className='addsDescription'>{add.description}</p>

              </div>

              <button className='addsBtn' id={id}
                onClick={() => {
                  showDetail(id);
                  handlePopUp();
                }}
              >Mer info</button>


            </div>
        )
      })}

      {/* opacity: 0;
     visibility:hidden;
      z-index: -2; */}

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
            <h1 className='popUp--title'>{title}</h1>
            <p className='popUp--description'>{description}</p>
          </div>


          <Form />


        </div>
      </div>

    </div >
  )
}
