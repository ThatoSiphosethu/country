import * as React from 'react';
import { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Typography from '@mui/material/Typography';

class Country extends Component {

  constructor (props) {
    super(props);
    this.state = {
        country: 'USA',
        count: 0
    }
}

increament = () => {
    this.setState({
        count: this.state.count + 1
    });
}
render() {
  return (

    <Card sx={{bgcolor: 'lightGray', minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
          <h3>Country : {this.state.country}  </h3>
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Medals : {this.state.count}  
        </Typography>
        
        <AddBoxIcon size="small" onClick={this.increament}></AddBoxIcon>
      
      </CardContent>
      
    </Card>
  );
}
}
export default Country;