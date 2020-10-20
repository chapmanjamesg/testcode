import React from 'react';
import greybox from '../image/Solid_grey.png'
import "../style/ItemList.css";

class GridItem extends React.Component {
    alerting(){
        // console.log("click")
        alert("This is filler! Even more filler!")
    }
    
    render(){
        // console.log(this.props)
        return(
            <div className="card item">
                <img className="ui medium image" src={greybox} alt='' />
                <br />
                <h2>{this.props.filler.header}</h2>
                <p>{this.props.filler.content}</p>
                <button 
                    className='ui black button'
                    onClick={this.alerting}    
                >Read More</button>
            </div>
        )
    };
};

export default GridItem