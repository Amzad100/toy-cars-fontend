import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-slate-100 text-base-content mt-5">
                <div>
                    <Link to='/'><h1 className='text-3xl font-bold'>Toy Cars</h1></Link>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
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