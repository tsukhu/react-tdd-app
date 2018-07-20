import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect'; // gives us the toHaveTextContent/toHaveAttribute matchers
import { Counter } from './Counter';

afterEach(cleanup); // when each tests are finished, unmount the component

function renderCounter(props) {
  const utils = render(<Counter maxClicks={4} initialCount={3} {...props} />);
  const counterButton = utils.getByText(/^count/i);
  return { ...utils, counterButton };
}

test('the counter is initialized to the initialCount', () => {
  const { counterButton } = renderCounter();
  expect(counterButton).toHaveTextContent(/3/);
});

test('when clicked, the counter increments the click', () => {
  const { counterButton } = renderCounter();
  fireEvent.click(counterButton);
  expect(counterButton).toHaveTextContent(/4/);
});

test(`the counter button is disabled when it's hit the maxClicks`, () => {
  const { counterButton } = renderCounter({
    maxClicks: 4,
    initialCount: 4
  });
  expect(counterButton).toHaveAttribute('disabled');
});

test(`the counter button does not increment the count when clicked when it's hit the maxClicks`, () => {
  const { counterButton } = renderCounter({
    maxClicks: 4,
    initialCount: 4
  });
  fireEvent.click(counterButton);
  expect(counterButton).toHaveTextContent(/4/);
});

test(`the reset button has been rendered and resets the count when it's hit the maxClicks`, () => {
  const { getByText, counterButton } = renderCounter();
  fireEvent.click(counterButton);
  fireEvent.click(getByText(/reset/i));
  expect(counterButton).toHaveTextContent(/3/);
});

test('allows clicks until the maxClicks is reached, then requires a reset', () => {
  const { getByText } = renderCounter();
  const counterButton = getByText(/^count/i);
  // the counter is initialized to the initialCount
  expect(counterButton).toHaveTextContent(/3/);
  // when clicked, the counter increments the click
  fireEvent.click(counterButton);
  expect(counterButton).toHaveTextContent(/4/);
  // the counter button is disabled when it's hit the maxClicks
  expect(counterButton).toHaveAttribute('disabled');
  // the counter button no longer increments the count when clicked.
  fireEvent.click(counterButton);
  expect(counterButton).toHaveTextContent(/4/);
  // the reset button has been rendered and is clickable
  fireEvent.click(getByText(/reset/i));
  // the counter is reset to the initialCount
  expect(counterButton).toHaveTextContent(/3/);
  // the counter can be clicked and increment the count again
  fireEvent.click(counterButton);
  expect(counterButton).toHaveTextContent(/4/);
});
