import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const AllPosts = (props) => {
    const { title, body, id } = props.post;
    const userStyle = {
        border: '1px solid #990033',
        padding: '20px',
        width : '800px',
        margin: '20px auto',
        borderRadius: '20px',
    }
    const btnStyle = {
        color: 'white',
        padding: '10px 20px',
        backgroundColor: '#990033'
    }
    const useStyles = makeStyles({
        root: {
            maxWidth: 650,
            margin : 'auto',
            color: "white",
            backgroundColor: 'black'
        },
    });
    const classes = useStyles();

    return (
        <div style={userStyle}>
            {
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h4" component="h1">
                               Post No: {id}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {body}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link to={`/posts/${id}`} style={{ textDecoration: 'none' }}>
                            <Button style={btnStyle} size="small" >
                                Read Details
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            }
        </div>
    );
};

export default AllPosts;
