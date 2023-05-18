import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {

    const toys = useLoaderData()
    console.log(toys)

    return (
        <div>
            <h1>this is all toyes page</h1>
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
                                <td><button className='btn'>Details</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;