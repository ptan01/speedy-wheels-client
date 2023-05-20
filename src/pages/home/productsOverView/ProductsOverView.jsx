import React from 'react';

const ProductsOverView = () => {
    return (
       <div className='my-32'>
        <h1 className='text-center text-5xl text-blue-600 my-10'>About Products</h1>
         <div className='lg:flex'>
            <div className='lg:w-1/2'>
                <div className='lg:flex'>
                    <img className='w-[385px]' src="https://images.pexels.com/photos/132539/pexels-photo-132539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <p className='p-2'><span className='text-2xl text-blue-600'>Ride-On Cars</span> : Let your little ones hit the road in style with our ride-on cars. These battery-powered vehicles offer a safe and thrilling adventure for children. Designed with attention to detail, they provide a realistic driving experience and come in various models, including sports cars, trucks, and SUVs.</p>
                </div>
                <div className='lg:flex flex-row-reverse mt-2'>
                    <img className='w-[385px]' src="https://images.pexels.com/photos/1648419/pexels-photo-1648419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <p> <span className='text-2xl text-blue-600'>Racing Tracks</span> : Get ready for high-speed racing action with our exciting racing track sets. Construct your custom track layout and challenge your friends to thrilling races. Our tracks feature loops, twists, and turns to provide an adrenaline-pumping experience. Adjustable speeds and additional accessories enhance the excitement and create a realistic racing environment</p>
                </div>
            </div>
            <div className='lg:w-1/2'>
                <h1 className='text-center text-4xl text-blue-600'>About Our Products</h1>
                <p className='text-xl lg:w-3/4 mx-auto mt-7'>At our Speedy Wheels website, we are committed to providing high-quality products that inspire creativity, imagination, and a love for cars. We ensure safety and durability in all our toys, prioritizing the well-being of children. Explore our wide range of car toys and create unforgettable memories filled with joy and adventure. <br />  Start your engines and let the fun begin!</p>
            </div>
        </div>
       </div>
    );
};

export default ProductsOverView;