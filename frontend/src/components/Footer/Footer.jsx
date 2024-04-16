import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="logo" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque aperiam enim magni ipsum, impedit perferendis consectetur nobis illo, esse iusto sit debitis placeat aliquam blanditiis consequuntur molestiae? Eum, eius a?</p>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt="facebook_icon" />
                        <img src={assets.twitter_icon} alt="twitter_icon" />
                        <img src={assets.linkedin_icon} alt="linkedin_icon" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 7373185857</li>
                        <li>jaikrishnavr@outlook.com</li>
                    </ul>
                </div>

            </div>
            <hr />
            <p className="footer-copyright">Copyright {new Date().getFullYear()} &copy; Jaikrishnavr.com - All Right Reserved</p>
        </div>
    )
}

export default Footer