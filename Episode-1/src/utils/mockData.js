const restaurantList = [
  {
    "@type": "Restaurant",
    name: "German BrezelHaus - Bakery & Bistro",
    image:
      "https://b.zmtcdn.com/data/pictures/3/21031483/fea0260c131496602c1765f23f9b356e_o2_featured_v2.jpg?output-format=webp",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.4",
      reviewCount: "760",
    },
    url: "/bangalore/german-brezelhaus-bakery-bistro-1-indiranagar-bangalore/order",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Site 626, 1st stage, Binnamangala K R Puram, 2nd Main Road, Indiranagar, Bangalore",
    },
    servesCuisine: "Bakery, German, Coffee",
  },
  {
    "@type": "Restaurant",
    name: "Namaste",
    image:
      "https://b.zmtcdn.com/data/pictures/2/20501302/aacf77c470e04f638fbf6d58f9518910_o2_featured_v2.jpg?output-format=webp",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "3.7",
      reviewCount: "10.4K",
    },
    url: "/bangalore/namaste-malleshwaram-bangalore/order",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "501, Ground Floor, Lakkegowda Mansion, Sampige Road, Malleshwaram, Bangalore",
    },
    servesCuisine: "South Indian, Beverages",
  },
  {
    "@type": "Restaurant",
    name: "Cafe Amudham",
    image:
      "https://b.zmtcdn.com/data/pictures/3/21515843/1abca28f39590e9428bef243ea179ca6_o2_featured_v2.jpg?output-format=webp",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.1",
      reviewCount: "2,160",
    },
    url: "/bangalore/cafe-amudham-majestic-bangalore/order",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "46, Akshaya Chamber, Ground Floor, 4th Cross, 5th Main, Majestic, Bangalore",
    },
    servesCuisine: "South Indian, Beverages",
  },
  {
    "@type": "Restaurant",
    name: "ITC Aashirvaad Soul Creations",
    image:
      "https://b.zmtcdn.com/data/pictures/0/20709060/a1c28b995a81e21be3880239cc1adcf0_o2_featured_v2.jpg?output-format=webp",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.4",
      reviewCount: "2,588",
    },
    url: "/bangalore/itc-aashirvaad-soul-creations-commercial-street-bangalore/order",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "33, Civil Station, Sampangiramanagar, Narayana Chetty Road, Commercial Street, Bangalore",
    },
    servesCuisine: "North Indian, Healthy Food, Beverages",
  },
  {
    "@type": "Restaurant",
    name: "Kanti Sweets - Since 1957",
    image:
      "https://b.zmtcdn.com/data/pictures/0/50550/e2fa55e5349dc9204176519a00877539_o2_featured_v2.jpg?output-format=webp",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.3",
      reviewCount: "4,968",
    },
    url: "/bangalore/kanti-sweets-since-1957-brigade-road-bangalore/order",
    address: {
      "@type": "PostalAddress",
      streetAddress: "157, St. Patricks Complex, Brigade Road, Bangalore",
    },
    servesCuisine: "Mithai, Desserts, Street Food",
  },
  {
    "@type": "Restaurant",
    name: "Goodness To Go By Smoke House Deli",
    image:
      "https://b.zmtcdn.com/data/pictures/7/20423817/8a534d12d365f1a951137a4ec1f81f77_o2_featured_v2.jpg?output-format=webp",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.4",
      reviewCount: "800",
    },
    url: "/bangalore/goodness-to-go-by-smoke-house-deli-lavelle-road-bangalore/order",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Toucan Plaza, 52 & 53, Shanthinagara, B.M.M.P East, Lavelle Road, Bangalore",
    },
    servesCuisine: "Healthy Food, Sandwich, European",
  },
  {
    "@type": "Restaurant",
    name: "Burger King",
    image:
      "https://b.zmtcdn.com/data/pictures/5/18821765/cc8f83eb4e1cb9421c88bfb16fb7a82e_o2_featured_v2.jpg?output-format=webp",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "3.9",
      reviewCount: "32.4K",
    },
    url: "/bangalore/burger-king-basavanagudi-bangalore/order",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "59/3, Ground & 1st Floor, West Anjaneya Temple Road, Ward 49, Gandhi Bazaar, Basavanagudi, Bangalore",
    },
    servesCuisine: "Burger, Fast Food, Desserts",
  },
  {
    "@type": "Restaurant",
    name: "Ministry Of Oats",
    image:
      "https://b.zmtcdn.com/data/pictures/6/21165866/dba2804b48c5bc25d21eeb2e2d94568b_o2_featured_v2.jpg?output-format=webp",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.3",
      reviewCount: "789",
    },
    url: "/bangalore/ministry-of-oats-domlur-bangalore/order",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7/34, Domlur Layout, 2nd Main Road, Domlur, Bangalore",
    },
    servesCuisine: "Healthy Food, Coffee, Desserts",
  },
  {
    "@type": "Restaurant",
    name: "FreshMenu",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/9/59179/c62dbf14539c831b77e2f5cb2530b6ae_o2_featured_v2.jpg?output-format=webp",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "3.8",
      reviewCount: "28.1K",
    },
    url: "/bangalore/freshmenu-richmond-road/order",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "2, 4th Floor, Agaabdulla Street, Richmond Town, Richmond Road, Bangalore",
    },
    servesCuisine: "Continental, Oriental, Asian",
  },
];
export default restaurantList;
