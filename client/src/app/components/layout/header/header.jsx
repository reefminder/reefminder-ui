import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {

    render() {
        return <nav className="navbar navbar-light bg-faded">
            <a className="navbar-brand" href="#">ReefMinder</a>
        </nav>;
    }
}

export default connect(state => state)(Header);