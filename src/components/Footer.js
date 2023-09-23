import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon/>
        <LinkedInIcon />
      </div>
      <a> &copy; 2023 Zouhourabbassi.com </a>
    </div>
  )
}
