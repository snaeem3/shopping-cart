import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'; // optional
import userEvent from '@testing-library/user-event';
import Cart from '../Cart';

const mockCart = [
  { productName: 'Product One', quantity: 2 },
  { productName: 'Product Two', quantity: 1 },
];
const mockProducts = [
  {
    id: '1',
    name: 'Product One',
    price: '10.99',
    category: 'Category One',
    imgUrl: 'https://example.com/product-one.jpg',
  },
  {
    id: '2',
    name: 'Product Two',
    price: '5.99',
    category: 'Category Two',
    imgUrl: 'https://example.com/product-two.jpg',
  },
];

describe('Cart', () => {
  it('displays No products in cart when cart is empty', () => {
    render(<Cart cart={[]} />);
    expect(screen.getByText('No products in cart')).toBeInTheDocument();
  });

  it('should render each product in the cart', () => {
    render(
      <MemoryRouter>
        <Cart cart={mockCart} products={mockProducts} />
      </MemoryRouter>
    );
    expect(screen.getByText('Product One')).toBeInTheDocument();
    expect(screen.getByText('Product Two')).toBeInTheDocument();
  });

  it('should call deleteItemFromCart with the correct arguments when the reduce quantity button is clicked', () => {
    const deleteItemFromCartMock = jest.fn();
    render(
      <MemoryRouter>
        <Cart
          cart={mockCart}
          products={mockProducts}
          deleteItemFromCart={deleteItemFromCartMock}
        />
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getAllByRole('button', { name: 'subtract icon' })[0]
    );

    expect(deleteItemFromCartMock).toHaveBeenCalledWith('Product One', 1);
  });

  it('should call addItemToCart with the correct arguments when the increase quantity button is clicked', () => {
    const addItemToCartMock = jest.fn();
    render(
      <MemoryRouter>
        <Cart
          cart={mockCart}
          products={mockProducts}
          addItemToCart={addItemToCartMock}
        />
      </MemoryRouter>
    );

    fireEvent.click(screen.getAllByRole('button', { name: 'add icon' })[0]);

    expect(addItemToCartMock).toHaveBeenCalledWith('Product One', 1);
  });

  it('should call deleteItemFromCart with the correct arguments when the remove from cart button is clicked', () => {
    const deleteItemFromCartMock = jest.fn();
    render(
      <MemoryRouter>
        <Cart
          cart={mockCart}
          products={mockProducts}
          deleteItemFromCart={deleteItemFromCartMock}
        />
      </MemoryRouter>
    );

    fireEvent.click(screen.getAllByRole('button', { name: /remove/i })[0]);

    expect(deleteItemFromCartMock).toHaveBeenCalledWith('Product One', 2);
  });
});
