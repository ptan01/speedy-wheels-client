import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <>
            <div className=" hero bg-img min-h-[93vh] bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-xl">
                        <h1 className="text-5xl font-bold">Wellcome to Speedy Wheels</h1>
                        <p className="py-6">Our website boasts a user-friendly interface, making it a breeze to navigate and find the perfect car toy for yourself or as a gift. Each product listing comes with detailed descriptions, high-resolution images, and customer reviews, providing you with all the information you need to make an informed decision. We also offer a secure and seamless checkout process, guaranteeing a hassle-free shopping experien</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;