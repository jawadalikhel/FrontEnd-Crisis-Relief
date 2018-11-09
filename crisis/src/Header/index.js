import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Headerr = () =>{
  return(
    <Header>
      <nav className='nav' textAlign='center' vertical>
        <Link to="/crisis">Crisis</Link>
        <Link to="/">Login</Link>
      </nav>
    </Header>
  )
}

export default Headerr;
