import React from 'react';

let activeTab = null;

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
                isActive: activeTab && activeTab.props.id === i ? true : false,
                id: i++
            })
        );
    };

    tabClick(){
        activeTab = this;
    };

    onContainerClick(){
        this.setState({childrenWithProps: this.cloneWithProperties()});
    };

    componentWillMount() {
        this.setState({childrenWithProps: this.cloneWithProperties()});
    };

    render() {
        return <div>
            <div className="tabs-container" onClick={ this.onContainerClick }>
                { this.state.childrenWithProps }
            </div>
            { activeTab ? activeTab.props.children : "" }
        </div>;
    };
}
