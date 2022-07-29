import React from 'react'
import { Link } from 'react-router-dom'
import waitList from '../assets/waitList.jpg'
import '../styles/joinWaitList.css'

export default function JoinWaitList() {
  return (
    <div className="join">
      <div className="mainContainer">
        <img src={waitList} />
        <div className="linkContainer">
          <p className="excited">Excited about Prudential coming to India?</p>
          <p className="joinList">Join the waitlist to stay updated</p>
          <div>
            <p className="excited">Enter Email</p>
            <input />
            <p className="excited">Enter Mobile Number</p>
            <input />
          </div>
        </div>
      </div>
    </div>
  )
}
