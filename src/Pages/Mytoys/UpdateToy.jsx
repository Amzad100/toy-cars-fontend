import React, { useContext, useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Authcontext } from '../../Providers/AuthProvider';

const UpdateToy = () => {
    const toys = useLoaderData();
    const { category_id, category_name, toy_name, picture, price, rating, available_quantity, _id } = toys;
    const { user } = useContext(Authcontext);


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleUpdate = id => {
        fetch(`https://b7a11-toy-marketplace-server-side-amzad100-amzad100.vercel.app/mytoys/${id}`)
            .then(res => res.json())
            .then(result => {
                if (register.modifieCount > 0) {

                }
            })
    }

    const onSubmit = (data) => {
        fetch(`https://b7a11-toy-marketplace-server-side-amzad100-amzad100.vercel.app/mytoys/${_id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {

            })
    }
    return (
        <>
            <Header></Header>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className='text-center mt-5 mb-5 grid md:grid-cols-2 gap-5'>

                    <div>
                        <h1 className='font-bold my-1'>Toy name</h1>
                        <input type="text" defaultValue={toy_name} placeholder='Toy name' className="input input-bordered w-full max-w-xl" {...register("toy_name", { required: true })} />
                    </div>
                    <div>
                        <h1 className='font-bold my-1'>Seller name</h1>
                        <input type="text" defaultValue={user?.displayName} placeholder='Seller name' className="input input-bordered w-full max-w-xl" {...register("name", { required: true })} />
                    </div>
                    <div>
                        <h1 className='font-bold my-1'>Email</h1>
                        <input type="email" defaultValue={user?.email} placeholder='your email' className="input input-bordered w-full max-w-xl" {...register("email", { required: true })} />
                    </div>
                    <div>
                        <h1 className='font-bold my-1'>Price</h1>
                        <input type="text" defaultValue={price} placeholder='Price' className="input input-bordered w-full max-w-xl" {...register("price", { required: true })} />
                    </div>
                    <div>
                        <h1 className='font-bold my-1'>Rating</h1>
                        <input type="text" defaultValue={rating} placeholder='Rating' className="input input-bordered w-full max-w-xl" {...register("rating", { required: true })} />
                    </div>
                    <div>
                        <h1 className='font-bold my-1'>Available quantity</h1>
                        <input type="text" defaultValue={available_quantity} placeholder='Available quantity' className="input input-bordered w-full max-w-xl" {...register("available_quantity", { required: true })} />
                    </div>
                    <div className='text-center'>
                        <input type="submit" value='Update' className='w-full max-w-xl mt-8 btn btn-primary' />
                    </div>
                </div>
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}


            </form>
            <Footer></Footer>
        </>
    );
};

export default UpdateToy;