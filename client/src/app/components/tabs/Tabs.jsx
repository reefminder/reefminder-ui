import React from 'react';

export default class Tabs extends React.Component {

    const tabClick = () => {
        alert('setting state');
        this.setState({isActive: true});
    }

    render() {
        return <div>
            { this.props.children.forEach((element) => element.props.tabClick = this.tabClick)}
            { this.props.children }
        </div>;
    }
}