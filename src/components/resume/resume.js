import './resume.css';
import { Box } from '@material-ui/core';

function Resume() {
    return (
        <div className='main-container'>
            <Box
                className='resume-container'
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'>
                <img
                    src='https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGljfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80'
                    alt=''
                />
            </Box>
        </div>
    );
}

export default Resume;
