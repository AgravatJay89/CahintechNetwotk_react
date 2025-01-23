import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally here you would call an API to register the user
    console.log('User registered:', { email, password });
    history.push('/login');
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Register</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;