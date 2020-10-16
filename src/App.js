import React from 'react';
import ContactForm from './components/ContactForm';
import ItemList from './components/ItemList';
import ObjectCode from './components/ObjectCode';
import './style/app.css'

class App extends React.Component {

  render(){
    return(
      <div className="ui container">
        <h1 className="ui huge header">Header One</h1>
        <div className="content container">
            <div className="row">
              <ItemList />
              <ItemList />
              <ItemList />
            </div>
        </div>
        <div className='ui container form'>
          <ContactForm />
        </div>
        <h1 className="ui huge header">Header One</h1>
        <div className='ui container object'>
          <ObjectCode />
        </div>
      </div>
    )
  }
}



export default App;
