import React from 'react';
import Header from '../header/Header.jsx';
import LeftRail from '../leftrail/LeftRail.jsx';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <LeftRail/>
                <div id="viewport">
                    { this.props.children }
                </div>
            </div>
        )
    }
}