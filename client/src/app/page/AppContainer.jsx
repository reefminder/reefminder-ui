import React from 'react';
import { Link } from 'react-router';

export default class AppContainer extends React.Component {
    render() {
        return (
            <div className="application-container">
                <Link to='/app/home'>Home</Link>
                <Link to='/app/about'>About</Link>
                {this.props.children}
            </div>
        );
    }
}