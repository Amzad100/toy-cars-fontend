import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <div className='my-5'>
            <h1 className='text-center text-3xl my-5 text-blue-800 font-bold'>Gallery</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/yd5pz17/71-Xy2-Pics-WL-AC-SX679.jpg" alt="Sports" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Sports Cars!</h2>
                        <p>Scale Toy Sports Cars with Door</p>
                        <div className="card-actions">
                            <Link to=''>
                                <button className="btn btn-primary">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/0VDxqQV/81-Bet69-RFOL-AC-SX679.jpg" alt="Sports" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Sports Cars!</h2>
                        <p>LEGO Creator 3in1 Sports Car Toy</p>
                        <div className="card-actions">
                            <Link to=''>
                                <button className="btn btn-primary">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/RYW4N8z/71jr-SZJji-HL-AC-SX679.jpg" alt="Police" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Police Cars!</h2>
                        <p>Micro Police SUV</p>
                        <div className="card-actions">
                            <Link to=''>
                                <button className="btn btn-primary">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/jk8t5Y7/61-Yi-HOa-Ff5-L-AC-SX679.jpg" alt="Police" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Police Cars!</h2>
                        <p>Charger Police Car Die-Cast Car</p>
                        <div className="card-actions">
                            <Link to=''>
                                <button className="btn btn-primary">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/H4kjXVS/710-Y-unl-ZNL-AC-SX679.jpg" alt="Truck" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Truck!</h2>
                        <p>Melissa & Doug Magnetic Car Loader Wooden Toy Set With 4 Cars and 1 Semi-Trailer Truck</p>
                        <div className="card-actions">
                            <Link to=''>
                                <button className="btn btn-primary">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/YtBCfrz/71-Nt2-K5-Ss-ML-AC-SX679.jpg" alt="Truck" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Truck!</h2>
                        <p>John Deere Sandbox Toys Vehicle Set - Includes Dump Truck Toy</p>
                        <div className="card-actions">
                            <Link to=''>
                                <button className="btn btn-primary">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;