import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchInput from './SearchInput';
import userEvent from '@testing-library/user-event';
describe('Components: SearchInput', () => {
  it('should render with right style', () => {
    render(<SearchInput onChange={jest.fn()} />);

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toHaveAttribute('placeholder', 'Search character');
    expect(inputElement).toHaveClass('search-input');
  });

  it('should call "onChange" for every time the input is changed', async () => {
    const inputText = 'yoda';
    const onChangeFake = jest.fn();

    render(<SearchInput onChange={onChangeFake} />);

    const inputElement = screen.getByRole('textbox');

    await userEvent.type(inputElement, inputText);

    expect(onChangeFake).toHaveBeenCalledTimes(inputText.length);
  });
});