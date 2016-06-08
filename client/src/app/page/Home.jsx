import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/layout/header/Header.jsx';
import Card from '../components/card/Card.jsx';
import { Button } from 'react-toolbox/lib/button/Button';
import buttonTheme from '../../../theme/button.scss';

class Home extends React.Component {

    componentDidMount() {
        //this.props.dispatch(...);
    }

    render() {
        return <div>
            <Button theme={buttonTheme}  {...props} />
            <Header/>
/*            <div className="container">
                <div className="row top-buffer">
                    <div className="col-sm-12">
                        <Card title="Davids Title" supportTitle="Support Title" iconClass="icon-whale"/>
                    </div>
                </div>
                <div className="row top-buffer">
                    <div className="col-sm-6">
                        <Card title="Davids Title" supportTitle="Support Title" iconClass="icon-droplet"/>
                    </div>
                    <div className="col-sm-6">
                        <Card title="Davids Title" supportTitle="Support Title" iconClass="icon-droplet"/>
                    </div>
                </div>
            </div>*/
        </div>;
    }
}

export default connect(state => state)(Home);