import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const MyToys = () => {

    const { user } = useContext(AuthContext)

    const [userToys, setUserToys] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/user-toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserToys(data)
            })
    }, [user])

    return (
        <div>
            <h1>This is my toys</h1>
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
                        userToys.map((toy, idx) => <tr key={idx}>
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
    );
};

export default MyToys;