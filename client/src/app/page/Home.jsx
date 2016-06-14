import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/layout/header/Header.jsx';
import Card from '../components/card/Card.jsx';

class Home extends React.Component {

    componentDidMount() {
        //this.props.dispatch(...);
    }

    render() {
        return (<div>
            <Header/>
            <Card/>
        </div>);
    }
}

export default connect(state => state)(Home);