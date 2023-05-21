import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';

const ShopByCategory = () => {
    const [cars, setCars] = useState([]);
    const [activeTab, setActiveTab] = useState('sports_car');

    const handleTabClick = (tabname) => {
        setActiveTab(tabname);
    }


    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div className='text-center'>
            <h1 className='text-center text-3xl font-bold my-5'>Shop By Category : {cars.length}</h1>
            <div className="tabs tabs-boxed text-center">
                <div onClick={() => handleTabClick("sports_car")} className={`tab ${activeTab == 'sports_car' ? "tab-active" : ""}`}>
                    Sports Cars
                </div>
                <div onClick={() => handleTabClick("police_car")} className={`tab ${activeTab == 'police_car' ? "tab-active" : ""}`}>
                    Police Cars
                </div>
                <div onClick={() => handleTabClick("truck")} className={`tab ${activeTab == 'truck' ? "tab-active" : ""}`}>
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