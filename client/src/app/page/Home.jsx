import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/layout/header/Header.jsx'

class Home extends React.Component {

    componentDidMount() {
        //this.props.dispatch(...);
    }

    render() {
        return this.renderAddVehicleForm();
    }

    renderAddVehicleForm() {
        return
        <Header>
            <div className="temp">
                <div>
                    <label>
                        A label
                    </label>
                </div>
            </div>
        </Header>;
    }
}

export default connect(state => state)(Home);