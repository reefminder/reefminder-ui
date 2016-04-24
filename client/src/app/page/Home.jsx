import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {

    componentDidMount() {
        //this.props.dispatch(...);
    }

    render() {
        return this.renderAddVehicleForm();
    }

    renderAddVehicleForm() {
        return <div className="temp">
            <div>
                <label>
                    A label
                </label>
            </div>

        </div>;
    }
}

export default connect(state => state)(Home);