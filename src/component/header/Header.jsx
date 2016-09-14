import React from 'react';
import { connect } from 'react-redux';
import AppBar from '../../../node_modules/react-toolbox/lib/app_bar/AppBar';
import appBarTheme from '../../style/theme/app_bar.scss';
import Avatar from '../../../node_modules/react-toolbox/lib/avatar/Avatar';
import avatarTheme from '../../style/theme/avatar.scss';

export const mapStateToProps = state => {
    return {

    };
};

@connect(mapStateToProps)
export default class Header extends React.Component {

    render() {
        return <div>
            <AppBar fixed theme={ appBarTheme }>
                <div className="pull-right width-full">
                    <Avatar theme={ avatarTheme } image="https://placeimg.com/80/80/animals" />
                </div>
            </AppBar>
        </div>;
    }
}