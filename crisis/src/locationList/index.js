import React from 'react';
import '../App.css';
import { Header, Image, Segment, Container, Icon } from 'semantic-ui-react';


const CountriesList = (props) => {
  console.log(props, ' THE PROPS IN CountriesList');
  const countriesList = props.AddearthCountries.map((val, id) =>{
    console.log(val.fields.country, 'THIS IS COUNTRY')
    for(let i = 0; i < val.fields.country.length; i++){
      return(

        <div key={val.id} className="container">
          <div>Country: {val.fields.country[i].name}<br/></div>
          <div>Disaster Date: {val.fields.date.created.slice(0,13)}<br/></div>
          <div>Type: {val.fields.type[i].name}<br/></div><br/>
        </div>
      )
    }
    return countriesList;
  });

  return(
    <div>
      <h1>Countries In Help</h1>
      {countriesList}
      <footer className='mediaIcons'>
        <Icon link name='github' size='large' style={{ padding: '1em 1em' }}/>
        <Icon link name='behance square' size='large' style={{ padding: '1em 1em' }}/>
        <Icon link name='medium' size='large' style={{ padding: '1em 1em' }}/>
        <Icon link name='twitter' size='large' style={{ padding: '1em 1em' }}/>
      </footer>
    </div>
  )
}
export default CountriesList;
