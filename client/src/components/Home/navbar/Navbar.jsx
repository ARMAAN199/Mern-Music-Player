import React from 'react'
import "./navbar.css";
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import LangIcon from '@material-ui/icons/Language';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Sideinfo from './SideInfo'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RadioIcon from '@material-ui/icons/Radio';

function Navbar({current_song, mode, setmode}) {
   const handlehome = () => {
      if (mode!=="HOME")
      setmode("HOME")
   }
   const handlehomequeue = () => {
      if (mode!=="QUEUE")
      setmode("QUEUE")
   }
   const handleprofile = () => {
      if (mode!=="PROFILE")
      setmode("PROFILE")
   }    
   const handlehomeliked = () => {
      if (mode!=="LIKED")
      setmode("LIKED")
   }    
   const handlelangliked = () => {
      if (mode!=="LANGUAGE")
      setmode("LANGUAGE")
   }   
   const handleshare = () => {
      if (mode!=="SHARE")
      setmode("SHARE")
   }           
    return (
        <>
        <div className="s-layout">
<div className="s-layout__sidebar">
  <a className="s-sidebar__trigger" >
     <MenuIcon style={{color:"white",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}/>
  </a>

  <nav className="s-sidebar__nav">
     <ul> <Sideinfo current_song={current_song}></Sideinfo></li>
     </ul>
  </nav>
</div>
</div>
        </>
    )
}

export default Navbar
