import React from 'react'
import { render, fireEvent, queryAllByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import Display from './Display'

test('it renders correctly', () => {
    render(<Display />);
});

test('check class of locked if both states are false', () => {
    const { getByTestId } = render(<Display closed={false} locked={false} />)

    expect(getByTestId('locked')).toHaveClass('green-led')

})

test('check class of closed if closed is true and locked is false', () => {
    const { getByTestId } = render(<Display closed={true} locked={false} />)

    expect(getByTestId('closed')).toHaveClass('red-led')

})

test('check class of locked if closed is true and locked is false', () => {
    const { getByTestId } = render(<Display closed={true} locked={false} />)

    expect(getByTestId('locked')).toHaveClass('green-led')

})

test('check class of closed if both states are true ', () => {
    const { getByTestId } = render(<Display closed={true} locked={true} />)

    expect(getByTestId('closed')).toHaveClass('red-led')

})

test('check class lock if both states are true', () => {
    const { getByTestId } = render(<Display closed={true} locked={true} />)

    expect(getByTestId('locked')).toHaveClass('red-led')

})

test('check for closed text if closed props is true', () => {
    const { getByText } = render(<Display closed={true} />)

    getByText(/closed/i)

})

test('check for copen text if closed props is false', () => {
    const { getByText } = render(<Display closed={false} />)

    getByText(/open/i)

})

test('check for locked text if locked props is true', () => {
    const { getByText } = render(<Display locked={true} />)

    getByText(/locked/i)

})

test('check for unlock text if locked props is false', () => {
    const { getByText } = render(<Display locked={false} />)

    getByText(/unlocked/i)

})