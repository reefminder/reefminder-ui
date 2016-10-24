import React from 'react';
import Card from '../../component/card/Card.jsx'

export default class QuickViewCard extends React.Component {

    render() {
        return <Card size="size-small">
            <div className="quickview-title">
                { this.props.title }
            </div>
            <div className="quickview-divider"/>
            <div className="quickview-content">
                { this.props.children }
            </div>
        </Card>;
    }
}