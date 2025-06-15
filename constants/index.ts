import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Cozy Cabin",
    image: "/images/cabin.jpg",
    rating: 4.8,
    price: 120,
    description: "A cozy cabin in the woods perfect for a relaxing getaway.",
    address: {
      city: "Denver",
      country: "USA",
    },
    category: ["Wi-Fi", "Fireplace", "Kitchen", "Parking"],
    reviews: [
      {
        name: "Alice",
        avatar: "/avatars/alice.png",
        rating: 5,
        comment: "Amazing stay, peaceful and clean!",
      },
      {
        name: "Bob",
        avatar: "/avatars/bob.png",
        rating: 4,
        comment: "Very nice location, loved the fireplace.",
      },
    ],
  },
];
