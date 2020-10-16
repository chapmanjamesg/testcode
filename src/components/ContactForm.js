import React, { useState } from 'react';

const ContactForm = () => {
    const [email, setEmail] = useState('Enter Email Here')
    const [subject, setSubject] = useState('Enter Subject Here')
    const [message, setMessage] = useState('Enter Message Here')

    return(
        <div className="ui container contact">
            <h3 className="ui header">Contact</h3>
            <form className="ui form info">
                <div className="field">
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div className="field">
                    <label>Subject</label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label>Message</label>
                    <textarea/>
                </div>
                <button className='ui button black' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm