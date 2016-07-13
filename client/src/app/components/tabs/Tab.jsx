import React from 'react';

import Avatar from '../../../../../node_modules/react-toolbox/lib/avatar/Avatar';
import avatarTheme from '../../../../style/theme/avatar.scss';

export default class Tab extends React.Component {

    render() {
        return <div className="tab-container">
            <div className={ this.props.isActive ? "tab active" : "tab" } onClick={ this.props.tabClick.bind(this) }>
                <Avatar theme={ avatarTheme } image="https://placeimg.com/80/80/animals" />
                { " " + this.props.title }
            </div>
            <div className="tab-content-container">
                { this.props.isActive ? <div className="tab-content"> { this.props.children } </div> : "" }
            </div>
        </div>;
    };
}
