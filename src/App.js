import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Country from './components/Country';
import { Grid } from '@material-ui/core';
import NewCountry from './components/NewCountry';

const App = () => {

  // state = {
  //   countries: [
  //     { id: 1, country: 'USA', Gold: 0, Silver: 2, Bronze: 3 },
  //     { id: 2, country: 'China', Gold: 2, Silver: 2, Bronze: 3 },
  //     { id: 3, country: 'Germany', Gold: 3, Silver: 2, Bronze: 3},
  //   ],

  //   medals: [
  //     {id: 1, type: 'Gold'},
  //     {id: 2, type: 'Silver'},
  //     {id: 3, type: 'Bronze'}
  //   ],
  // };

  const [countries, setCountries] = useState([]);

  useEffect( () => {
    let mutableCountries = [
      { id: 1, country: 'USA', Gold: 0, Silver: 2, Bronze: 3 },
      { id: 2, country: 'China', Gold: 2, Silver: 2, Bronze: 3 },
      { id: 3, country: 'Germany', Gold: 3, Silver: 2, Bronze: 3},
    ]
    setCountries(mutableCountries);
  }, []);

  const medals = useRef ([
    {id: 1, type: 'Gold'},
    {id: 2, type: 'Silver'},
    {id: 3, type: 'Bronze'},
  ]);

  const addCountry = (country) => {
    // const { countries } = this.state;
    const id = countries.length === 0 ? 1 : Math.max(...countries.map(country => country.id)) + 1;
    // const mutableCountries = [...countries].concat({ id: id, country: country, Gold: 0, Silver: 0, Bronze: 0 });
    setCountries([...countries].concat({ id: id, country: country, Gold: 0, Silver: 0, Bronze: 0 }));
  }

  const deleteCountry  = (countryId) => {
    // const { countries } = this.state;
    // const mutableCountries = [...countries].filter(c => c.id !== countryId);
    setCountries([...countries].filter(c => c.id !== countryId));
  } 

 
  const increament = (countryId, medal) => {
    const countriesMutable = [...countries];
    const idx = countries.findIndex(c => c.id === countryId);
    countriesMutable[idx][medal] += 1;    
    setCountries(countriesMutable);
  };

  const decrease = (countryId, medal) => {
    const local_countries = [...countries];
    const idx = countries.findIndex(c => c.id === countryId);
    if (local_countries[idx][medal] > 0) {
      local_countries[idx][medal] -= 1;
      setCountries(local_countries);
    }
  };

  const overallMedalCount = () => {
    let medalCount = 0;
    medals.current.forEach(medal => {medalCount += countries.reduce((a,b) => a + b[medal.type], 0); });
    return medalCount;
  };

  // const overallMedalCount = () => {
  //   const gold = countries.reduce((a, b) => a + b.Gold, 0);
	// 	const silver = countries.reduce(
	// 		(a, b) => a + b.Silver,
	// 		0
	// 	);
	// 	const bronze = countries.reduce(
	// 		(a, b) => a + b.Bronze,
	// 		0
	// 	);
	// 	const total = gold + silver + bronze;
	// 	return total;

  // }

    return ( 
      <div className="App">
        <div>Total Medals : {overallMedalCount()}</div>
        <Grid container spacing={4}
          justifyContent='center'>
          <Grid item xs={6} >
            { countries.map(country => (

              <Country
                  key={country.id}
                  country={country}
                  medals={medals.current}
                  onIncrease={increament}
                  onDecrease={ decrease } 
                  onDelete = {deleteCountry}
              />              
            ))}
          </Grid>
        </Grid>  
        <div>
          <NewCountry addNewCountry = {addCountry}/>
        </div>
      </div>
     );
  }

 
export default App;