import React from 'react';
import { connect } from 'react-redux';
import Tabs from '../components/tabs/Tabs.jsx';
import Tab from '../components/tabs/Tab.jsx';
import TemperatureCard from '../components/card/TemperatureCard.jsx'

export const mapStateToProps = state => {
    return {

    };
};

@connect(mapStateToProps)
export default class StatusTabs extends React.Component {

    componentDidMount() {
        //this.props.dispatch(...);
    }

    render() {
        return (<div className="center">
            <Tabs>
                <Tab title="Temperature">
                    <TemperatureCard />
                </Tab>
                <Tab title="Dissolved Oxygen">
                    Some more tab content
                </Tab>
                <Tab title="Water Level">
                    Some more more tab content
                </Tab>
            </Tabs>
        </div>);
    }
}