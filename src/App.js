// Repository:  country
// Author:      Thato Ramalepa
// Version:     1.xx

import React, { Component } from 'react';
import './App.css';

import Country from './components/Country';
import Card from './components/Card';
import { Grid } from '@material-ui/core';

class App extends Component {
  render() { 
    return ( 
      <div className="App">
        <Grid container spacing={2}
          justifyContent='center'>
          {/* <header className="App-header">
            Medal Count
          </header> */}
          <Grid item xs={6}>
            <Card/>
          </Grid>

          {/* <Grid item xs={6}>
            <Card/>
          </Grid> */}
          
          
        </Grid>
        {/* <Country /> */}
       
        
      </div>
     );
  }
}
 
export default App;