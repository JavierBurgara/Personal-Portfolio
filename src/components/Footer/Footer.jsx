import './Footer.css'
import { SocialIcon } from 'react-social-icons'

export function Footer() {
    return (
        <footer className='footer-container' >
            <p className='footer-text'>copyright &copy;2023 UCSD FullStackBootCamp Student. designed by <span>Javier Burgara</span></p>
            <ul className="socials">
                <SocialIcon url="https://github.com/JavierBurgara?tab=repositories" />
                <SocialIcon url="https://www.linkedin.com/in/javier-burgara/"/>
            </ul>
        </footer>
    )
}