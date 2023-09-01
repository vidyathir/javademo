import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Use MemoryRouter instead of Router
import Login from './Login';

test('renders the login form and allows submission', async () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  // Check if the "Log In" button is present
  const loginButton = screen.getByText('Log In');
 

  // Fill in the email and password inputs
  const emailInput = screen.getByPlaceholderText('example@gmail.com');
  const passwordInput = screen.getByPlaceholderText('***********');

  fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  // Click the "Log In" button to submit the form
  fireEvent.click(loginButton);

  // Wait for the navigation or any expected behavior
  // You may need to adapt this part based on your actual application
});
