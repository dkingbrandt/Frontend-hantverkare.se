import React from 'react'
import { useState, useEffect } from "react"
import { get, post, put, erase } from "./../utility/fetchHealper"
import "./../css/Adds.css"
export default function Adds() {
  const [adds, setAdds] = useState([])

  useEffect(() => {
    get("http://127.0.0.1:8080/myPage").then((response) => setAdds(response.data))

  }, [])

  return (
    <div className='mainContainer'>
      <h2 className='mainHeading'>Tillgängliga Tjänster</h2>
      {adds.map((add) => {
        return (

          <div className='addsContainer'>

            <img className='addsImg' src={add.img}></img>


            <div className='textBox'>
              <h3 className='addsHeading'>{add.heading}</h3>
              <p className='addsDescription'>{add.description}</p>
            </div>

           <button className='addsBtn'>mer info</button>


          </div>

        )
      })}

    </div>
  )
}
