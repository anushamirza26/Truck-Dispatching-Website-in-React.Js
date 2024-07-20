import React, { useState } from 'react';
import { firestore } from './firebase';
import { addDoc, collection } from 'firebase/firestore';
import './realcontact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    trailerType: ''
  });

  const [errors, setErrors] = useState({});
  const ref = collection(firestore, 'realcontact');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Invalid phone number';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.trailerType) newErrors.trailerType = 'Trailer type is required';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const realcontact = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        trailerType: formData.trailerType
      };

      try {
        await addDoc(ref, realcontact);
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          trailerType: ''
        }); // Reset form after submission
        setErrors({});
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className='boss'>
      <div className='a'>
        <h1 className='b'><strong>Get in Touch</strong></h1>
        <div className="contact-container">
          <div className="contact-header">
            <div className='imgset'>
              <span role="img" aria-label="phone">📞</span>
              <h5 style={{paddingTop:'5px'}}>Call Us</h5>
              <p style={{paddingTop:'5px'}}>(404) 987-8447</p>
            </div>
            <div className='imgset'>
              <span role="img" aria-label="email">📧</span>
              <h5 style={{paddingTop:'5px'}}>Email</h5>
              <p style={{paddingTop:'5px'}}>dispatchsolutions@truckdispatch360.com</p>
            </div>
          </div>
          <h2 style={{textAlign:'left',paddingBottom:'30px'}}>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className='forlbl'>
              <label style={{fontSize:'1.2em'}}>Name: </label>
            </div>
            <div className="form1-group">
              <input
                type="text"
                name="firstName"
                placeholder="First"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {errors.firstName && <span className="error">{errors.firstName}</span>}
              <input
                type="text"
                name="lastName"
                placeholder="Last"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>
            <div className='forlbl'>
              <label style={{fontSize:'1.2em'}}>Phone No: </label>
              <label style={{fontSize:'1.2em'}}>Email: </label>
            </div>
            <div className="form1-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className='forlbl'>
              <label style={{fontSize:'1.2em'}}>Type of Trailer (No Power Only, No Box Truck, No Hotshot Dispatch): </label>
            </div>
            <div className="form1-section">
              <input
                type="text"
                name="trailerType"
                placeholder="Type of Trailer (No Power Only, No Box Truck, No Hotshot Dispatch)"
                value={formData.trailerType}
                onChange={handleChange}
                required
                className="form1-full-width"
              />
              {errors.trailerType && <span className="error">{errors.trailerType}</span>}
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
