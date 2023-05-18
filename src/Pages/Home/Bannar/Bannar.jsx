import React from 'react';

const Bannar = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative h-screen w-full">
                <div className='hero min-h-screen' style={{ backgroundImage: `url("https://i.ibb.co/FwsXFvc/10.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
                <div className='hero min-h-screen' style={{ backgroundImage: `url("https://i.ibb.co/M1XgrK6/9.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
                <div className='hero min-h-screen' style={{ backgroundImage: `url("https://i.ibb.co/QbrKBNP/8.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
                <div className='hero min-h-screen' style={{ backgroundImage: `url("https://i.ibb.co/rZDvPjh/6.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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