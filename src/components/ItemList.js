import React, { Component } from 'react';
import '../style/ItemList.css'
import GridItem from './GridItem';
import APIManager from './APIManager'

class ItemList extends Component{
    state = {
        filler: [],
    }

    componentDidMount() {
        APIManager.getAll()
            .then((filler) =>
                this.setState({
                    filler: filler 
            }))
            
    }

    render(){
        return (
            <div className='item-list container'>
                {this.state.filler.map(filler => 
                    <GridItem key={filler.id} filler={filler} {...this.props}/>
                )}
            </div>
    )}
};

export default ItemList