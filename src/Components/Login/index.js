import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Implement your login logic here (e.g., sending data to a server).
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Container>
      <div className="login-form-container">
        <Form className="login-form">
          <h3 className="login-form-title">Login</h3>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <div className="password-input-group">
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <Button
                variant="light"
                onClick={handleTogglePassword}
                className="password-toggle-button"
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </Button>
            </div>
          </Form.Group>
          <Button
            variant="primary"
            type="button"
            className="login-submit-button"
            onClick={handleLogin}
          >
            Login
          </Button>
          <p className="register-link">
            Don't have an account? <NavLink to="/signUp">Register</NavLink>
          </p>

        </Form>
      </div>
    </Container>
  );
}

export default LoginForm;
