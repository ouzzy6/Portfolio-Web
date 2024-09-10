import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Asegúrate de instalar emailjs-com
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_wzth4qh', 'template_u47d457', formData, 'pu5nU8PjLwSpoWbEK')
      .then(response => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(error => {
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="contact">
      <h2 className="contact-title">Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className='email'>
      Or you can send an email to: ouzzy6@gmail.com
      </div>
      {status && <p className="contact-status">{status}</p>}
    </div>
  );
}

export default Contact;
