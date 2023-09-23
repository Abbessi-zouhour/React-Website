import React from 'react'
import { Link } from "react-router-dom"
import bannerSandwich from '../assets/bannerSandwich.jpeg'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home"  style={{ backgroundImage: `url(${ bannerSandwich })` }}>
      <div 
      className="headerContainer" >
        <h1> Tunisian Sandwich </h1>
        <Link to="/menu">
        <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
