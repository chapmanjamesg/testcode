import React from 'react';
import ContactForm from './components/ContactForm';
import ItemList from './components/ItemList';
import './style/app.css'

class App extends React.Component {

  render(){
    return(
      <div className="ui container">
        <h1 className="ui huge header">Header One</h1>
        <div className="content container stackable grid">
            <div className="row">
              <ItemList />
              <ItemList />
              <ItemList />
            </div>
        </div>
        <div className='ui container'>
            <ContactForm />
        </div>
        <h1 className="ui huge header">Header One</h1>
      </div>
    )
  }
}



export default App;
