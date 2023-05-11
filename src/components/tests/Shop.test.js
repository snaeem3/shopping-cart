import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Shop from '../Shop';

describe('Shop component', () => {
  const products = [
    {
      id: 1,
      name: 'Product A',
      price: 10,
      category: 'Category 1',
      inStock: true,
    },
    {
      id: 2,
      name: 'Product B',
      price: 20,
      category: 'Category 2',
      inStock: false,
    },
    {
      id: 3,
      name: 'Product C',
      price: 30,
      category: 'Category 1',
      inStock: true,
    },
  ];

  test('renders Shop component', () => {
    render(
      <MemoryRouter>
        <Shop products={products} />
      </MemoryRouter>
    );
  });

  test('displays products in the shop', () => {
    render(
      <MemoryRouter>
        <Shop products={products} />
      </MemoryRouter>
    );
    expect(screen.getByText('Product A')).toBeInTheDocument();
    expect(screen.getByText('Product B')).toBeInTheDocument();
    expect(screen.getByText('Product C')).toBeInTheDocument();
  });

  test('changes category and displays filtered products', () => {
    render(
      <MemoryRouter>
        <Shop products={products} />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole('button', { name: 'Category 1' }));
    expect(screen.getByText('Product A')).toBeInTheDocument();
    expect(screen.getByText('Product C')).toBeInTheDocument();
    expect(screen.queryByText('Product B')).not.toBeInTheDocument();
  });

  test('changes sort method and displays sorted products', () => {
    render(
      <MemoryRouter>
        <Shop products={products} />
      </MemoryRouter>
    );
    const sortSelect = screen.getByLabelText('Sort products by:');
    fireEvent.change(sortSelect, { target: { value: 'high-low' } });
    expect(screen.getByText('Product C')).toBeInTheDocument();
    expect(screen.getByText('Product B')).toBeInTheDocument();
    expect(screen.getByText('Product A')).toBeInTheDocument();
  });
});
