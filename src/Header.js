import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <img className="header__logo" src='https://p.kindpng.com/picc/s/17-172203_illustration-hd-png-download.png'/>
            <div className="header__search"> <input className="header__searchInput" type="text" />
            {/*Logo */}
             </div>
            <div className="header__nav">
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello Guest</span>
                    <span className='header__optionLineOne'>Sign in</span>
                </div>
                <div className='header__option'>
                <span className='header__optionLineOne'>returns</span>
                <span className='header__optionLineOne'>& Orders</span>
                </div>
                <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineOne'>Prime</span>
                </div>
            </div>

        </div>
    )
}

export default Header
