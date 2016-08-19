import React from 'react';
import { connect } from 'react-redux';

export const mapStateToProps = state => {
    return {

    };
};

@connect(mapStateToProps)
export default class FunctionBar extends React.Component {

    render() {
        return <div>
            <div className="function-bar row pull-right">
                <div className="function-bar-link">Some Text</div>
                <div className="function-bar-link">Some More Text</div>
            </div>
        </div>;
    }
}