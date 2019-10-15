import React from 'react'
import { render, fireEvent, queryAllByText } from '@testing-library/react';

import Controls from './Controls'

test('it renders correctly', () => {
    // do snapshots here if you're not in codesandbox
    render(<Controls />);
});

test('check to see if open button has been clicked', ()=> {
    const mockOpenClose = jest.fn()
    const { getByText } = render(<Controls toggleClosed={mockOpenClose} />);
    
    getByText(/close gate/i)
    fireEvent.click(getByText(/close gate/i))
    expect(mockOpenClose).toHaveBeenCalled()

})

test('check to see if close gate button has been clicked', ()=> {
    const mockOpenClose = jest.fn()
    const { getByText } = render(<Controls closed={true} toggleClosed={mockOpenClose} />);
    
    getByText(/open gate/i)
    fireEvent.click(getByText(/open gate/i))
    expect(mockOpenClose).toHaveBeenCalled()

})

test('check to see if lock gate button has been clicked', ()=> {
    const mockLock = jest.fn()
    const { getByText } = render(<Controls closed={true} locked={false} toggleLocked={mockLock} />);
    
    getByText(/lock gate/i)
    fireEvent.click(getByText(/lock gate/i))
    expect(mockLock).toHaveBeenCalled()

})

test('check to see if unlock gate button has been clicked', ()=> {
    const mockLock = jest.fn()
    const { getByText } = render(<Controls closed={true} locked={true} toggleLocked={mockLock} />);
    
    getByText(/unlock gate/i)
    fireEvent.click(getByText(/unlock gate/i))
    expect(mockLock).toHaveBeenCalled()

})


test('check to see if unlock gate button has been clicked', ()=> {
    const mockLock = jest.fn()
    const { getByText } = render(<Controls closed={true} locked={true} toggleLocked={mockLock} />);
    
    getByText(/unlock gate/i)
    fireEvent.click(getByText(/unlock gate/i))
    expect(mockLock).toHaveBeenCalled()

})

test('check to see if close button is disabled', ()=> {
    const { getByTestId } = render(<Controls closed={true} locked={true} />);
    
   expect(getByTestId('closeButton').hasAttribute('disabled')).toBe(true)
})

test('check to see if lock button is disabled', ()=> {
    const { getByTestId } = render(<Controls closed={false} locked={false} />);
    
   expect(getByTestId('lockButton').hasAttribute('disabled')).toBe(true)
})




