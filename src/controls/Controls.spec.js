import React from 'react'
import { render, fireEvent, queryAllByText } from '@testing-library/react';

import Controls from './Controls'

test('it renders correctly', () => {
    // do snapshots here if you're not in codesandbox
    render(<Controls />);
});

// test('', ()=> {
    // const mockOpenCloseButton = jest.fn()
    // const { getByText } = render(<Controls />);
    // getByText(/close gate/i)
    // fireEvent.click(getByText(/close gate/i))
    // expect(getByText(/close gate/i)).toBe(getByText(/lock gate/i))



    // const { getByText } = render(
    //     <Controls />
    // )

    // fireEvent.click(getByText(/close gate/i))
    // expect(/close gate/i).toHaveBeenCalled()
// })

