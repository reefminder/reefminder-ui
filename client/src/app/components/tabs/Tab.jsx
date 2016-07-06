import React from 'react';
import Tabs from './Tabs.jsx';

export default class Tab extends React.Component {

    render() {
        return <div className="tab-container">
            <div className="tab">
                { this.props.title }
            </div>
            <div className="tab-content">
                { this.props.hidden ? "" : this.props.children }
            </div>
        </div>;
    }
}