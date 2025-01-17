import React from 'react'
import {Link} from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading" >Discover the Essence of Exquisite Food.</h1>
                    <p style={{fontSize:20}}>Everything You Need to Know About Our Culinary Journey.</p>
                </div>
                <p className='mid'>Indulge in a story of passion for creating unforgettable dining experiences. From the finest ingredients to our dedication to quality, we are committed to bringing you the best in every bite.</p>
                <Link to={"/"}>Explore Menu {" "}<span>
                   <HiOutlineArrowNarrowRight/> </span>
                    </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
        </section>
  )
}

export default About