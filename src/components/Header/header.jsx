import './header.css'

export function Header(){
    return(
        <header className='header'>
        <p>Javier's Portfolio</p>
        <nav className='nav-menu'>
        <a href='#about-me'>About Me</a>
        <a href='#resume'>Resume</a>
        <a href='#projects'>Projects</a>
        <a href='#skills'>Skills</a>
        <a href='#contact-me'>Contact Me</a>

        </nav>
      </header>
    )
}