import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

class Room extends Component {

    render() {

        const useStyles = makeStyles(theme => ({
            textField: {
                marginLeft: theme.spacing(1),
                marginRight: theme.spacing(1),
                width: 200,
            },
            card: {
                width: 350,
                display: 'inline-block',
                margin: 20
            }
        }));

        const { id, people, isCleaning } = this.props.room;

        let rText = "loading..."

        if (people.length < 1) {
            rText = "This room is empty, you may add people with the Check-In button below!"
        } else {
            rText = people.join(" ");
        }

        return (
            <Card className={makeStyles.card} style={{ display: 'inline-block', margin: 15, width: 370 }}>
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
                            { rText }
                        </Typography>
                        <TextField
                            id="outlined-basic"
                            className={makeStyles.textField}
                            label="Person's Name"
                            margin="normal"
                            variant="outlined"
                            />
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
