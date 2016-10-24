import React from 'react';
import { connect } from 'react-redux';
import StatusTabs from './StatusTabs.jsx';
import Card from '../component/card/Card.jsx'
import QuickViewCard from '../component/card/QuickViewCard.jsx'

import DatePicker from 'react-toolbox/lib/date_picker';
import datePickerTheme from '../style/theme/date_picker.scss';

export const mapStateToProps = state => {
    return {

    };
};

@connect(mapStateToProps)
export default class Home extends React.Component {

    componentDidMount() {
        //this.props.dispatch(...);
    }

    render() {
        return (<div className="content-container">
            <Card>
                A Card to select the aquarium
                <DatePicker label="Select Date" theme={ datePickerTheme }/>
            </Card>
            <div className="content-row">
                <QuickViewCard title="Ambient Room Temperature">Some Content A</QuickViewCard>
                <QuickViewCard title="Aquarium Temperature">Some Content B</QuickViewCard>
                <QuickViewCard title="pH">Some Content C</QuickViewCard>
                <QuickViewCard title="ORP">Some Content D</QuickViewCard>
                <QuickViewCard title="Dissolved Oxygen">Some Content E</QuickViewCard>
                <QuickViewCard title="Conductivity">Some Content F</QuickViewCard>
                <QuickViewCard title="Sump Water Level">Some Content F</QuickViewCard>
            </div>
            <div className="content-row">
                <Card size="size-medium">Some Content A</Card>
                <Card size="size-medium">Some Content B</Card>
                <Card size="size-medium">Some Content C</Card>
                <Card size="size-medium">Some Content D</Card>
                <Card size="size-medium">Some Content E</Card>
                <Card size="size-medium">Some Content F</Card>
            </div>
            <div className="content-row">
                <Card size="size-large">Some Content A</Card>
                <Card size="size-large">Some Content B</Card>
            </div>
            <Card>
                <StatusTabs />
            </Card>
        </div>);
    }
}