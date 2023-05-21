import React from 'react';
import { Link } from 'react-router-dom';

const SingleMytoy = ({ car, handleDelete }) => {
    const { available_quantity, category_name, price, rating, toy_name, _id } = car || {};

    

    return (
        <>
            <tr>
                <td>{toy_name}</td>
                <td>{price}</td>
                <td>{rating}</td>
                <td>{available_quantity}</td>
                <td>{category_name}</td>
                <td><Link to={`/updatetoy/${_id}`}>
                    <button className="btn btn-outline btn-info">Update</button>
                </Link></td>
                <th><Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error">Delete</button>
                </Link></th>
            </tr>
        </>
    );
};

export default SingleMytoy;