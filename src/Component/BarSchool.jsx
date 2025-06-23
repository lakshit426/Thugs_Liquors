import React from 'react';
import Bar1 from '../Images/Brands/Bar1.jpg'
import Bar2 from '../Images/Brands/Bar2.jpg'
import Bar3 from '../Images/Brands/Bar3.jpg'


const articles = [
  {
    category: 'TIPS & TRICKS',
    title: 'What’s the Shelf Life of Liquor?????????????',
    image:Bar1
  },
  {
    category: 'BAR TOOLS',
    title: "Highball vs Collins Glasses: Why There's a Difference, and Why It Matters",
    image:Bar2
  },
  {
    category: 'HISTORY & TRENDS',
    title: 'What’s the Difference Between Column and Pot Stills?',
    image: Bar3
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

const BarSchool = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Bar School</h1>
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

export default BarSchool;
