import React, { useContext, useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Authcontext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const toys = useLoaderData();
    const { price, available_quantity, _id, detail_description } = toys;
    const { user } = useContext(Authcontext)
    const handleUpdatetoy = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be Update this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b7a11-toy-marketplace-server-side-amzad100-amzad100.vercel.app/mytoys/${_id}`, {
                    method: 'PUT'
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        if (result.modifiedCount > 0) {
                            Swal.fire(
                                'Updated!',
                                'Your file has been Updated.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        console.log(data);
    }

    return (
        <>
            <Header></Header>
            <div className='card'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='text-center mt-5 mb-5 grid md:grid-cols-2 gap-5'>
                        <div>
                            <h1 className='font-bold my-1'>Price</h1>
                            <input type="text" defaultValue={price} placeholder='Price' className="input input-bordered w-full max-w-xl" {...register("price", { required: true })} />
                        </div>

                        <div>
                            <h1 className='font-bold my-1'>Available quantity</h1>
                            <input type="text" defaultValue={available_quantity} placeholder='Available quantity' className="input input-bordered w-full max-w-xl" {...register("available_quantity", { required: true })} />
                        </div>

                        <div>
                            <h1 className='font-bold my-1'>Detail description</h1>
                            <textarea type="text" defaultValue={detail_description} placeholder='Detail description' className="textarea textarea-bordered w-full max-w-xl" {...register("detail_description")} />
                        </div>
                        <div className='text-center'>
                            <input onClick={() => handleUpdatetoy(_id)} type="submit" value='Update a toy' className='w-full max-w-xl mt-8 btn btn-primary' />
                        </div>
                    </div>
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                </form>
            </div>
            <Footer></Footer>
        </>
    );
};

export default UpdateToy;