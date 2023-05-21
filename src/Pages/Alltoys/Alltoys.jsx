import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Singletoy from './Singletoy';

const Alltoys = () => {
    const [toys, setToys] = useState([]);
    const [searshtest, setSearchtext] = useState("")

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
            <div className="input-group my-12 ml-96">
                <input onChange={(e) => setSearchtext(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
                <button className="btn btn-primary">Search</button>
            </div>
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