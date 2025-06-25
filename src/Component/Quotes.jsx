import React from 'react';
import harry from '../Images/harry-removebg-preview.png';

export default function Quotes() {
  const imageStyle = {
    maxHeight: '300px',
    objectFit: 'contain',
    width: '100%',
  };

  const quoteBoxStyle = {
    minHeight: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '1rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  };

  return (
    <div className="container py-5">
      <div className="row g-4 align-items-center">
        {/* First Quote */}
        <div className="col-md-6 text-center">
          <img
            src="https://www.freepnglogos.com/uploads/simpsons-png/homer-simpson-simpsons-wiki-fandom-powered-wikia-39.png"
            alt="Homer Simpson"
            style={imageStyle}
            className="mb-3"
          />
          <div
            style={{ ...quoteBoxStyle, backgroundColor: '#0d6efd', color: 'white' }}
          >
            <h5>
              “Alcohol: because no great story ever started with someone eating a salad.”
            </h5>
          </div>
        </div>

        {/* Second Quote */}
        <div className="col-md-6 text-center">
          <img
            src={harry}
            alt="Harry"
            style={imageStyle}
            className="mb-3"
          />
          <div
            style={{ ...quoteBoxStyle, backgroundColor: '#0d6efd', color: 'white' }}
          >
            <h5>
              “A glass of wine a day keeps the doctor away, but a bottle a day brings the doctor to your house.”
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
