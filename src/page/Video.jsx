import React from 'react';
import { connect } from 'react-redux';
import StatusTabs from './StatusTabs.jsx';
import Card from '../component/card/Card.jsx'

export const mapStateToProps = state => {
    return {

    };
};

@connect(mapStateToProps)
export default class Video extends React.Component {

    componentDidMount() {
        //this.props.dispatch(...);
    }

    render() {
        return (<div>
            <Card>
                <img src="http://192.168.1.71:9090/stream/video.mjpeg" alt="img" />
            </Card>
        </div>);
    }
}