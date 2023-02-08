import React, {useState } from "react";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import {Link} from 'react-scroll'
// import { Link } from "react-router-dom";
// import "./styles/header.css";

function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const hanndleScroll = () => {
    if (window.scrollY >= 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  window.addEventListener("scroll", hanndleScroll);

  function handleClick(event) {
    // event.preventDefault();
    // console.log("clicked.");
  }
  return (
    <header>
      <Navbar
        className={isScroll ? "navbar firstchange" : "navbar colorChange"}
        collapseOnSelect
        // expand="xl"
        variant={!isScroll ? "light" : "drak"}
        fixed="top"
      >
        <div className="header">
          <div className='nav-img d-flex'>
          
            <div className='logo'>
              <img src={require('../../image/acm.png')} alt="" />
            </div>
            <div className='logo'>
              <img src={require('../../image/psu.png')} alt="" />
            </div>
            <div className='logo'>
              <img src={require('../../image/ccis.png')} alt="" />
            </div>

          </div>
          <Navbar id="responsive-navbar-nav">

            <Nav className='nav-link'>
              <NavLink className='link-navbar'  onClick={handleClick}> <Link  to="about" spy={true} smooth={true}>
                About</Link></NavLink>
              <NavLink className='link-navbar'  onClick={handleClick}> <Link to="rule" spy={true} smooth={true}>Rules</Link></NavLink>
              <NavLink className='link-navbar'  onClick={handleClick}> <Link to="eligbility" spy={true} smooth={true}>Eligbility</Link></NavLink>
              <NavLink className='link-navbar'  onClick={handleClick}> <Link to="problem" spy={true} smooth={true}>Submission</Link></NavLink>
              <NavLink className='link-navbar'  onClick={handleClick}> <Link to="scoring" spy={true} smooth={true}>Scoring</Link></NavLink>
              <NavLink className='link-navbar'  onClick={handleClick}> <Link to="registration" spy={true} smooth={true}>Registration</Link></NavLink>
              <NavLink className='link-navbar' onClick={handleClick}> <Link to="prizes" spy={true} smooth={true}>Prizes</Link></NavLink>
              <NavLink className='link-navbar'  onClick={handleClick}> <Link to="Support" spy={true} smooth={true}>Support</Link></NavLink>

            </Nav>
          </Navbar>
        </div>
      </Navbar>
    </header>
  );
}
export default Header;