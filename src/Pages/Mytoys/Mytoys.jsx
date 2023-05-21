import React, { useContext, useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Authcontext } from '../../Providers/AuthProvider';
import SingleMytoy from './SingleMytoy';

const Mytoys = () => {
    const { user } = useContext(Authcontext);
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-amzad100-amzad100.vercel.app/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(result => {
                setCars(result)
            })
    }, [user]);

    const handleDelete = id => {
        const proceed = confirm('Are you sure you went to delete')
        if (proceed) {
            fetch(`https://b7a11-toy-marketplace-server-side-amzad100-amzad100.vercel.app/mytoys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    if (result.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remaining = cars.filter(car => car._id !== id);
                        setCars(remaining)
                    }
                })
        }
    }
    return (
        <div>
            <Header></Header>
            <h1 className='text-center text-6xl font-bold'>My toys page: </h1>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Sub Category</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cars.map(car => <SingleMytoy
                                key={car._id}
                                car={car}
                                handleDelete={handleDelete}
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