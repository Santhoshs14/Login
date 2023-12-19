import React, { useState} from 'react';
import "./resetstyle.css"
import fp from "../assets/fp.jpg"

const Reset = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // api call or handling the email(send reset email)
        console.log('Forgot password for email:', email);
        // Close the popup
        onClose();
      };
  return (
<div className="popup" onClick={onClose}>
      <div className="popup-content"onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>     
        <form className='form' onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        <div className='image'><img src={fp} alt="img" /></div>
        <div className="form-group">
          <label>Email</label>
            <input
            className='input-mail'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button className='btn' type="submit" >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Reset

