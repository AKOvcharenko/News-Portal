import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {
    render (){
        return <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/">
                                <img alt="Brand" src="./img/logo.png"/>
                            </Link>
                        </div>
                    </div>
                </nav>
    }
}

export default Header;