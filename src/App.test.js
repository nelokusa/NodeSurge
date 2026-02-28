// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NodeSurge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NodeSurge/i);
    expect(titleElement).toBeInTheDocument();
});
