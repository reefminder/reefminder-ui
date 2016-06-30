import React from 'react';
import { connect } from 'react-redux';
import Tab from '../tab-bar/Tab.jsx'

class TabBar extends React.Component {

    render() {
        return <div>
            <div className="row">
                <div className="col">
                    <Tab title={"title 1"}/>
                    <Tab title={"title 2"}/>
                    <Tab title={"title 3"}/>
                </div>
            </div>
        </div>;
    }
}

export default connect(state => state)(TabBar);