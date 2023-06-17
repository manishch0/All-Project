import React, { useState } from 'react';

function MobileForm() {
  const [mobiles, setMobiles] = useState([]);
  const [mobileNumber, setMobileNumber] = useState('');
  const [useFor, setUseFor] = useState([]);
  const [preferredDays, setPreferredDays] = useState([]);
  const [messageService, setMessageService] = useState('');
  const [messageServiceID, setMessageServiceID] = useState('');
  const [reminder, setReminder] = useState(false);
  const [reminderNote, setReminderNote] = useState('');

  // Define a function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Create an object to store the form data
    const mobileData = {
      mobileNumber,
      useFor,
      preferredDays,
      messageService,
      messageServiceID,
      reminder,
      reminderNote,
    };

    // Make a POST request to your API to save the data
    const response = await fetch('/api/mobile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mobileData),
    });

    if (response.ok) {
      const newMobile = await response.json();
      setMobiles([...mobiles, newMobile]);
      // Clear the form fields after submission
      setMobileNumber('');
      setUseFor([]);
      setPreferredDays([]);
      setMessageService('');
      setMessageServiceID('');
      setReminder(false);
      setReminderNote('');
    }
  };

  // Define functions to handle form input changes
  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };
  const handleUseForChange = (event) => {
    setUseFor(Array.from(event.target.selectedOptions, (option) => option.value));
  };
  const handlePreferredDaysChange = (event) => {
    setPreferredDays(Array.from(event.target.selectedOptions, (option) => option.value));
  };
  const handleMessageServiceChange = (event) => {
    setMessageService(event.target.value);
  };
  const handleMessageServiceIDChange = (event) => {
    setMessageServiceID(event.target.value);
  };
  const handleReminderChange = (event) => {
    setReminder(event.target.checked);
  };
  const handleReminderNoteChange = (event) => {
    setReminderNote(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="mobileNumber">Mobile Number</label>
      <input type="text" id="mobileNumber" value={mobileNumber} onChange={handleMobileNumberChange} required />

      <label htmlFor="useFor">Use for</label>
      <select id="useFor" multiple value={useFor} onChange={handleUseForChange}>
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="emergency">Emergency</option>
      </select>

      <label htmlFor="preferredDays">Preferred Day</label>
      <select id="preferredDays" multiple value={preferredDays} onChange={handlePreferredDaysChange}>
        <option value="Sunday">Sunday</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
       
