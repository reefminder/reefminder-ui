import React from 'react';
import { Card as ToolboxCard, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import cardTheme from '../../../theme/card.scss';

class Card extends React.Component {

    render() {
        return <div>
            <ToolboxCard style={{width: '350px'}} theme={ cardTheme }>
                <CardTitle
                    avatar="https://placeimg.com/80/80/animals"
                    title="Avatar style title"
                    subtitle="Subtitle here"
                />
                <CardMedia
                    aspectRatio="wide"
                    image="https://placeimg.com/800/450/nature"
                />
                <CardTitle
                    title="Title goes here"
                    subtitle="Subtitle here"
                />
                <CardText>{dummyText}</CardText>
                <CardActions theme={theme}>
                    <Button label="Action 1" />
                    <Button label="Action 2" />
                </CardActions>
            </ToolboxCard>
        </div>;
    }
}

export default Card;