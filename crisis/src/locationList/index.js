import React from 'react';

const CountriesList = (props) => {
  console.log(props, ' THE PROPS IN CountriesList');
  const countriesList = props.AddearthCountries.map((val, id) =>{
    console.log(val.fields.country, 'THIS IS COUNTRY')
    for(let i = 0; i < val.fields.country.length; i++){
      return(
        <div key={val._id}>
          Disaster Date: {val.fields.date.created.slice(0,13)}<br/>
          Country: {val.fields.country[i].name}<br/>
          Disaster: {val.fields.type[i].name}<br/><br/>
        </div>
      )
    }
    return countriesList;
  });

  return(
    <div>
      <h1>Countries With Disasters</h1>
      <p>-----------------------------------------</p>
      {countriesList}
    </div>
  )
}
export default CountriesList;
