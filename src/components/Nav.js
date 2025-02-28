import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { PiSoundcloudLogoFill } from "react-icons/pi";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>
        Straahl <FontAwesomeIcon icon={faCompactDisc} /> Player 
      </h1>

      <div>
        <a target="_blank" rel="noopener noreferrer" href={'https://open.spotify.com/artist/4UP42TYGukrykuY5FZPjC9'}>< FaSpotify size={20} style={{color: 'rgb(65, 65, 65)'}}/></a>
        <a target="_blank" rel="noopener noreferrer" href={'https://www.youtube.com/@abyond6583/videos'}>< FaYoutube size={20} style={{color: 'rgb(65, 65, 65)'}}/></a>  
        <a target="_blank" rel="noopener noreferrer" href={'https://www.instagram.com/straahllll/'}>< FaInstagram size={20} style={{color: 'rgb(65, 65, 65)'}}/></a>   
        <a target="_blank" rel="noopener noreferrer" href={'https://www.facebook.com/Straahl'}>< FaFacebook size={20} style={{color: 'rgb(65, 65, 65)'}}/></a>
        <a target="_blank" rel="noopener noreferrer" href={'https://soundcloud.com/straahl'}>< PiSoundcloudLogoFill size={20} style={{color: 'rgb(65, 65, 65)'}}/></a>
      </div>

      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library <FontAwesomeIcon icon={faMusic} />
      </button>

    </nav>
  );
};

export default Nav;

