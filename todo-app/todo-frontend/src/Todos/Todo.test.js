import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Todo from './Todo';

describe('<Todo />', () => {
  it('is rendered properly if `done` is false', () => {
    const todo = {
      text: 'test',
      done: false,
    };
    render(
      <Todo todo={todo} deleteTodo={jest.fn()} completeTodo={jest.fn()} />
    );
    const todoText = screen.getByText(todo.text);
    const todoStatus = screen.getByText('This todo is not done');
    const deleteButton = screen.getByText('Delete');
    const setDoneButton = screen.getByText('Set as done');
    expect(todoText).toBeVisible();
    expect(todoStatus).toBeVisible();
    expect(deleteButton).toBeVisible();
    expect(setDoneButton).toBeVisible();
  });

  it('is rendered properly if `done` is true', () => {
    const todo = {
      text: 'test',
      done: true,
    };
    render(
      <Todo todo={todo} deleteTodo={jest.fn()} completeTodo={jest.fn()} />
    );
    const todoText = screen.getByText(todo.text);
    const todoStatus = screen.getByText('This todo is done');
    const deleteButton = screen.getByText('Delete');
    const setDoneButton = screen.queryByText('Set as done');
    expect(todoText).toBeVisible();
    expect(todoStatus).toBeVisible();
    expect(deleteButton).toBeVisible();
    expect(setDoneButton).toBeNull();
  });
});
