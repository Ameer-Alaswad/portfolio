import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
// import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { Link } from '@material-ui/core';
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
        width: '90vw',
    },
    // space: {
    //     marginRight: theme.spacing(2),
    //     paddingRight: theme.spacing(3),
    // },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar className={classes.links}>
                    <IconButton>
                        <Avatar
                            alt='Remy Sharp'
                            src='/static/images/avatar/1.jpg'
                        />
                    </IconButton>
                    <Typography>
                        {/* <Link className={classes.link} href='/'>
                            <Button color='inherit'>Portfolio</Button>
                        </Link>
                        <Link className='links-in-navbar' href='/resume'>
                            <Button color='inherit'>Resume</Button>
                        </Link>
                        <Link className='links-in-navbar' href='/contact'>
                            <Button color='inherit'>Contact</Button>
                        </Link> */}
                        <Box component='span' m={2} pt={3}>
                            <Link
                                // calssName={classes.space}
                                href='/'
                                color='inherit'>
                                Home{' '}
                            </Link>
                        </Box>

                        <Box component='span' m={2} pt={3}>
                            <Link
                                // calssName={classes.space}
                                href='/contact'
                                color='inherit'>
                                Contact{' '}
                            </Link>
                        </Box>

                        <Box component='span' m={2} pt={3}>
                            <Link
                                // calssName={classes.space}
                                href='/resume'
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
