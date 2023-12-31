import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import logo from '../assets/download (1).png' ;



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ""} to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ""} to='/all-toys'>All Toys</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ""} to='/my-toys'>My Toys</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ""} to='/add-toys'>Add A Toys</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ""} to='/blogs'>Blogs</NavLink></li>
                    </ul>
                </div>
                <div className='flex items-center'>
                <img className='w-[50px] h-[50px]' src="https://cdn.icon-icons.com/icons2/2578/PNG/512/speed_wheel_icon_153961.png" alt="" />
                <a className="btn btn-ghost normal-case text-3xl">Speedy <span className='text-blue-500'>Wheels</span></a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ""} to='/'>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ""} to='/all-toys'>All Toys</NavLink></li>
                    <li className={user ? "" : "hidden"}><NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ""} to='/my-toys'>My Toys</NavLink></li>
                    <li className={user ? "" : "hidden"}><NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ""} to='/add-toys'>Add A Toys</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ""} to='/blogs'>Blogs</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <button onClick={handleLogOut} className='btn'>Log Out</button>
                        <img title={user?.displayName ? user.displayName : 'name not available '} className='w-[50px] h-[50px] rounded-3xl' src={user?.photoURL ? user.photoURL : ''} alt="" />
                    </>
                        : <Link className='btn' to='/login'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;