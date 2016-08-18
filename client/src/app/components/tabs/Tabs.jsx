import React from 'react';

let activeTabIndex = null;

export default class Tabs extends React.Component {

    constructor(){
        super();
        this.onContainerClick = this.onContainerClick.bind(this);
    }

    cloneWithProperties(){
        var i = 0;
        return React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                tabClick: this.tabClick,
                isActive: activeTabIndex === i ? true : false,
                id: i++
            })
        );
    };

    tabClick(){
        activeTabIndex = this.props.id;
    };

    onContainerClick(){
        this.setState({childrenWithProps: this.cloneWithProperties()});
    };

    componentWillMount() {
        this.setState({childrenWithProps: this.cloneWithProperties()});
    };

    render() {
        return <div onClick={ this.onContainerClick }>
            { this.state.childrenWithProps }
        </div>;
    };
}
