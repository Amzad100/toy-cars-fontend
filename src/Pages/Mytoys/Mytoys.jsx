import React, { useContext, useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Authcontext } from '../../Providers/AuthProvider';
import SingleMytoy from './SingleMytoy';
import Swal from 'sweetalert2';

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
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://b7a11-toy-marketplace-server-side-amzad100-amzad100.vercel.app/mytoys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        if (result.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = cars.filter(car => car._id !== id);
                            setCars(remaining)
                        }
                    })

            }
        })
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