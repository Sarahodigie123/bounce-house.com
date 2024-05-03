import React from 'react';
import './design.css';
import { FaUserCircle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Header() {


  return (
      <div className='header'>
        <div className="text">
          Lets Bounce Frisco 
          <div className='emojis'>
            <a href="profile.asp">Home</a>
            <a href="book.asp"> About</a>
            <a href="book.asp">Contact</a>
            <a href="book.asp"> Rent</a>
            <a href="book.asp">Refer Friends</a>
            <div className="buttons"> 
              <a href="book.asp"> <FaUserCircle style={{ color: 'black' }}/> </a>
              <a href="book.asp"><FaInstagram style={{ color: 'black' }}/></a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Header;
