import React from 'react'
import {data} from '../restApi.json'

const Team = () => {
  return (
    <section className='team' id='team'>
        <div className="container">
            <div className="heading_section">
                <h1 style={{fontSize:55}}>MEET OUR TEAM</h1>
                <p style={{fontSize:25}}>Our passionate team is dedicated to excellence, ensuring every detail is taken care of to bring you the finest experience possible!</p>       
            </div>
            <div className="team_container">
                {
                    data[0].team.map(element=>{
                     return(
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.name} />
                            <h3>{element.name}</h3>
                            <p>{element.designation}</p>
                        </div>
                     )   
})
                }
                </div>            
        </div>

    </section>
  )
}

export default Team