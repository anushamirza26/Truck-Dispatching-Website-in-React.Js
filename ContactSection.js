// File path: src/components/ContactSection.js

import React, { useRef, useState } from 'react';
import { firestore } from './firebase';
import { addDoc, collection } from 'firebase/firestore';
import './ContactSection.css';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const messagesRef = useRef();
  const ref = collection(firestore, 'data'); // Pass the Firestore instance

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    else if (!emailRegex.test(form.email)) newErrors.email = 'Invalid email address';
    if (!form.phone) newErrors.phone = 'Phone number is required';
    else if (!phoneRegex.test(form.phone)) newErrors.phone = 'Invalid phone number';
    if (!form.message) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const data = {
        message: form.message,
        name: form.name,
        email: form.email,
        phone: form.phone
      };

      try {
        await addDoc(ref, data);
        setForm({ name: '', email: '', phone: '', message: '' }); // Reset form after submission
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <section id="contact">
      <div className='clo88'>
        <div className="row justify-content-center">
          <h2 style={{color:'white'}}>Want To Learn More</h2>
          <div className="col-md-6">
            <form className="mb-3" onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
              <div className="form-group">
                <label htmlFor="name" style={{color:'#FFFFFF'}}>Name</label>
                <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={handleChange} required style={{ borderRadius: '5px', border: '1px solid #ccc' }} />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="email" style={{color:'#FFFFFF'}}>Email</label>
                <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required style={{ borderRadius: '5px', border: '1px solid #ccc' }} />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="phone" style={{color:'#FFFFFF'}}>Phone No</label>
                <input type="text" className="form-control" id="phone" name="phone" value={form.phone} onChange={handleChange} required style={{ borderRadius: '5px', border: '1px solid #ccc' }} />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="message" style={{color:'#FFFFFF'}}>Message</label>
                <textarea className="form-control" id="message" name="message" rows="4" value={form.message} onChange={handleChange} ref={messagesRef} required style={{ borderRadius: '5px', border: '1px solid #ccc' }}></textarea>
                {errors.message && <span className="error">{errors.message}</span>}
              </div>
              <button type="submit" className="submit2-button"><b>Send Message</b></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
