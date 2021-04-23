import React from 'react';
import {Link} from 'react-router-dom'

function NavBar(props) {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/'>Page2</Link>
            <Link to='/'>Page3</Link>
        </nav>
    );
}

export default NavBar;