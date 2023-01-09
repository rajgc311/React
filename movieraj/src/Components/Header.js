import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './nav.css'
export default function () {
  return (
    <div>
        <Box>
            <AppBar  sx={{bgcolor:'black'}}>
                <Toolbar>
                    <IconButton><MenuIcon/></IconButton>
                    <Typography variant='h4' sx={{cursor:'pointer'}}>Raj</Typography>
                    <Box>
                        <ul  className='nav-content'>
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link to={'/movies/popular'}>Popular</Link>
                            </li>
                            <li>
                                <Link to={'/movies/top_rated'}>TopRated</Link>
                            </li>
                            <li>
                                <Link to={'/movies/upcoming'}>Upcoming</Link>
                            </li>
                        </ul>
                    </Box>
                </Toolbar>
                
            </AppBar>
            <Toolbar/>
        </Box>
    </div>
  )
}
