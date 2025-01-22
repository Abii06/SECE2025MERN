import React, { useState } from 'react';

const Login = () => {
  
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Password:', password);
    
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Enter the Name</h3>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div>
          <h3>Enter the Password</h3>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
