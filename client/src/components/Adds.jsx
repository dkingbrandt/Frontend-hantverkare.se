import React from 'react'
import { useState, useEffect } from "react"
import { get, post, put, erase } from "./../utility/fetchHealper"
import "./../css/Adds.css"
export default function Adds() {
  const [id, setId] =useState("");
  const [adds, setAdds] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  function showDetail(id){

    const index = adds[id]  
    if(index == adds[id]){
      
      setTitle(adds[id].heading)
      setDescription(adds[id].description)
      setImg(adds[id].img)
      
      console.log(adds[id].heading);
    }
  }

  useEffect(() => {
    get("http://127.0.0.1:8080/myPage").then((response) => setAdds(response.data))

  }, [])
  useEffect(() => {
    

  }, [])

  return (
    <div className='mainContainer'>
      <h2 className='mainHeading'>Tillgängliga Tjänster</h2>
      {adds.map((add, id) => {
        return (

          <div>

          <div className='addsContainer' key={id}  >

            <img className='addsImg' src={add.img}></img>


            <div className='textBox'>
              
              <h3 className='addsHeading'>{add.heading}</h3>
              <p className='addsDescription'>{add.description}</p>
              
            </div>

           <button className='addsBtn' id={id} onClick={()=> showDetail(id)}>mer info</button>


          </div>

         
        
          </div>
        )
      })}

      <div className='blurr'>
            <img src={img}></img>
            <h1>{title}</h1>
            <p>{description}</p>


            <
          
            <button>
              chatt
            </button>
          </div>

    </div>
  )
}
