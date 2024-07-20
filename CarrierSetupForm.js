import React, { useRef, useState } from 'react';
import { firestore, storage } from './firebase'; // Ensure you import storage from Firebase
import { addDoc, collection } from 'firebase/firestore';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import './CarrierSetupForm.css';

const CarrierSetupForm = () => {
  const [formState, setFormState] = useState({
    companyName: '',
    dba: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    email: '',
    mc: '',
    usdot: '',
    feinSsn: '',
    numberOfTrucks: '',
    numberOfDrivers: '',
    equipmentType: [],
    factorInvoices: '',
    preferredStates: '',
    files: []
  });

  const [errors, setErrors] = useState({});
  const messagesRef = useRef();
  const ref = collection(firestore, 'carrdata');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const updatedEquipmentType = checked
        ? [...formState.equipmentType, value]
        : formState.equipmentType.filter((item) => item !== value);
      setFormState({
        ...formState,
        equipmentType: updatedEquipmentType
      });
    } else {
      setFormState({
        ...formState,
        [name]: value
      });
    }
  };

  const handleFileChange = (e) => {
    setFormState({
      ...formState,
      files: Array.from(e.target.files) // Ensure files are stored as an array
    });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formState.companyName) newErrors.companyName = 'Company name is required';
    if (!formState.address) newErrors.address = 'Address is required';
    if (!formState.city) newErrors.city = 'City is required';
    if (!formState.state) newErrors.state = 'State is required';
    if (!formState.zipCode) newErrors.zipCode = 'ZIP Code is required';
    if (!formState.phone) newErrors.phone = 'Phone number is required';
    else if (!phoneRegex.test(formState.phone)) newErrors.phone = 'Invalid phone number';
    if (!formState.email) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formState.email)) newErrors.email = 'Invalid email address';
    if (!formState.mc) newErrors.mc = 'MC# is required';
    if (!formState.usdot) newErrors.usdot = 'USDOT# is required';
    if (!formState.feinSsn) newErrors.feinSsn = 'FEIN/SSN is required';

    return newErrors;
  };

  const uploadFiles = async (files) => {
    const uploadedFileURLs = [];
    for (const file of files) {
      const fileRef = storageRef(storage, `uploads/${file.name}`);
      await uploadBytes(fileRef, file);
      const fileURL = await getDownloadURL(fileRef);
      uploadedFileURLs.push(fileURL);
    }
    return uploadedFileURLs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const uploadedFileURLs = await uploadFiles(formState.files);
        const carrdata = {
          companyName: formState.companyName,
          dba: formState.dba,
          address: formState.address,
          address2: formState.address2,
          city: formState.city,
          state: formState.state,
          zipCode: formState.zipCode,
          phone: formState.phone,
          email: formState.email,
          mc: formState.mc,
          usdot: formState.usdot,
          feinSsn: formState.feinSsn,
          numberOfTrucks: formState.numberOfTrucks,
          numberOfDrivers: formState.numberOfDrivers,
          equipmentType: formState.equipmentType,
          factorInvoices: formState.factorInvoices,
          preferredStates: formState.preferredStates,
          files: uploadedFileURLs
        };
        await addDoc(ref, carrdata);
        setFormState({
          companyName: '',
          dba: '',
          address: '',
          address2: '',
          city: '',
          state: '',
          zipCode: '',
          phone: '',
          email: '',
          mc: '',
          usdot: '',
          feinSsn: '',
          numberOfTrucks: '',
          numberOfDrivers: '',
          equipmentType: [],
          factorInvoices: '',
          preferredStates: '',
          files: []
        });
        setErrors({});
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <form className="carrier-setup-form" onSubmit={handleSubmit}>
      <h3>Step 1: Carrier Set-Up</h3>
      <p>Once you complete the carrier setup below, we will email you a Dispatch Service Agreement along with a General Power Of Attorney (Agent) and you'll be all set. Don't forget to attach your MC Authority, W9 & Insurance below!</p>
      <div className='forlbl2'>
        <label>Company Name *</label>
        <label>DBA (if any)</label>
      </div>
      <div className="form2-group">
        <input type="text" name="companyName" value={formState.companyName} onChange={handleChange} required />
        {errors.companyName && <span className="error">{errors.companyName}</span>}
        <input type="text" name="dba" value={formState.dba} onChange={handleChange} />
      </div>
      <div className='forlbl2'>
        <label>Address *</label>
      </div>
      <div className="form2-group">
        <input type="text" name="address" value={formState.address} onChange={handleChange} required />
        {errors.address && <span className="error">{errors.address}</span>}
        <input type="text" name="address2" value={formState.address2} onChange={handleChange} placeholder="Street Address Line 2" />
      </div>
      <div className='forlbl2'>
        <label>City *</label>
        <label>State *</label>
      </div>
      <div className="form2-group">
        <input type="text" name="city" value={formState.city} onChange={handleChange} required />
        {errors.city && <span className="error">{errors.city}</span>}
        <input type="text" name="state" value={formState.state} onChange={handleChange} required />
        {errors.state && <span className="error">{errors.state}</span>}
      </div>
      <div className='forlbl2'>
        <label>ZIP Code *</label>
        <label>Phone *</label>
      </div>
      <div className="form2-group">
        <input type="text" name="zipCode" value={formState.zipCode} onChange={handleChange} required />
        {errors.zipCode && <span className="error">{errors.zipCode}</span>}
        <input type="text" name="phone" value={formState.phone} onChange={handleChange} required />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>
      <div className='forlbl2'>
        <label>Email *</label>
        <label>MC# *</label>
      </div>
      <div className="form2-group">
        <input type="email" name="email" value={formState.email} onChange={handleChange} required />
        {errors.email && <span className="error">{errors.email}</span>}
        <input type="text" name="mc" value={formState.mc} onChange={handleChange} required />
        {errors.mc && <span className="error">{errors.mc}</span>}
      </div>
      <div className='forlbl2'>
        <label>USDOT# *</label>
        <label>FEIN/SSN *</label>
      </div>
      <div className="form2-group">
        <input type="text" name="usdot" value={formState.usdot} onChange={handleChange} required />
        {errors.usdot && <span className="error">{errors.usdot}</span>}
        <input type="text" name="feinSsn" value={formState.feinSsn} onChange={handleChange} required />
        {errors.feinSsn && <span className="error">{errors.feinSsn}</span>}
      </div>
      <div className='forlbl2'>
        <label>Number Of Trucks?</label>
        <label>Number Of Drivers?</label>
      </div>
      <div className="form2-group">
        <input type="number" name="numberOfTrucks" value={formState.numberOfTrucks} onChange={handleChange} />
        <input type="number" name="numberOfDrivers" value={formState.numberOfDrivers} onChange={handleChange} />
      </div>
      <div className="form3-group">
        <label>Type Of Equipment?</label>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" name="equipmentType" value="Dry Van" onChange={handleChange} checked={formState.equipmentType.includes('Dry Van')} /> Dry Van
          </label>
          <label>
            <input type="checkbox" name="equipmentType" value="Reefer" onChange={handleChange} checked={formState.equipmentType.includes('Reefer')} /> Reefer
          </label>
          <label>
            <input type="checkbox" name="equipmentType" value="Flatbed" onChange={handleChange} checked={formState.equipmentType.includes('Flatbed')} /> Flatbed
          </label>
          <label>
            <input type="checkbox" name="equipmentType" value="Container" onChange={handleChange} checked={formState.equipmentType.includes('Container')} /> Container
          </label>
        </div>
      </div>
      <div className="form3-group">
        <label>Do you factor your invoices? *</label>
        <div className="radio-group">
          <label>
            <input type="radio" name="factorInvoices" value="Yes" onChange={handleChange} checked={formState.factorInvoices === 'Yes'} /> Yes
          </label>
          <label>
            <input type="radio" name="factorInvoices" value="No" onChange={handleChange} checked={formState.factorInvoices === 'No'} /> No
          </label>
        </div>
      </div>
      <div className="form3-group">
        <label>What States Do You Prefer To Drive?</label>
        <textarea name="preferredStates" value={formState.preferredStates} onChange={handleChange}></textarea>
      </div>
      <div className="form3-group">
        <label>Upload MC Authority Letter, Certificate Of Liability Insurance, W9</label>
        <input type="file" multiple onChange={handleFileChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CarrierSetupForm;
