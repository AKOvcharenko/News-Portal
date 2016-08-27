import React, {Component} from 'react';

class Header extends Component {
    render (){
        return <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                <img alt="Brand" src="./img/logo.png"/>
                            </a>
                        </div>
                    </div>
                </nav>
    }
}

export default Header;