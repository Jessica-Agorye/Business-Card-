import React from 'react'
import Image from '../Components/jess.jpeg'

const About = () => {
  return (
    <div className="about">
        <img src={Image} alt="" />
        <p className="p1">Jessica Agorye</p>
        <p className="p2">Web-Developer</p>
        <p className="p3">Devjess.website</p>
        <button className="btn1">Email</button>
        <button className="btn2">LinkedIn</button>

    </div>
  )
}

export default About