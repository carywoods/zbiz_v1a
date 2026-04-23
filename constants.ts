
import type { Story, Business } from './types';

export const featuredStories: Story[] = [
  {
    id: 1,
    title: "The Heart of Main Street: A Look Inside Zionsville's Oldest Shop",
    author: "Jane Doe",
    date: "October 26, 2023",
    excerpt: "We talked with the owners of 'The Cobblestone' to learn about its rich history and enduring charm in our community.",
    category: "Business",
    imageUrl: "https://picsum.photos/seed/story1/600/400",
  },
  {
    id: 2,
    title: "A Culinary Journey Through Zionsville's Best Eateries",
    author: "John Smith",
    date: "October 24, 2023",
    excerpt: "From cozy cafes to fine dining, explore the diverse and delicious food scene that makes Zionsville a diner's delight.",
    category: "Food",
    imageUrl: "https://picsum.photos/seed/story2/600/400",
  },
  {
    id: 3,
    title: "Community Spotlight: The Annual Fall Festival Brings Us Together",
    author: "Emily White",
    date: "October 22, 2023",
    excerpt: "Recapping the highlights of this year's Fall Festival, a testament to Zionsville's strong community spirit.",
    category: "Events",
    imageUrl: "https://picsum.photos/seed/story3/600/400",
  },
];

export const latestBusinesses: Business[] = [
  {
    id: 1,
    name: "The Gilded Lily",
    category: "Boutique",
    address: "123 Main St, Zionsville, IN",
    phone: "(317) 555-0101",
    description: "Unique gifts, home decor, and handcrafted jewelry.",
    imageUrl: "https://picsum.photos/seed/biz1/400/300",
  },
  {
    id: 2,
    name: "Brick Street Brews",
    category: "Coffee Shop",
    address: "456 Oak Ave, Zionsville, IN",
    phone: "(317) 555-0102",
    description: "Artisanal coffee, fresh pastries, and a cozy atmosphere.",
    imageUrl: "https://picsum.photos/seed/biz2/400/300",
  },
  {
    id: 3,
    name: "Zionsville Pizza Co.",
    category: "Restaurant",
    address: "789 Pine Ln, Zionsville, IN",
    phone: "(317) 555-0103",
    description: "Family-owned pizzeria with classic and specialty pies.",
    imageUrl: "https://picsum.photos/seed/biz3/400/300",
  },
  {
    id: 4,
    name: "Eagle Creek Outfitters",
    category: "Sporting Goods",
    address: "101 Park Rd, Zionsville, IN",
    phone: "(317) 555-0104",
    description: "Your one-stop shop for hiking, camping, and outdoor gear.",
    imageUrl: "https://picsum.photos/seed/biz4/400/300",
  },
];
