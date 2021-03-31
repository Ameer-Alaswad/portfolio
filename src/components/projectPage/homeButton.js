import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 130,
            height: 40,
            padding: 20,
            marginRight: 25,
            float: 'right',
        },
    },
}));

export default function HomeButton() {
    const classes = useStyles();
    return (
        <Link to='/'>
            <div className={classes.root}>
                <Button variant='contained' color='primary'>
                    Home
                </Button>
            </div>
        </Link>
    );
}
