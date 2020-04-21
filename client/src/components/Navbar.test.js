import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

test('renders toggle components', () => {
    const { getByTestId } = render (<Navbar />);
    const toggle = getByTestId(/toggle/i);
    expect(toggle).toBeInTheDocument();
})