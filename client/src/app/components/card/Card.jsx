import React from 'react';
import { Card as ToolboxCard, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button';
import cardTheme from '../../../../style/theme/card.scss';
import buttonTheme from '../../../../style/theme/button.scss';
import { Line } from 'react-chartjs-2';

class Card extends React.Component {

    static chartData = {
        label: 'Scatter Dataset',
        data: [{
            x: -10,
            y: 0
        }, {
            x: 0,
            y: 10
        }, {
            x: 10,
            y: 5
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
                <Line data={Card.chartData}/>
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