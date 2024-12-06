import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form';

describe('Form Component', () => {
  test('renders all form fields with correct initial values', () => {
    render(<Form />);

    // Check for the form fields
    expect(screen.getByLabelText('What is your sex?')).toBeInTheDocument();
    expect(screen.getByLabelText('How old are you?')).toBeInTheDocument();
    expect(screen.getByLabelText('How tall are you?')).toBeInTheDocument();
    expect(screen.getByLabelText('How much do you weigh?')).toBeInTheDocument();
    expect(screen.getByLabelText('How active are you on a daily basis?')).toBeInTheDocument();

    // Check initial values
    expect(screen.getByLabelText('What is your sex?').value).toBe('Male');
    expect(screen.getByLabelText('How old are you?').value).toBe('21');
    expect(screen.getByLabelText('How tall are you?').value).toBe('170');
    expect(screen.getByLabelText('How much do you weigh?').value).toBe('60');
    expect(screen.getByLabelText('How active are you on a daily basis?').value).toBe('Moderately');
  });

  test('updates form values on user input', () => {
    render(<Form />);

    const ageInput = screen.getByLabelText('How old are you?');
    const heightInput = screen.getByLabelText('How tall are you?');

    // Update age
    fireEvent.change(ageInput, { target: { value: '25' } });
    expect(ageInput.value).toBe('25');

    // Update height
    fireEvent.change(heightInput, { target: { value: '180' } });
    expect(heightInput.value).toBe('180');
  });

  test('handles sex and activity level selection', () => {
    render(<Form />);

    const sexButton = screen.getByText('Female');
    const activityLevelButton = screen.getByText('Very Active');

    // Change sex
    fireEvent.click(sexButton);
    expect(screen.getByLabelText('What is your sex?').value).toBe('Female');

    // Change activity level
    fireEvent.click(activityLevelButton);
    expect(screen.getByLabelText('How active are you on a daily basis?').value).toBe('Very Active');
  });

  test('calls handleFormSubmit on form submission', () => {
    const mockHandleFormSubmit = jest.fn();

    render(<Form />);

    const calculateButton = screen.getByText('Calculate');

    fireEvent.click(calculateButton);

    // Expect mockHandleFormSubmit to be called once
    expect(mockHandleFormSubmit).toHaveBeenCalled();
  });
});
