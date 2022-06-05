import React, { Component } from 'react';
import Countenr from './counter';


class Couters extends Component {
    state = { 
        counrers: [
          {id:1, value: 3 },
          {id:2, value: 0 },
          {id:3, value: 0 },
          {id:4, value: 0 }
        ]
     } ;


handledDelet = counreid => {
const counrers= this.state.counrers.filter(c => c.id !== counreid)
this.setState({counrers})
};    


    render() { 

        return (
        <div>
        {this.state.counrers.map(counter => (
        <Countenr 
        key={counter.id} 
        onDelete={this.handledDelet} 
        counter={counter}
        /> 
           ))}
        </div>
        );

     }
}
 
export default Couters;