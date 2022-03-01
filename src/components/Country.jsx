import React from 'react';
import Medal from './Medal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import AddBoxIcon from '@mui/icons-material/AddBox';
import Typography from '@mui/material/Typography';
// import IndeterminateCheckBox from '@mui/icons-material/IndeterminateCheckBox';


const Country = props => {
    // state = {
    //     country: 'USA',
    //     count: 'Gold Medal'
    // }
   
    const {country, medals, onIncrease, onDecrease,onDelete } = props;

   const overallMedalCount = (country, medals) => {
        let medalCount = 0;
        medals.forEach(medal => {medalCount += country[medal.type.toLowerCase()]; });
        return medalCount;
    };

    
        return (
            <React.Fragment>
        <Card sx={{bgcolor: 'lightGray', minWidth: 275 }}>
        <CardContent>

        <div>
            {country.name} : {overallMedalCount(country, medals)}
        </div>
        
            {medals.map(medal =>(
                <Medal
                key={medal.id}
                medal={medal}
                country={country}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onDelete={onDelete}
                />
            ))}
        



        {/* <Typography sx={{ fontSize: 15 }} color="black" gutterBottom>
            {country.country} : {allMedalCount(country, medals)} 
        </Typography> 

        {/* <Typography sx={{ mb: 1.5 }} > */}
            {/* {medals.map(medal => ( 
                 <Medal
                    key={medal.id}
                    medal={medal}
                    country={country}
                    onIncrease={onIncrease}
                    onDecrease={ onDecrease } 
                /> 
                 ))} */}

         {/* </Typography> */}

         <Typography>
            <button onClick={() => onDelete(country.id)}>Delete Country</button>
        </Typography>
                 
        </CardContent>
                       
        </Card>
        </React.Fragment>
            
        );
    }


export default Country;