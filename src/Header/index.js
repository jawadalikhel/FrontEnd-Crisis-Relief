import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Headerr = () =>{
  return(
    <div>
      <Header>
        <div className='ui inverted segment'>
          <div className='ui inverted menu'>
            <a className=' item' href='/'>Home</a>
            <a className='item' href='/crisis'>Crisis</a>
            <a className='item' href='/login'>Login</a>
          </div>
        </div>
      </Header>
    </div>

  )
}

export default Headerr;
