import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/layout/header/Header.jsx';
import Card from '../components/card/Card.jsx';

class Home extends React.Component {

    componentDidMount() {
        //this.props.dispatch(...);
    }

    render() {
        return <div>
            <Header/>
            <div className="container">
                <div className="row top-buffer">
                    <div className="col-sm-6">
                        <Card title="Davids Title" supportTitle="Support Title"/>
                    </div>
                    <div className="col-sm-6">
                        <Card/>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default connect(state => state)(Home);