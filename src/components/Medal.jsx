import React from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBox from '@mui/icons-material/IndeterminateCheckBox';
import Typography from '@mui/material/Typography';

// class Medal extends Component {

const Medal = (props) => {

    const {country, medal, onIncrease, onDecrease} = props;


        return (
            <div className='medals'>
                 <Typography sx={{ fontSize: 15 }} color="black" gutterBottom>
                    {medal.type} Medals: {country[medal.type]}
                </Typography>
                <AddBoxIcon size="small" 
                    onClick={() => onIncrease(country.id, medal.type)} 
                    color='primary'>
                </AddBoxIcon>
                <IndeterminateCheckBox size="small" 
                    onClick={() => onDecrease(country.id, medal.type)}     
                    color='secondary'
                    disabled={country[medal.type] === 0}>
                </IndeterminateCheckBox>  
                
            </div>
        );
    }


export default Medal;
