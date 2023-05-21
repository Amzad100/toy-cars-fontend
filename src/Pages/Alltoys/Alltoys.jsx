import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Singletoy from './Singletoy';

const Alltoys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then(res => res.json())
            .then(result => {
                setToys(result)
            })
    }, [])
    return (
        <div>
            <Header></Header>
            <h1 className='text-center text-6xl font-bold'>all toy page:</h1>
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
                            toys.map(toy => <Singletoy
                                key={toy._id}
                                toy={toy}
                            ></Singletoy>)
                        }
                    </tbody>
                </table>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Alltoys;