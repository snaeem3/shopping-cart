import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Product from '../Product';

Object.defineProperty(window, 'location', {
  value: {
    pathname: '/',
  },
  writable: true,
});

describe('Product component', () => {
  it('should render the product name', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Product
          productId="123"
          name="Product Name"
          price="$10.99"
          category="Category Name"
          inStock
          imgUrl="https://example.com/product-image.jpg"
        />
      </MemoryRouter>
    );
    expect(getByText('Product Name')).toBeInTheDocument();
  });

  it('should render the product image with the correct alt text', () => {
    render(
      <MemoryRouter>
        <Product
          productId="123"
          name="Product Name"
          price="$10.99"
          category="Category Name"
          inStock
          imgUrl="https://example.com/product-image.jpg"
        />
      </MemoryRouter>
    );
    expect(screen.getByAltText('Product Name')).toBeInTheDocument();
  });

  it('should render IN STOCK if inStock is true', () => {
    render(
      <MemoryRouter>
        <Product
          productId="123"
          name="Product Name"
          price="$10.99"
          category="Category Name"
          inStock="true"
          imgUrl="https://example.com/product-image.jpg"
        />
      </MemoryRouter>
    );
    expect(screen.getByText('IN STOCK')).toBeInTheDocument();
  });

  it('should render OUT OF STOCK if inStock is false', () => {
    render(
      <MemoryRouter>
        <Product
          productId="123"
          name="Product Name"
          price="$10.99"
          category="Category Name"
          inStock={false}
          imgUrl="https://example.com/product-image.jpg"
        />
      </MemoryRouter>
    );
    expect(screen.getByText('OUT OF STOCK')).toBeInTheDocument();
  });

  it.skip('should navigate to the correct product page when clicked', async () => {
    // const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Product
          productId="123"
          name="ProductName"
          price="$10.99"
          category="Category Name"
          inStock
          imgUrl="https://example.com/product-image.jpg"
        />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText('ProductName'));
    await waitFor(() => {
      expect(window.location.pathname).toBe('/shop/ProductName');
    });
  });

  it('should call addItemToCart when quick-add-btn is clicked', () => {
    const addItemToCart = jest.fn();

    render(
      <MemoryRouter>
        <Product
          productId="123"
          name="Product Name"
          price="$10.99"
          category="Category Name"
          inStock
          imgUrl="https://example.com/product-image.jpg"
          addItemToCart={addItemToCart}
        />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('+'));
    expect(addItemToCart).toHaveBeenCalledWith('Product Name', 1);
  });
});
