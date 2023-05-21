import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';

const ShopByCategory = () => {
    const [cars, setCars] = useState([]);
    const [activeTab, setActiveTab] = useState("SportsCars");

    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-amzad100-amzad100.vercel.app/alltoys/${activeTab}`)
            .then((res) => res.json())
            .then((data) => {
                setCars(data)
            })
    }, [activeTab]);

    const handleTabClick = (tabname) => {
        setActiveTab(tabname);
    }

    return (
        <div className='text-center'>
            <h1 className='text-center text-3xl font-bold my-5'>Shop By Category : {cars.length}</h1>
            <div className="tabs tabs-boxed text-center">
                <div onClick={() => handleTabClick("SportsCars")} className={`tab ${activeTab == "SportsCars" ? "tab-active" : ""}`}>
                    Sports Cars
                </div>
                <div onClick={() => handleTabClick("PoliceCars")} className={`tab ${activeTab == "PoliceCars" ? "tab-active" : ""}`}>
                    Police Cars
                </div>
                <div onClick={() => handleTabClick("Truck")} className={`tab ${activeTab == "Truck" ? "tab-active" : ""}`}>
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