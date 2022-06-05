import React, { Component } from 'react';

class Countenr extends Component {                                                                  //מחלקה של שורה של כפתורים 
// state = {  
//     value: this.props.counter.value,                                                  // האבא שלך שיצר אותך הוא יקבע את הערך
// };


//  handkeIncrement = () => {  
//      this.setState({value: this.state.value +1})
//  }

    render() { 
        return (
            <div>
                 <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                 
                 <button
                  onClick={()=> this.props.onIncrement(this.props.counter)}                    //this.handkeIncrement הוא היה משנה 
                  className='btn btn-secondary btn-sm'>
                   Increment
                  </button>
                 
                  <button 
                  className="btn btn-danger bth-sm m-2"                                                           //לאבא יש שיטה והוא כבר ישנה אני רק יביא לו את הזה הספציפי
                   onClick={() => this.props.onDelete(this.props.counter.id)}>            
                   Delet
                 </button>

            </div>
    );
}

getBadgeClasses() {
let classes = "badge  m-2 badge-";
classes += (this.props.counter.value === 0) ? "warning" : "primary";
return classes;
}


formatCount(){
const { value: count } = this.props.counter
return count === 0 ? "Zero" : count;
}



}
export default Countenr; 