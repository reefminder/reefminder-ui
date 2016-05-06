import React from 'react';

const getTitleBlock = (props) => {
    if (props.title) {
        return <div className="card-block">
            <h4 className="card-title">{ props.title }</h4>
            <h6 className="card-subtitle text-muted">{ props.supportTitle }</h6>
        </div>
    }
};

class Card extends React.Component {

    render() {
        return <div className="card shadow">
            { getTitleBlock(this.props) }
                <div className="container">
                    <div className="icon-container">
                        <div className={ this.props.iconClass }/>
                    </div>
                </div>
                <div className="card-block">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
        </div>;
    }
}

export default Card;