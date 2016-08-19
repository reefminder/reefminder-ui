import React from 'react';
import Header from '../../components/header/Header.jsx';
import LeftRail from '../../components/leftrail/LeftRail.jsx';

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