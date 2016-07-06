import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/header/Header.jsx';
import Tabs from '../components/tabs/Tabs.jsx';
import Tab from '../components/tabs/Tab.jsx';
import Card from '../components/card/Card.jsx';

class Home extends React.Component {

    componentDidMount() {
        //this.props.dispatch(...);
    }

    render() {
        return (<div>
            <Header/>
            <Tabs>
                <Tab title="im a title">
                    Some tab content
                </Tab>
                <Tab title="im another title">
                    Some more tab content
                </Tab>
            </Tabs>
        </div>);
    }
}

export default connect(state => state)(Home);