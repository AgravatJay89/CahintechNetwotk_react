import React, { useState } from 'react';

function AccountPage() {
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('password');
  
  const handleSave = () => {
    // Normally here you would call an API to save the account info
    alert('Account information updated');
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Account Information</h5>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSave} className="btn btn-primary mt-3">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default AccountPage;
