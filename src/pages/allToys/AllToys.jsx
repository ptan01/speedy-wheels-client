import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllToys = () => {

    // const toys = useLoaderData()
   const [toys , setToys] = useState(useLoaderData())

    const handleSearch = (event)=> {
        event.preventDefault()
        const text = event.target.text.value
        fetch(`http://localhost:5000/toys/${text}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setToys(data)
        })
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" name='text' placeholder='search with toy name' className='border' />
                <input type="submit" value="Search" />
            </form>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            toys.map((toy, idx) => <tr key={idx}>
                                <th>{toy.sellerName}</th>
                                <td>{toy.name}</td>
                                <td>{toy.category}</td>
                                <td>{toy.price}</td>
                                <td>{toy.quantity}</td>
                                <td><Link to={`/details/${toy._id}`} className='btn'>Details</Link></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;