import React, { useContext, useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Authcontext } from '../../Providers/AuthProvider';
import SingleMytoy from './SingleMytoy';

const Mytoys = () => {
    const { user } = useContext(Authcontext);
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(result => {
                setCars(result)
            })
    }, [user])
    return (
        <div>
            <Header></Header>
            <h1 className='text-center text-6xl font-bold'>My toys page: </h1>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cars.map(car => <SingleMytoy
                                key={car._id}
                                car={car}
                            ></SingleMytoy>)
                        }
                    </tbody>
                </table>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mytoys;