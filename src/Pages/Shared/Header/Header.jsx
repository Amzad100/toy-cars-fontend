import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/alltoys'>All Toys</Link></li>
                        <li><Link to='/mytoys'>My Toys</Link></li>
                        <li><Link to='/addatoy'>Add A Toy</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
                <Link className='btn btn-ghost normal-case text-3xl font-bold' to='/'>Toy Cars</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/alltoys'>All Toys</Link></li>
                    <li><Link to='/mytoys'>My Toys</Link></li>
                    <li><Link to='/addatoy'>Add A Toy</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src="https://i.ibb.co/RCYkvbq/2.jpg" />
                    </div>
                </div>
                <div className="avatar offline">
                    <div className="w-12 rounded-full">
                        <img src="https://i.ibb.co/RCYkvbq/2.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;