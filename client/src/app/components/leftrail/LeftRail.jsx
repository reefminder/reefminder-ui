import React from 'react';
import placeholderImg from '../../../../assets/reefminder-logo.png';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="rail-container">
                <div className="rail-logo">
                    <img className="icon-placeholder rail-logo-img" src={ placeholderImg }/>
                </div>
                <div className="rail-divide"/>
                <div className="rail-title">
                    This is a title
                </div>
                <div className="rail-divide"/>
                <div className="rail-info">
                    YOUR AQUARIUMS
                </div>
                <div className="rail-link">
                    This is content
                </div>
            </div>
        )
    }
}