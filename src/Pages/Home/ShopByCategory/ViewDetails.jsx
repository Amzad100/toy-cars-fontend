import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const ViewDetails = () => {
    const toys = useLoaderData();
    const { category_id, category_name, toy_name, picture, price, rating, available_quantity, } = toys;
    return (
        <>
            <Header></Header>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl w-full h-full" />
                </figure>
                <div className="card-body items-center">
                    <h2 className="card-title">{toy_name}</h2>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                    <p>Category Name: {category_name}</p>
                    <p>Available Quantity: {available_quantity}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ViewDetails;