import React from 'react';
import Bar1 from '../Images/Brands/Bar4.jpg'
import Bar2 from '../Images/Brands/Bar5.jpg'
import Bar3 from '../Images/Brands/Bar6.jpg'

const articles = [
  {
    category: 'WINE',
    title: '3 Indigenous Wine Recommendations from Owamni by The Sioux Chef',
    image:Bar1
  },
  {
    category: 'BEER',
    title: 'The 7 Best Non-Alcoholic IPA Beers, According to Industry Experts',
    image:Bar2
  },
  {
    category: 'SCOTCH',
    title: 'The Essential Scotch Whisky Bottles for Your Home Bar',
    image:Bar3
  }
];

const ArticleCard = ({ category, title, image }) => (
  <div className="card">
    <img src={image} className="card-img-top" alt={title} />
    <div className="card-body">
      <p className="text-danger fw-semibold small">{category}</p>
      <h5 className="card-title">{title}</h5>
    </div>
  </div>
);

const WhatToBuy = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">What to Buy</h1>
      <div className="row">
        {articles.map((article, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <ArticleCard {...article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatToBuy;
