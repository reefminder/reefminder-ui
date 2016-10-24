import React from 'react';

export default class Card extends React.Component {

    render() {
        return <div className={ "card " + this.props.size }>
            <div className="card-content">
                { this.props.children }
            </div>
        </div>;
    }
}