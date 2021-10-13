import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <footer>
          <Box 
           px={{ xs: 3, sm: 10}}
           py={{xs: 4, sm: 7}}
           bgcolor="#222324" 
           color="white" 
          >
            <Container maxWidth="lg">
              <Grid container spacing={5}>
                <Grid item xs={6} sm={3}>
                    <Box  p={0.5}>
                     <Link href="" underline="none" color="inherit">
                     About Us 
                     </Link>
                    </Box>
                    <Box p={0.5}>
                     <Link href="" underline="none" color="inherit">
                     Company Info 
                     </Link>
                    </Box>
                    <Box p={0.5}>
                     <Link href="" underline="none" color="inherit">
                     Job Opening
                     </Link>
                    </Box>
                </Grid>

                <Grid item xs={6} sm={3}>
                    <Box p={0.5}>
                     <Link href="" underline="none" color="inherit">
                     Contact Us
                     </Link>
                    </Box>
                    <Box p={0.5}>
                     <Link href="" underline="none" color="inherit">
                     Office Address
                     </Link>
                    </Box>
                    <Box p={0.5}>
                     <Link href="" underline="none" color="inherit" >
                     Phone Number
                     </Link>
                    </Box>
                    <Box p={0.5}>
                     <Link href="" underline="none" color="inherit">
                     Email
                     </Link>
                    </Box>
                </Grid>


                <Grid item xs={6} sm={3}>
                    <Box p={0.5}>
                     <Link href="" underline="none" color="inherit">
                     Help & Support 
                     </Link>
                    </Box>
                    <Box p={0.5}>
                     <Link href="" underline="none" color="inherit">
                     FAQ
                     </Link>
                    </Box>
                    <Box p={0.5}>
                     <Link href="" underline="none" color="inherit">
                     Support Number
                     </Link>
                    </Box>
                </Grid>

                <Grid item xs={6} sm={3}>
                    <Box p={0.5}>
                     Contact with Us 
                    </Box>
                    <Box p={0.5}>
                     <input 
                     placeholder="Enter Address"
                     /> 
           
                     <Link href="" 
                       underline="none" 
                       color="inherit" p={0.5} 
                       bgcolor="#e88e17" 
                     >
                     SEND
                     </Link>
                    </Box>
                    <Box p={1}>
                     <Link href="" underline="none" color="inherit" p={0.5}>
                     <FacebookRoundedIcon />
                     </Link>
                     <Link href="" underline="none" color="inherit" p={0.5}>
                     <TwitterIcon />
                     </Link>
                     <Link href="" underline="none" color="inherit" p={0.5}>
                     <LinkedInIcon />
                     </Link>
                    </Box>
                </Grid>

              </Grid>
            </Container>
          </Box>
        </footer>
    )
}

export default Footer
