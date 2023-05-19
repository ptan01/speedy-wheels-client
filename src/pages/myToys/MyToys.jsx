import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToys = () => {

    const { user } = useContext(AuthContext)

    const [userToys, setUserToys] = useState([])
    const [depend , setDepend] = useState(true)
    

    useEffect(() => {
        fetch(`http://localhost:5000/user-toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserToys(data)
            })
    }, [user, depend])

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toys/delete/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        setDepend(!depend)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })



    }

    return (
        <div>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Delete</th>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Details</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        userToys.map((toy, idx) => <tr key={idx}>
                            <td><button onClick={() => handleDelete(toy._id)} className='btn'>Delete</button></td>
                            <th>{toy.sellerName}</th>
                            <td>{toy.name}</td>
                            <td>{toy.price}</td>
                            <td>{toy.quantity}</td>
                            <td><Link to={`/details/${toy._id}`} className='btn'>Details</Link></td>
                            <td><Link to={`/edit/${toy._id}`} className='btn'>Edit</Link></td>
                        </tr>)
                    }

                </tbody>
            </table>

        </div>
    );
};

export default MyToys;