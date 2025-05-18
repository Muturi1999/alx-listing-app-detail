// API URLs
export const API_BASE_URL = '/api';
export const API_LISTINGS_ENDPOINT = `${API_BASE_URL}/listings`;

// UI Constants
export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  OUTLINE: 'outline',
};

export const BUTTON_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

// Sample data (for development purposes)
export const SAMPLE_LISTINGS = [
  {
    id: '1',
    title: 'Modern apartment in downtown',
    description: 'Beautiful and spacious apartment in the heart of the city',
    image: '/assets/listing1.jpg',
    price: 120,
    location: 'New York',
  },
  {
    id: '2',
    title: 'Cozy cottage near lake',
    description: 'Peaceful retreat with stunning lake views',
    image: '/assets/listing2.jpg',
    price: 95,
    location: 'Lake Tahoe',
  },
  {
    id: '3',
    title: 'Luxury villa with pool',
    description: 'Exclusive villa with private pool and garden',
    image: '/assets/listing3.jpg',
    price: 250,
    location: 'Miami',
  },
];