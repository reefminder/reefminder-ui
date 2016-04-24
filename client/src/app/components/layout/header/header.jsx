import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {

    render() {
        return <nav class="navbar navbar-light bg-faded">
            <a class="navbar-brand" href="#">Navbar</a>
        </nav>;
    }
}

export default connect(state => state)(Header);