const products = [
  {
    id: 1,
    name: "Karakou",
    image: "./karakou.jpg",
    price: 20000,
    views: 15,
    sold: 10,
    reviews: [
      { rating: 5, comment: "Great quality!" },
    ],
  },
  {
    id: 2,
    name: "Caftan",
    image: "caftan.jpg",
    price: 25000,
    views: 7,
    sold: 5,
    reviews: [{ rating: 4 }],
  },
  {
    id: 3,
    name: "Blouza",
    image: "blouza.jpg",
    price: 20000,
    views: 11,
    sold: 10,
    reviews: [{ rating: 4, comment: "beautifully made" }],
  },
  {
    id: 4,
    name: "Fergani",
    image: "fergani.jpg",
    price: 35000,
    views: 20,
    sold: 0,
    reviews: [],
  },
  {
    id: 5,
    name: "Melhfa",
    image: "melhfa.jpg",
    price: 15000,
    views: 10,
    sold: 6,
    reviews: [
      { rating: 4, comment: "beautifull color" },
      { rating: 5, comment: "Amazing!!" }
    ],
  }
];

export default products;
