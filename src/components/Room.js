import React, { Component, PropTypes } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class Room extends Component {

    render() {
        const { id, people, isCleaning } = this.props.room;

        return (
            <Card style={{ width: '300px', display: 'inline-block', margin: '10px' }}>
                <CardActionArea>
                    <CardMedia
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {"Room " + id}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This room is empty
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Add Person
                    </Button>
                    <Button size="small" color="secondary">
                        Lock for cleaning
                    </Button>
                </CardActions>
            </Card>
        )
    }

}

export default Room;
