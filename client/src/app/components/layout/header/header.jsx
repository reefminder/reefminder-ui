import React from 'react';
import { connect } from 'react-redux';
import placeholderImg from '../../../../../assets/reefminder-logo.png';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import appBarTheme from '../../../../../style/theme/app_bar.scss';
import Avatar from 'react-toolbox/lib/avatar/Avatar';
import avatarTheme from '../../../../../style/theme/avatar.scss';
import FunctionBar from '../functionbar/FunctionBar.jsx';

class Header extends React.Component {

    render() {
        return <div>
            <FunctionBar/>
            <AppBar fixed theme={ appBarTheme }>
                <a href="/home"><img className="icon-placeholder" src={ placeholderImg }/></a>
                <div className="pull-right width-full">
                    <Avatar theme={ avatarTheme } image="https://placeimg.com/80/80/animals" />
                </div>
            </AppBar>
            <div className="spacer-app-bar"/>
        </div>;
    }
}

export default connect(state => state)(Header);