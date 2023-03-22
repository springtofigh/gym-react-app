import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Header = () => {

  const [menu , setMenu] = useState(false);

  return (
    <div className="header">
        <img src={Logo} alt="fitclub" className="logo" />
        <div>
          {
            menu ?
            <AiOutlineClose className='menu-icon' onClick={() => setMenu(false)} /> :
            <HiMenu className='menu-icon' onClick={() => setMenu(true)} />
          }
          
        </div>
        <ul className="header-menu">
            <li>
            <Link
            activeClass="active"
            to='header'
            spy={true}
            smooth={true}
            >خانه</Link>
            </li>
            <li>
              <Link
              to='programs'
              spy={true}
              smooth={true}
              >برنامه‌ها</Link>
              </li>
            <li>
              <Link
              to='resons'
              spy={true}
              smooth={true}
              >
              چرا ما
              </Link>
            </li>
            <li>
              <Link
              to='plans'
              spy={true}
              smooth={true}
              >اهداف</Link></li>
            <li>
              <Link
              to='testimonials'
              spy={true}
              smooth={true}
              >نظرات</Link>
              </li>
        </ul>
    </div>
  )
}

export default Header;