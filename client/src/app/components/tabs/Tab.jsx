import React from 'react';
import Tabs from './Tabs.jsx';

export default class Tab extends React.Component {

    constructor() {
        super();
        this.state = {
          isActive: false
        };

        //this.tabClick = this.tabClick.bind(this);
    }



    render() {
        return <div className="tab-container">
            <div className="tab" onClick={ this.props.onClick }>
                { this.props.title }
            </div>
            <div className="tab-content-container">
                { this.state.isActive ?<div className="tab-content"> { this.props.children } </div>: "" }
            </div>
        </div>;
    }
}