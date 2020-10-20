import React from 'react';
import APIManager from './APIManager';

const validEmail = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class ContactForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            subject: null,
            message: null,
            errors: {
                email: '',
                subject:'',
                message: '',
            }
        };
    }; 

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
    
        switch (name) {
            case 'email': 
                errors.email = 
                    validEmail.test(value)
                    ? ''
                    : 'Email is not valid.';
                break;
            case 'subject': 
                errors.subject = 
                value.length < 4
                    ? 'Subject must be 4 characters long.'
                    : '';
                break;
            case 'password': 
                errors.message = 
                value.length < 8
                    ? 'Message must be 8 characters long.'
                    : '';
                break;
            default:
                break;
        }

        this.setState({errors, [name]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(this.state.errors)) {
          console.info('Valid Form')
          const contact ={
              email: this.state.email,
              subject: this.state.subject,
              message: this.state.message
          }
          APIManager.post(contact)
            .then(r => r.json)
        }else{
          alert("Please fill this out correctly!")
        }
      }


    render(){
        const {errors} = this.state;
        return(
            <div className="contact">
                <h3 className="header">Contact</h3>
                <form className="ui form " onSubmit={this.handleSubmit} noValidate>
                    <div className="ui text container field">
                        <label className="ui grey label">Email</label>
                        <input 
                            type="email" 
                            name="email"
                            onChange={this.handleChange} 
                            noValidate
                        />
                        {errors.email.length > 0 && 
                        <span className='error'>{errors.email}</span>}
                    </div>
                    <div className="ui text container field">
                        <label className="ui grey label">Subject</label>
                        <input 
                            type="text"
                            name="subject"
                            onChange={this.handleChange} 
                            noValidate
                        />
                        {errors.subject.length > 0 && 
                        <span className='error'>{errors.subject}</span>}
                    </div>
                    <div className="ui text container field">
                        <label className="ui grey label">Message</label>
                        <textarea 
                            name="message"
                            onChange={this.handleChange}
                            noValidate
                        />
                        {errors.message.length > 0 &&
                        <span className='error'>{errors.message}</span>}
                        <small>Message must be eight characters in length.</small>
                    </div>
                    <button className='ui black fluid button' type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


export default ContactForm





