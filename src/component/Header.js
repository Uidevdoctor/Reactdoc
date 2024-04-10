import React from 'react'

const Header = () => {
  return (
    <header className='main-header'>
        <div className='container'>
            <div className='header-wrapper flex-box align-center space-between'>
                <h2>Logo</h2>
                <ul className='nav-list flex-box align-center'>
                    <li>
                        <a href=''>Home</a>
                    </li>
                    <li>
                        <a href=''>About</a>
                    </li>
                    <li>
                        <a href=''>Why Us</a>
                    </li>
                    <li>
                        <a href=''>Career</a>
                    </li>
                    <li>
                        <a href=''>Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header