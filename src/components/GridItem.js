import React from 'react';
import greybox from '../image/Solid_grey.png'
import "../style/ItemList.css";

class GridItem extends React.Component {
    render(){
        return(
            <div className="card item">
                <img className="ui medium image" src={greybox} alt='' />
                <br />
                <h2>Heading 2</h2>
                <p>This is a paragraph text that is meant to flex and wrap to a new line based on the number of characters in this container. Please make sure this is looking pretty based on the amount of characters this is taking up.</p>
                <button className='ui black button'>Read More</button>
            </div>
        )
    };
};

export default GridItem