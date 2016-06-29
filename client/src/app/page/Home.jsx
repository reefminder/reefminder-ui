import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/header/Header.jsx';
import TabBar from '../components/tab-bar/TabBar.jsx'
import Card from '../components/card/Card.jsx';

class Home extends React.Component {

    componentDidMount() {
        //this.props.dispatch(...);
    }

    render() {
        return (<div>
            <Header/>
            <TabBar/>
        </div>);
    }
}

export default connect(state => state)(Home);