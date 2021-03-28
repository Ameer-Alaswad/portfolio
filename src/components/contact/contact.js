import React from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
// import { Hidden } from '@material-ui/core';
import { useState } from 'react';

export default function Contact() {
    const [sent, setSent] = useState(true);
    function sendEmail(e) {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_y0znggf',
                'template_qjz1a6q',
                e.target,
                'user_eOqzreECIvbYSamTDhfrv'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    if (result.text === 'OK') {
                        setSent(true);
                    }
                },
                (error) => {
                    console.log(error.text);
                }
            );
    }

    return (
        <div className='contact-form-container'>
            <form className='contact-form' onSubmit={sendEmail}>
                <input type='hidden' name='contact_number' />
                <input required type='text' name='user' placeholder='Name' />
                <input required type='email' name='email' placeholder='Email' />
                <textarea required name='message' placeholder='Message' />
                <input type='submit' value='Send' />
                {sent && <h1 style={{ color: 'green' }}>sent 👏🏼 </h1>}
            </form>
        </div>
    );
}

// e97578a045c1d9a313661cea6bb54bab
