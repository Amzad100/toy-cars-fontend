import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';

const ShopByCategory = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div className='text-center'>
            <h1 className='text-center text-3xl font-bold my-5'>Shop By Category : {cars.length}</h1>
            <div className="tabs tabs-boxed text-center">
                <div className="tab tab-active">
                    Sports Cars
                </div>
                <div className="tab ">
                    Police Cars
                </div>
                <div className="tab ">
                    Truck
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    cars.map(car => <SingleCard
                        key={car._id}
                        car={car}
                    >
                    </SingleCard>)
                }

            </div>
        </div>
    );
};

export default ShopByCategory;