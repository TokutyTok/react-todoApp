import React from "react";
import { render } from '@testing-library/react';
import { TodoForm } from '../src/components/TodoForm';

describe('TodoForm', () => {
  test('renders App component', () => {
    render(<TodoForm />);
  });
});