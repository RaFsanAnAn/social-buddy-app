import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import { Avatar } from '@material-ui/core';
const Comments = (props) => {
    const { name, email, body, id } = props.comments;
    const userStyle = {
        border: '1px solid #990033',
        padding: '20px',
        margin: '20px',
        borderRadius: '20px',
        display: 'flex',

    }

    const useStyles = makeStyles({
        root: {
            maxWidth: 550,
            margin: 'auto',
            color: "white",
            backgroundColor: 'black'
        },
    });
    let imgURL = `https://randomuser.me/api/portraits/men/${id}.jpg`;
    const classes = useStyles();

    return (
        <div style={userStyle}>
            <div style={{ marginTop: '15px' }}>

                <Avatar src={imgURL} />
            </div>
            <div style={{ width: '90%' }}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h2">
                                {name}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                {email}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {body}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <IconButton aria-label="add to favorites" color='primary'>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share" color='secondary'>
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </div>

        </div>
    );
};

export default Comments;
