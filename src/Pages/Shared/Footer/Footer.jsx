import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-slate-100 text-base-content mt-5">
                <div>
                    <Link to='/'><h1 className='text-3xl font-bold'>Toy Cars</h1></Link>
                    <p>Toy Industries Ltd.<br />Providing reliable tech since 2023</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link className='link-hover' to='/alltoys'>All Toy</Link>
                    <Link className='link-hover' to='/mytoys'>My Toy</Link>
                    <Link className='link-hover' to='/addtoy'>Add Toy</Link>
                    <Link className='link-hover' to='/blogs'>Blog</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className='link-hover' to='/about'>About us</Link>
                    <Link className='link-hover' to='/contact'>Contact</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className='link-hover' to=''>Terms of use</Link>
                    <Link className='link-hover' to=''>Privacy policy</Link>
                </div>
            </footer>
            <footer className="footer items-center p-4 bg-neutral text-neutral-content">
                <div className="items-center grid-flow-col">
                    <Link to='/'><h1 className='text-3xl font-bold'>Toy Cars</h1></Link>
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <Link to='https://www.facebook.com/'><FaFacebookF></FaFacebookF></Link>
                    <Link to='https://www.twitter.com/'><FaTwitter></FaTwitter></Link>
                    <Link to='https://www.youtube.com/'><FaYoutube></FaYoutube></Link>
                </div>
            </footer>
        </>
    );
};

export default Footer;