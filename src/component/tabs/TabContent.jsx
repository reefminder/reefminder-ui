import React from 'react';

export default class TabContent extends React.Component {

    render() {
        return <div className="tab-content-container">
            <div className={ this.props.color ? "tab-content-" + this.props.color : "tab-content-default"}>
                { this.props.children }
            </div>
        </div>
    };
}
