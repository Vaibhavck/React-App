import {React, Component} from 'react';
import '../css/navbar.css';

class Navbar extends Component{

    render(){

        const navLinks = (
            <div>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/blog">Blog</a></li>
            </div>
        )

        return(
            <div>
                <nav className="nav-wraper black">
                    <div className="container">
                        <a className="brand-logo" href="/">Game Hub</a>
                        <a className="sidenav-trigger" data-target="mobile-links"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">{navLinks}</ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-links">{navLinks}</ul>
            </div>
        )
    }

}


export default Navbar;