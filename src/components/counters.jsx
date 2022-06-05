import React, { Component } from 'react';
import Countenr from './counter';


class Couters extends Component {
    render() { 
      const {onReset, counters,onDelete, onIncrement} = this.props;


        return (
          <div>
           
        <button onClick={onReset} className="bth btn-primary bth-sm m2">Reser</button>   {/* הייתה פה פעם שיטה זה שייך לכל הכפתורים לכן זה במחלקה הזו  */}

        {counters.map(counter => (
        <Countenr 
        key={counter.id} 
        onDelete={onDelete} 
        onIncrement={onIncrement}   // onIncremrnt={this.handleIncrement} // ----    //לאבא יש שיטה והוא כבר ישנה אני רק יביא לו את הזה הספציפי
        counter={counter}
        /> 
           ))} 

        </div>
        );
        
     }

}
   
export default Couters;




// key={counter.id} 
// onDelete={this.handledDelet} 
// onIncremrnt={this.handleIncrement}
// counter={counter}
// /> 