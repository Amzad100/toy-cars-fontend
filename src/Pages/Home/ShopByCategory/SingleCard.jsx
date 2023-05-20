import React from 'react';
import { Link } from 'react-router-dom';

const SingleCard = ({ car }) => {
    const { _id, category_id, toy_name, picture, price, sub_category, seller, rating, available_quantity } = car;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl w-full h-[400px]" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title">{toy_name}</h2>
                <p>Price: {price}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions">
                    <Link to={`/viewDetails/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;

