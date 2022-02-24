import React from 'react';

const NewCountry = (props) => {

    const {addNewCountry} = props;

    const handleClick = () => {
      const country= prompt('Enter country name');
      if (country && country.trim().length > 0) {
        addNewCountry(country);
      }
    }
    
      return (
        <div className='newCountryButton'>
          <button onClick={ handleClick }>New Country</button>
        </div>
      );
    }

  

export default NewCountry;