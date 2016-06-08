import React from 'react';
import { connect } from 'react-redux';
import placeholderImg from '../../../../../assets/placeholder.svg';

class Header extends React.Component {

    render() {
        return <div>
                <nav className="navbar navbar-dark bg-inverse header-height header">
                <a className="navbar-brand" href="#">
                    <img className="icon-placeholder" src={ placeholderImg }/>
                    ReefMinder
                </a>
            </nav>
        </div>;
    }
}

export default connect(state => state)(Header);