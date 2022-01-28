import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav">
            <Link to='/'><h3 className='nav-items'>Home</h3></Link>
            <Link to='about'><h3 className='nav-items'>About</h3></Link>
            <Link to='projects'><h3 className='nav-items'>Portfolio</h3></Link>
            <Link to='contact'><h2 className='nav-items'>Contact</h2></Link>
        </nav>
    )
}

export default Nav;