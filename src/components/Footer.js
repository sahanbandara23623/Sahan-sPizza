import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />  
        </div>
        <p> & Copy; 2023 Sahans'Pizza </p>
    
    </div>
  )
}

export default Footer
