import React from 'react'
import {data} from '../restApi.json'

const Menu = () => {
  return (
    <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className='heading' style={{fontWeight:300}}>Sizzling Hot Dishes</h1>
                <p style={{fontSize:20, fontWeight:399 }}>Dive into our selection of hot and savory dishes, crafted with the finest ingredients to bring warmth and flavor to your table. Each dish is a perfect blend of taste and freshness, made to satisfy your cravings.</p>

            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element=>{
                        return(
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Menu