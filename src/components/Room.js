import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

class Room extends Component {

    getStyle = () => {
        return {
            card: {
                display: 'inline-block',
                margin: 15,
                width: 370,
                height: 240
            },
            text: {
                height: 40
            }
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            textValue: ''
        };
    }

    handleChange = (e) => this.setState({ textValue: e.target.value })

    render() {

        const { id, people, isCleaning } = this.props.room;

        let rText = "loading..."
        let lText = "loading..."

        if (people.length < 1) {
            rText = "This room is empty, you may add people with the Check-In button below!"
        } else {
            rText = "People: " + people.join(", ");
        }

        if (isCleaning) {
            lText = "Unlock"
        } else {
            lText = "Lock for Cleaning"
        }

        return (
            <Card style={this.getStyle().card}>
                <CardActionArea>
                    <CardMedia
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {"Room " + id}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" style={this.getStyle().text} component="p">
                            { rText }
                        </Typography>
                        <TextField
                            ref="txt"
                            id="outlined-basic"
                            label="Person's Name"
                            margin="normal"
                            value={this.state.textValue}
                            onChange={this.handleChange}
                            variant="outlined"
                            />
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" disabled={this.props.room.isCleaning} color="primary" onClick={this.props.addPerson.bind(this, id, this.state.textValue)}>
                        ADD
                    </Button>
                    <Button size="small" disabled={this.props.room.isCleaning} color="primary" onClick={this.props.removePerson.bind(this, id, this.state.textValue)}>
                        REMOVE
                    </Button>
                    <Button size="small" color="secondary" onClick={this.props.lock.bind(this, id)}>
                        { lText }
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default Room;
