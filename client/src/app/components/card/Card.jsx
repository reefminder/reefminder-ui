import React from 'react';
import { Card as ToolboxCard, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button';
import cardTheme from '../../../../style/theme/card.scss';
import buttonTheme from '../../../../style/theme/button.scss';
import { Line } from 'react-chartjs-2';

class Card extends React.Component {

    static data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };

    render() {
        return <div>
            <ToolboxCard theme={ cardTheme }>
                <CardTitle small
                    avatar="https://placeimg.com/80/80/animals"
                    title="Avatar style title"
                    subtitle="Subtitle here"
                />
                <CardMedia
                    aspectRatio="wide"
                    image="https://placeimg.com/800/450/nature"
                />
                <Line data={ Card.data }/>
                <CardText>Some Dummy Text</CardText>
                <CardActions theme={ cardTheme }>
                    <Button label="Action 1" theme={ buttonTheme } />
                    <Button label="Action 2" theme={ buttonTheme } />
                </CardActions>
            </ToolboxCard>
        </div>;
    }
}

export default Card;