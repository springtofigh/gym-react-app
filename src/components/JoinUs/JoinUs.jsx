import React , { useRef } from 'react';
import "./JoinUs.css";
import emailjs from '@emailjs/browser';

const JoinUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_kmjlaml', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
                console.log(result.text);
        }, (error) => {
                console.log(error.text);
        });
    };

  return (
    <div className="join-us" id="join-us">
        <div className="right-j">
            <hr />
            <div>
                <span className='stroke-text'> آماده </span>
                <span> ساختن بدنت </span>
            </div>
            <div>
                <span> با ما </span>
                <span className='stroke-text'> هستی؟ </span>
            </div>
        </div>
        <div className="left-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='وارد کردن ایمیل' />
                <button className="btn btn-j">ارسال</button>
            </form>
        </div>
    </div>
  )
}

export default JoinUs