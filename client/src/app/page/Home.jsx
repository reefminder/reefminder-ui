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
            <Header/>
            <Button theme={buttonTheme}  {...this.props} />
        </div>;
    }
}

export default connect(state => state)(Home);