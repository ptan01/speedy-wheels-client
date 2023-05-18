import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const AddToys = () => {

    const { user } = useContext(AuthContext)

    const handleAddToy = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const sellerName = e.target.sellerName.value;
        const category = e.target.category.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const quantity = e.target.quantity.value;
        const email = e.target.email.value;
        const description = e.target.description.value;

        const toy = { name, photo, sellerName, category, price, rating, quantity, email, description, }


        console.log(toy)

        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })


    }



    return (
        <div className=''>
            <div className='w-96 mt-10 mx-auto'>
                <h1 className='text-2xl text-center text-blue-500 border-b-4'>Add a toys</h1>
            </div>
            <form onSubmit={handleAddToy} className='mt-20' >
                <div className='mx-auto grid border-l-4 border-l-slate-600  px-5 gap-6 lg:grid-cols-2 w-3/4'>
                    <div>
                        <label className='text-2xl' htmlFor="name">Name:</label> <br />
                        <input className='border-b-4 border-b-slate-600 px-5 py-1' type="text" name="name" id="" placeholder='Name of toy' required />
                    </div>
                    <div>
                        <label className='text-2xl' htmlFor="name">Photo:</label><br />
                        <input className='border-b-4 border-b-slate-600 px-5 py-1' type="text" name="photo" id="" placeholder='photo URL' required />
                    </div>
                    <div>
                        <label className='text-2xl' htmlFor="name">Seller Name:</label><br />
                        <input className='border-b-4 border-b-slate-600 px-5 py-1' type="text" name="sellerName" defaultValue={user?.displayName} id="" placeholder='seller name' required />
                    </div>
                    <div>
                    <label className='text-2xl' htmlFor="name">Sub Category:</label><br />
                    <select name='category' className="select select-bordered w-full max-w-xs">
                        <option>Off-Road Vehicles</option>
                        <option>Electric Vehicles</option>
                        <option>Sports Cars</option>
                    </select>
                    </div>
                    <div>
                        <label className='text-2xl' htmlFor="name">Price:</label><br />
                        <input className='border-b-4 border-b-slate-600 px-5 py-1' type="text" name="price" id="" placeholder='price' required />
                    </div>
                    <div>
                        <label className='text-2xl' htmlFor="name">Rating:</label><br />
                        <input className='border-b-4 border-b-slate-600 px-5 py-1' type="text" name="rating" id="" placeholder='rating' required />
                    </div>
                    <div>
                        <label className='text-2xl' htmlFor="name">Quantity:</label><br />
                        <input className='border-b-4 border-b-slate-600 px-5 py-1' type="text" name="quantity" id="" placeholder='quantity' required />
                    </div>
                    <div>
                        <label className='text-2xl' htmlFor="name">Seller Email:</label><br />
                        <input className='border-b-4 border-b-slate-600 px-5 py-1' type="text" name="email" defaultValue={user?.email} id="" placeholder='email' required />
                    </div>

                </div>
                <div className='text-center mt-10 w-full'>
                    <label className='text-2xl' htmlFor="name">Description:</label><br />
                    <input className='border-b-4 w-1/3 border-b-slate-600 px-5 py-1' type="text" name="description" id="" placeholder='description' required />
                </div>
                <div className='text-center mt-5'>
                    <input className='btn text-blue-500' type="submit" value="Add Toy" />
                </div>
            </form>
        </div>
    );
};

export default AddToys;