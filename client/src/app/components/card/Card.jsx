import React from 'react';
import { Card as ToolboxCard, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button';
import cardTheme from '../../../../theme/card.scss';
import buttonTheme from '../../../../theme/button.scss';
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