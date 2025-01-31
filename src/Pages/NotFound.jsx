import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const NotFound = () => {
  return (
    <>
    <section className='notFound'>
      <div className="container">
        <img src="/notFound.svg" alt="notfound" />
        <h1>ARE YOU LOST?</h1>
        <p>Unable to find the page you are looking for.</p>
        <Link to={"/"}>Back to Home{" "} <span><HiOutlineArrowNarrowRight/></span></Link>
      </div>
    </section>
    </>
  )
}

export default NotFound