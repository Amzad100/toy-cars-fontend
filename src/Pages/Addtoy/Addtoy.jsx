import React, { useContext } from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { useForm } from "react-hook-form";
import { Authcontext } from '../../Providers/AuthProvider';

const Addtoy = () => {
    const { user } = useContext(Authcontext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch('https://b7a11-toy-marketplace-server-side-amzad100-amzad100.vercel.app/addtoy', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        console.log(data);
    }
    return (
        <div>
            <Header></Header>
            <h1 className='text-center text-6xl font-bold'>Add a toy page</h1>
            <div className='card'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <div className='text-center mt-5 mb-5 grid md:grid-cols-2 gap-5'>
                        <div>
                            <h1 className='font-bold my-1'>Picture URL of the toy:</h1>
                            <input type="text" placeholder='Picture URL of the toy' className="input input-bordered w-full max-w-xl" {...register("picture")} />
                        </div>
                        <div>
                            <h1 className='font-bold my-1'>Toy name</h1>
                            <input type="text" placeholder='Toy name' className="input input-bordered w-full max-w-xl" {...register("toy_name", { required: true })} />
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
                            <input type="text" placeholder='Price' className="input input-bordered w-full max-w-xl" {...register("price", { required: true })} />
                        </div>
                        <div>
                            <h1 className='font-bold my-1'>Rating</h1>
                            <input type="text" placeholder='Rating' className="input input-bordered w-full max-w-xl" {...register("rating", { required: true })} />
                        </div>
                        <div>
                            <h1 className='font-bold my-1'>Available quantity</h1>
                            <input type="text" placeholder='Available quantity' className="input input-bordered w-full max-w-xl" {...register("available_quantity", { required: true })} />
                        </div>
                        <div>
                            <h1 className='font-bold my-1'>Sub Category </h1>
                            <select className="input input-bordered w-full max-w-xl" {...register("category_name")}>
                                <option value="SportsCars">Sports Cars</option>
                                <option value="PoliceCars">Police Cars</option>
                                <option value="Truck">Truck</option>
                            </select>
                        </div>
                        <div>
                            <h1 className='font-bold my-1'>Detail description</h1>
                            <textarea type="text" placeholder='Detail description' className="textarea textarea-bordered w-full max-w-xl" {...register("detail_description")} />
                        </div>
                        <div className='text-center'>
                            <input type="submit" value='Add a toy' className='w-full max-w-xl mt-8 btn btn-primary' />
                        </div>
                    </div>
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}


                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Addtoy;