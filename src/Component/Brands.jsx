import React from 'react'
import Brand1 from '../Images/Brands/Brand1.jpg'
import Brand2 from '../Images/Brands/Brand2.jpg'
import Brand3 from '../Images/Brands/Brand3.jpg'
import Brand4 from '../Images/Brands/Brand4.jpg'
import Brand5 from '../Images/Brands/Brand5.jpg'
import Brand6 from '../Images/Brands/Brand6.jpg'
import Brand7 from '../Images/Brands/Brand7.jpg'
import Brand8 from '../Images/Brands/Brand8.jpg'
import Brand9 from '../Images/Brands/Brand9.jpg'
import Brand10 from '../Images/Brands/Brand10.jpg'

    const brands = [
        { name: 'Budweiser', img:Brand1 },
        { name: 'Johnnie Walker', img:Brand2 },
        { name: 'Chivas', img:Brand3} ,
        { name: 'Jack Daniels', img:Brand4 },
        { name: 'Smirnoff', img:Brand5 },
        { name: 'Absolut', img:Brand6 },
        { name: 'Bacardi', img:Brand7 },
        { name: 'Baileys', img:Brand8 },
        { name: 'Rémy Martin', img:Brand9 },
        { name: 'Tanqueray', img:Brand10 }
    ];

export default function Brands() {

    return (
        <section className="container text-center py-5">
            <h2 className="mb-5 text-light">Top Brands</h2>
            <div className="row row-cols-2 row-cols-md-5 g-4">
                {brands.map((brand, index) => (
                    <div className="col" key={index}>
                        <img src={brand.img} alt={brand.name} className="img-fluid rounded " style={{ maxHeight: '100px' }} />
                    </div>
                ))}
            </div>
        </section>
    );




}
