import uniqid from 'uniqid';
import catanImg from './images/product images/Catan-boxart.jpg';
import pandemicImg from './images/product images/Pandemic-boxart.jpg';
import codenamesImg from './images/product images/codenames-boxart.jpeg';
import resistanceImg from './images/product images/resistance-boxart.jpg';
import onuwImg from './images/product images/onuw-boxart.jpg';

export const productData = [
  {
    name: 'Settlers of Catan',
    price: 1.11,
    category: 'Strategy',
    inStock: true,
    imgSrc: catanImg,
    // id: uniqid(),
  },
  {
    name: 'Pandemic',
    price: 2.22,
    category: 'Strategy',
    inStock: true,
    imgSrc: pandemicImg,
    // id: uniqid(),
  },
  {
    name: 'Codenames',
    price: 3.33,
    category: 'Social',
    inStock: true,
    imgSrc: codenamesImg,
    // id: uniqid(),
  },
  {
    name: 'Resistance',
    price: 4.44,
    category: 'Social',
    inStock: false,
    imgSrc: resistanceImg,
    // id: uniqid(),
  },
  {
    name: 'One Night Ultimate Werewolf',
    price: 5.5,
    category: 'Social',
    inStock: true,
    imgSrc: onuwImg,
    // id: uniqid(),
  },
];
// consider sorting products into categories then list name, price, img
