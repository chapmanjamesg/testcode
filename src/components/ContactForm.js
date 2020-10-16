import React from 'react';

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
        }else{
          console.error('Invalid Form')
        }
      }


    render(){
        const {errors} = this.state;
        return(
            <div className="ui container contact">
                <h3 className="ui header">Contact</h3>
                <form className="ui form " onSubmit={this.handleSubmit} noValidate>
                    <div className="field">
                        <label>Email</label>
                        <input 
                            type="email" 
                            name="email"
                            onChange={this.handleChange} 
                            noValidate
                        />
                        {errors.email.length > 0 && 
                        <span className='error'>{errors.email}</span>}
                    </div>
                    <div className="field">
                        <label>Subject</label>
                        <input 
                            type="text"
                            name="subject"
                            onChange={this.handleChange} 
                        />
                        {errors.subject.length > 0 && 
                        <span className='error'>{errors.subject}</span>}
                    </div>
                    <div className="field">
                        <label>Message</label>
                        <textarea 
                            name="message"
                            onChange={this.handleChange}
                        />
                        {errors.message.length > 0 &&
                        <span className='error'>{errors.message}</span>}
                        <small>Message must be eight characters in length.</small>
                    </div>
                    <button className='ui button' type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


export default ContactForm





