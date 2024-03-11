import React, { useState } from 'react';

const Input = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // No need to manage createdAt in the frontend

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { username, password }; // Remove createdAt from the request body
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        alert('User created successfully!');
      } else {
        const errorText = await response.text();
        throw new Error(errorText);
      }
    } catch (err) {
      console.error('Error creating user:', err.message);
      alert('An error occurred while creating user.');
    }
  };

  return (
    <div>
      <h1>Minha Database</h1>
      <form onSubmit={onSubmitForm}>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        {/* No need to include createdAt input field */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Input;

