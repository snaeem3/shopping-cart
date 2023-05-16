import uniqid from 'uniqid';

export const productData = [
  {
    name: 'A',
    price: 1.11,
    category: 'Category A',
    inStock: true,
    imgSrc: null,
    // id: uniqid(),
  },
  {
    name: 'B',
    price: 2.22,
    category: 'Category A',
    inStock: true,
    imgSrc: null,
    // id: uniqid(),
  },
  {
    name: 'C',
    price: 3.33,
    category: 'Category B',
    inStock: true,
    imgSrc: null,
    // id: uniqid(),
  },
  {
    name: 'D',
    price: 4.44,
    category: 'Category B',
    inStock: false,
    imgSrc: null,
    // id: uniqid(),
  },
  {
    name: 'DCBA',
    price: 5.5,
    category: 'Category B',
    inStock: true,
    imgSrc: null,
    // id: uniqid(),
  },
];
// consider sorting products into categories then list name, price, img
