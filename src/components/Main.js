import React, { useState } from 'react';

function Main() {
  const [formData, setFormData] = useState({
    email: '',
    pwd: '',
    remember: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Hello ${process.env.Name}`)
  
  }

  return (
    <div className="container">
      <h2>Vertical (basic) form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            placeholder="Enter email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input 
            type="password" 
            className="form-control" 
            id="pwd" 
            placeholder="Enter password" 
            name="pwd" 
            value={formData.pwd} 
            onChange={handleChange} 
          />
        </div>
        <div className="checkbox">
          <label>
            <input 
              type="checkbox" 
              name="remember" 
              checked={formData.remember} 
              onChange={handleChange} 
            /> 
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    </div>
  );
}

export default Main;



