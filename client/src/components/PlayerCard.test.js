import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

test ('renders players components'), () => {
    const { getByTestId } = render(<PlayerCard />);
    const playerCardDiv = getByTestId(/player-card/i);
    expect (playerCardDiv).toBeInTheDocument();
}