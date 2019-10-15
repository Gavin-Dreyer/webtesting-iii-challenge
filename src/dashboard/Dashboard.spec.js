import React from 'react'
import { render, fireEvent, queryAllByText } from '@testing-library/react';

import Dashboard from './Dashboard'

test('it renders correctly', () => {
    render(<Dashboard />);
});

test('displays current display', () => {
    const { getByText } = render(<Dashboard />)

    getByText(/open/i)
    getByText(/unlocked/i)
    getByText(/close gate/i)
    getByText(/lock gate/i)
})

test('displays current display after clicking close', () => {
    const { getByText } = render(<Dashboard />)

    fireEvent.click(getByText(/close gate/i))
    getByText(/closed/i)
    getByText(/unlocked/i)
    getByText(/open gate/i)
    getByText(/lock gate/i)
})

test('displays current display after clicking lock gate', () => {
    const { getByText } = render(<Dashboard />)

    fireEvent.click(getByText(/close gate/i))
    fireEvent.click(getByText(/lock gate/i))
    getByText(/closed/i)
    getByText(/locked/i)
    getByText(/open gate/i)
    getByText(/unlock gate/i)
})

test('displays current display after clicking unlock gate', () => {
    const { getByText } = render(<Dashboard />)

    fireEvent.click(getByText(/close gate/i))
    fireEvent.click(getByText(/lock gate/i))
    fireEvent.click(getByText(/unlock gate/i))
    getByText(/closed/i)
    getByText(/unlocked/i)
    getByText(/open gate/i)
    getByText(/lock gate/i)
})

test('displays current display after clicking open gate', () => {
    const { getByText } = render(<Dashboard />)

    fireEvent.click(getByText(/close gate/i))
    fireEvent.click(getByText(/lock gate/i))
    fireEvent.click(getByText(/unlock gate/i))
    fireEvent.click(getByText(/open gate/i))
    getByText(/open/i)
    getByText(/unlocked/i)
    getByText(/close gate/i)
    getByText(/lock gate/i)
})
