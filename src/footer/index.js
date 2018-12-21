import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Image, Segment, Container, Icon } from 'semantic-ui-react';
import './footer.css';

const Footer = () =>{
  return(
    <div className="Fcontainer">
      <footer className='mediaIcons'>
        <Icon link name='github' size='large' style={{ padding: '1em 1em' }}/>
        <Icon link name='behance square' size='large' style={{ padding: '1em 1em' }}/>
        <Icon link name='medium' size='large' style={{ padding: '1em 1em' }}/>
        <Icon link name='twitter' size='large' style={{ padding: '1em 1em' }}/>
      </footer>
    </div>

  )
}

export default Footer;
