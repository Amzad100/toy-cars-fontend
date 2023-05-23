import React from 'react';
import { Link } from 'react-router-dom';

const Review = () => {
    return (
        <div className='my-5'>
            <div className='text-center'>
                {/* The button to open modal */}
                <label htmlFor="my-modal-4" className="btn">DESCRIPTION</label>
                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-lg">DESCRIPTION</h3>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" /><input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                        <div className="modal-action">
                            <label htmlFor="my-modal-4" className="btn">Close!</label>
                        </div>
                    </div>
                </div>
                {/* The button to open modal */}
                <label htmlFor="my-modal-5" className="btn">REVIEWS</label>
                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-lg">REVIEWS</h3>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" /><input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                        <div className="modal-action">
                            <label htmlFor="my-modal-5" className="btn">Close!</label>
                        </div>
                    </div>
                </div>
                {/* The button to open modal */}
                <label htmlFor="my-modal-6" className="btn">ANY QUESTIONS?</label>
                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-lg">ANY QUESTIONS?</h3>
                        <input type="text" placeholder="Name" className="input my-2 mx-2 input-bordered input-primary w-full max-w-xs" />
                        <input type="email" placeholder="Email" className="input my-2 mx-2 input-bordered input-primary w-full max-w-xs" />
                        <input type="number" placeholder="Phone Number" className="mx-2 my-2 input input-bordered input-primary w-full max-w-xs" />
                        <input type="number" placeholder="Phone Number" className="mx-2 my-2 input input-bordered input-primary w-full max-w-xs" />
                        <textarea placeholder="Comment" className="textarea my-2 textarea-bordered textarea-sm w-full max-w-md" ></textarea>
                        <button className="btn btn-block my-2">Send</button>
                        <div className="modal-action">
                            <label htmlFor="my-modal-6" className="btn">Close!</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;