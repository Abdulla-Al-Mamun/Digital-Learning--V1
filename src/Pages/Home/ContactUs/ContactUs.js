import React from 'react';
const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <div style={{ height: '200px', backgroundColor: 'purple' }}>
        <input style={{marginTop:'60px', width:'50%'}} type="text" placeholder='enter your name'/>
        <br />
        <input style={{margin:'10px 0', width:'50%'}} type="email" name="" id="" placeholder='enter your email'/>
        <br />
        <button style={{marginRight:'10px'}} type="submit">Submit</button>
        <button style={{backgroundColor:'red'}} type="reset">Reset</button>
      </div>
    </div>
  );
};

export default ContactUs;