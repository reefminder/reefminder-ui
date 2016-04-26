import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {

    render() {
        return <div className="container top-buffer">
            <nav className="navbar navbar-dark bg-inverse header-height">
                <a className="navbar-brand" href="#">ReefMinder</a>
            </nav>
        </div>;
    }
}

export default connect(state => state)(Header);