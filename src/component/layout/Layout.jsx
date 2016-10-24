import React from 'react';
import Header from '../header/Header.jsx';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div id="viewport">
                    { this.props.children }
                </div>
                <div className="footer"/>
            </div>
        )
    }
}