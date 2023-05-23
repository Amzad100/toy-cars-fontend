import React from 'react';

const Bannar = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative h-screen w-full">
                <div className='hero min-h-screen' style={{ backgroundImage: `url("https://i.ibb.co/0VDxqQV/81-Bet69-RFOL-AC-SX679.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Sports Cars</h1>
                            <p className="mb-5">LEGO Creator 3in1 Sports Car Toy.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮ pre</a>
                    <a href="#slide2" className="btn btn-circle">next ❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative h-screen w-full">
                <div className='hero min-h-screen' style={{ backgroundImage: `url("https://i.ibb.co/jk8t5Y7/61-Yi-HOa-Ff5-L-AC-SX679.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Police Car</h1>
                            <p className="mb-5">Charger Police Car Die-Cast Car.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮ pre</a>
                    <a href="#slide3" className="btn btn-circle">next ❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative h-screen w-full">
                <div className='hero min-h-screen' style={{ backgroundImage: `url("https://i.ibb.co/YtBCfrz/71-Nt2-K5-Ss-ML-AC-SX679.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Truck</h1>
                            <p className="mb-5">John Deere Sandbox Toys Vehicle Set - Includes Dump Truck Toy.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮ pre</a>
                    <a href="#slide4" className="btn btn-circle">next ❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative h-screen w-full">
                <div className='hero min-h-screen' style={{ backgroundImage: `url("https://i.ibb.co/RYW4N8z/71jr-SZJji-HL-AC-SX679.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Police Car</h1>
                            <p className="mb-5">Micro Police SUV.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮ pre</a>
                    <a href="#slide1" className="btn btn-circle">next ❯</a>
                </div>
            </div>
        </div>
    );
};

export default Bannar;