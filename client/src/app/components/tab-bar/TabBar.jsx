import React from 'react';
import { connect } from 'react-redux';
import Card from '../card/Card.jsx'

class TabBar extends React.Component {

    render() {
        return <div>
            <div className="row">
                <div className="col">
                    <Card/>
                </div>
            </div>
        </div>;
    }
}

export default connect(state => state)(TabBar);