import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally here you would call an API to verify login credentials
    if (email === 'user@example.com' && password === 'password') {
      history.push('/account');
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Login</h5>
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
