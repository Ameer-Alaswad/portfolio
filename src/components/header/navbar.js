import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    links: {
        flexbox: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            fontSize: '13px',
            // display: 'none',
        },
    },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar className={classes.links}>
                    <IconButton>
                        <Link to='/'>
                            <Avatar
                                style={{
                                    height: '70px',
                                    width: '70px',
                                    cursor: 'none',
                                    pointerEvents: 'none',
                                }}
                                alt='Remy Sharp'
                                src='/ameerp.jpg'
                            />
                        </Link>
                    </IconButton>
                    <Typography>
                        <Box component='span' m={2} pt={3}>
                            <Link
                                className={classes.links}
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                to='/'
                                color='inherit'>
                                Home{' '}
                            </Link>
                        </Box>

                        <Box component='span' m={2} pt={3}>
                            <Link
                                className={classes.links}
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                to='/contact'
                                color='inherit'>
                                Contact{' '}
                            </Link>
                        </Box>

                        <Box component='span' m={2} pt={3}>
                            <Link
                                className={classes.links}
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                to='/resume'
                                color='inherit'>
                                Resume
                            </Link>
                        </Box>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
