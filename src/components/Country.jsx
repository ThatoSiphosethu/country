import React, { Component } from 'react';

import AddBoxIcon from '@mui/icons-material/AddBox';


class Country extends Component {
    // state = {
    //     country: 'USA',
    //     count: 'Gold Medal'
    // }
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
            <>
                <div>
                    {this.state.country}                    
                </div>

                <div>
                    Gold Medals : {this.state.count}  
                    <AddBoxIcon
                        onClick={this.increament}                        
                    />
                    
                    {/* option2 */}
                    {/* <button 
                        onClick={this.increament}
                        > +
                    </button> */}
                    
                </div>                
            </>
        );
    }
}

export default Country;