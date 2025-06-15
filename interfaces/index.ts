export interface PropertyProps {
  name: string;
  image: string;
  rating: number;
  price: number;
  description: string;
  address: {
    city: string;
    country: string;
  };
  category: string[];
  reviews: {
    name: string;
    avatar: string;
    rating: number;
    comment: string;
  }[];
}
export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}
