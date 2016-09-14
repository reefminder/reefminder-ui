import React from 'react';

import Avatar from '../../../../../node_modules/react-toolbox/lib/avatar/Avatar';
import avatarTheme from '../../../../style/theme/avatar.scss';

export default class Tab extends React.Component {

    render() {
        return <div className="tab-container">
            <div className={ this.props.isActive ? (this.props.color ? "tab active-" + this.props.color : "tab active-default") : "tab" } onClick={ this.props.tabClick.bind(this) }>
                <Avatar theme={ avatarTheme } image="https://placeimg.com/80/80/animals" />
                <span className="tab-title-text"> { this.props.title } </span>
            </div>
        </div>;
    };
}
