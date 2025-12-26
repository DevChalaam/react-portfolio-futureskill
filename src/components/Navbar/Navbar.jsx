import React, { useState } from 'react'
import style from './Navbar.module.css'
import { FaBars } from "react-icons/fa6";

function Navbar() {

    // State to use toggle menu bar
    const [isToggle, setToggle] = useState(false);

    function handleToggle() {
        setToggle(!isToggle)
    }
    
    // Contant
  return (
    <nav>
        <div className={style.container}>
            <div className={style.nav_container}>
                <div className={style.logo}>
                    <a href="#">JD PORT</a>
                </div>

                <ul>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <div className={style.button}>
                    <a href="#">Hire Me</a>
                </div>
            </div>

            {/* Mobile Menu */}
            <FaBars className={style.bars} onClick={handleToggle} />
            {/* use state isToggle check if else */}
            {isToggle ? (
                // is ture give show ul
                <>
                {/* use react fagment */}
                <ul className={style.mobile_menu}>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className={style.mobile_button}>
                    <a href="#">Hire Me</a>
                </div>
                </>
                // if user click button -> hied button
            ) : null}
        </div>
    </nav>
  )
}

export default Navbar
