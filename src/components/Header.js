import { useState } from 'react'
import '../Header.css'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="master-header">
            <header className="header">
                <button className="nav-button hover" onClick={toggleMenu}>
                    <img
                        className="nav-button-img"
                        src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/29-512.png"
                    />
                </button>
                <h1 className="title">BurlMountain</h1>
                <nav className={`mobile-nav ${isMenuOpen ? null : 'mobile-nav-hide'}`}>
                    <h3 className="mobile-nav-item">Welcome</h3>
                    <h3 className="mobile-nav-item">Media</h3>
                    <h3 className="mobile-nav-item">Blog</h3>
                </nav>


            </header>
            <div className="welcome-text-container">
                <h1 className="welcome-text-header">QUALITY MUSIC FROM A QUALITY MAN</h1>
                <h2 className="welcome-text">Original Music by Songwriter, Sean Taggart</h2>
                <button className="listen-button">
                    <h2>Listen</h2>
                </button>
            </div>
        </div>
    );
}
export default Header