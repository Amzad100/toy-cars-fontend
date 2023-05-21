import React from 'react';
import { Link } from 'react-router-dom';

const Singletoy = ({ toy }) => {
    const { available_quantity, category_name, detail_description, email, name, picture, price, rating, toy_name, _id } = toy || {};
    return (
        <>
            <tr>
                <th>${1}</th>
                <td>{name}</td>
                <td>{toy_name}</td>
                <td>{category_name}</td>
                <td>$ {price}</td>
                <td>{available_quantity}</td>
                <td><Link to={`/viewDetails/${_id}`}>
                    <button className="btn btn-primary">View Details</button>
                </Link></td>
            </tr>
        </>
    );
};

export default Singletoy;

