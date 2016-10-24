import React from 'react';
import { connect } from 'react-redux';
import Avatar from '../../../node_modules/react-toolbox/lib/avatar/Avatar';
import avatarTheme from '../../style/theme/avatar.scss';
import placeholderImg from '../../../assets/reefminder-logo.png';

export const mapStateToProps = state => {
    return {

    };
};

@connect(mapStateToProps)
export default class Header extends React.Component {

    render() {
        return <div>
            <div className="header-container">
                <img className="header-logo" src={ placeholderImg }/>
                <div className="header-avatar pull-right">
                    <Avatar theme={ avatarTheme } image="https://placeimg.com/80/80/animals" />
                </div>
            </div>
            <div className="header-inset">
                <div className="link">
                    <div className="link-text">
                        Link A
                    </div>
                </div>
                <div className="link">
                    <div className="link-text">
                        Link B
                    </div>
                </div>
                <div className="link">
                <div className="link-text">
                    Link C
                </div>
            </div>
            </div>
        </div>;
    }
}