import React from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/valueDetail.css'
import AMBITIOUS from '../assets/ambitious.png'
import AMBITIOUS_LOGO from '../assets/ambitiousLogo.png'
import CURIOUS from '../assets/curious.jpg'
import CURIOUS_LOGO from '../assets/curiousLogo.png'
import EMPATHETIC from '../assets/empathetic.jpg'
import EMPATHETIC_LOGO from '../assets/empatheticLogo.png'
import COURAGEOUS from '../assets/courageous.jpg'
import COURAGEOUS_LOGO from '../assets/courageousLogo.png'

export default function ValueDetail() {
  let object = useLocation()
  var id = object.pathname.substring(object.pathname.lastIndexOf('/') + 1)

  const detail = [
    {
      id: 1,
      topImage: AMBITIOUS,
      logo: AMBITIOUS_LOGO,
      desc:
        'Our business is competitive. We push ourselves and each other to greatness, but not at all costs. Being a team player and doing the right thing comes first.',
    },
    {
      id: 2,
      topImage: CURIOUS,
      logo: CURIOUS_LOGO,
      desc:
        'The world is changing faster than ever. No one has all the answers. We are humble and always listen and seek to learn and understand.',
    },
    {
      id: 3,
      topImage: EMPATHETIC,
      logo: EMPATHETIC_LOGO,
      desc:
        'There’s an age-old wisdom in walking a mile in another’s shoes. We do that every day, whether it’s with customers or colleagues.',
    },
    {
      id: 4,
      topImage: COURAGEOUS,
      logo: COURAGEOUS_LOGO,
      desc:
        "Prudential's success and culture belongs to all of us - it's our shared legacy. We do the right thing and bring our full selves to work to build it together.",
    },
  ]

  const data = detail[id - 1]
  return (
    <div className="valueDetail">
      <div className="mainContainer">
        <img src={data.topImage} className="topImage" />
        <div className="rightContainer">
          <img className="logoImage" src={data.logo} />
          <p className="text">{data.desc}</p>
        </div>
      </div>
    </div>
  )
}
