import React from 'react'
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';

function Contact() {
    const form = useRef();

    const [done, setDone] = useState(false);

    // the below codefrom emailjs doc
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fay8xeq', 'template_1newhkb', form.current, '52f9YLAWm3CRjtm35')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
        }
        return (
            <div className="contact-form">
                <div className="w-left">
                    <div className="awesome">
                        <span>Get in touch</span>
                        <span>Contact me</span>
                        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
                    </div>
                </div>

                <div className="c-right">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user_name" className='user' placeholder='Name' />
                        <input type="email" name="user_email" className='user' placeholder='Email' />
                        <textarea type="message" name="message" className='user' placeholder='Message' />
                        <input type="submit" value="Send" className='button' placeholder='button' />
                        <span>{done && "Thanks for contacting me!"}</span>
                        <div className="blur c-blur1" style={{ background: "var(--purple" }}></div>
                    </form>
                </div>

            </div>
        )
    }
    export default Contact;