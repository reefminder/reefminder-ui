import React from 'react';
import { connect } from 'react-redux';
import placeholderImg from '../../../../../assets/placeholder.svg';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import appBarTheme from '../../../../../theme/app_bar.scss';
import Avatar from 'react-toolbox/lib/avatar/Avatar';
import avatarTheme from '../../../../../theme/avatar.scss';

class Header extends React.Component {

    render() {
        return <div>
            <AppBar fixed flat theme={ appBarTheme }>
                <a href="/home"><img className="icon-placeholder" src={ placeholderImg }/></a>
                <div className="pull-right width-full">
                    <Avatar theme={ avatarTheme } image="https://placeimg.com/80/80/animals" />
                </div>
            </AppBar>
        </div>;
    }
}

export default connect(state => state)(Header);