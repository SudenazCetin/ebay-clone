// src/data/products.js

export const products = [
  {
    id: 1,
    title: 'Apple iPhone 13, 128GB - Unlocked - Refurbished Excellent',
    price: 314.99,
    image: 'https://via.placeholder.com/400x300?text=iPhone+13',
    location: 'Istanbul, Turkey',
    condition: 'Excellent - Refurbished',
    colorOptions: ['Green', 'Midnight', 'Starlight'],
    storageOptions: ['128 GB', '256 GB', '512 GB'],
    quantityAvailable: 6,
    seller: {
      name: 'ElectroHub Deals',
      rating: '99.2% positive',
      feedbackCount: 12450,
    },
    images: [
      'https://via.placeholder.com/600x600?text=iPhone+Front',
      'https://via.placeholder.com/600x600?text=iPhone+Back',
      'https://via.placeholder.com/600x600?text=iPhone+Side',
      'https://via.placeholder.com/600x600?text=iPhone+Box',
    ],
    description:
      'Professionally refurbished iPhone 13 in excellent cosmetic condition. Fully tested and unlocked to all networks.',
  },

  {
    id: 2,
    title: 'Gaming Mouse RGB 7200 DPI',
    price: 19.99,
    image: 'https://via.placeholder.com/400x300?text=Gaming+Mouse',
    location: 'Ankara, Turkey',
    condition: 'Brand New',
    colorOptions: ['Black'],
    storageOptions: [],
    quantityAvailable: 15,
    seller: {
      name: 'ProGaming Store',
      rating: '98.5% positive',
      feedbackCount: 5670,
    },
    images: [
      'https://via.placeholder.com/600x600?text=Gaming+Mouse+Front',
      'https://via.placeholder.com/600x600?text=Gaming+Mouse+Side',
    ],
    description:
      'Ergonomic gaming mouse with customizable RGB lighting and up to 7200 DPI.',
  },

  {
    id: 3,
    title: '4K Action Camera Waterproof',
    price: 89.5,
    image: 'https://via.placeholder.com/400x300?text=Action+Camera',
    location: 'Izmir, Turkey',
    condition: 'Open Box',
    colorOptions: ['Black'],
    storageOptions: [],
    quantityAvailable: 3,
    seller: {
      name: 'OutdoorGear TR',
      rating: '97.3% positive',
      feedbackCount: 2300,
    },
    images: [
      'https://via.placeholder.com/600x600?text=Action+Cam+Front',
      'https://via.placeholder.com/600x600?text=Action+Cam+Waterproof',
    ],
    description:
      '4K UHD action camera with waterproof case and multiple mounting accessories.',
  },

  {
    id: 4,
    title: 'Mechanical Keyboard with Blue Switches',
    price: 54.9,
    image: 'https://via.placeholder.com/400x300?text=Keyboard',
    location: 'Bursa, Turkey',
    condition: 'Brand New',
    colorOptions: ['Black', 'White'],
    storageOptions: [],
    quantityAvailable: 10,
    seller: {
      name: 'KeyCaps Studio',
      rating: '99.0% positive',
      feedbackCount: 4200,
    },
    images: [
      'https://via.placeholder.com/600x600?text=Keyboard+Top',
      'https://via.placeholder.com/600x600?text=Keyboard+Side',
    ],
    description:
      'Mechanical keyboard with tactile blue switches and RGB backlighting.',
  },
]
