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
            <div className="center">
                <Tabs>
                    <Tab title="im a title" onclick="tabClick()">
                        Some tab content
                    </Tab>
                    <Tab title="im another title" onclick="tabClick()">
                        Some more tab content
                    </Tab>
                    <Tab title="im another other title" onclick="tabClick()">
                        Some more more tab content
                    </Tab>
                </Tabs>
            </div>
        </div>);
    }
}

export default connect(state => state)(Home);