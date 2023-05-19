import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Edit = () => {

    const toy = useLoaderData()

    const handleUpdate =(e)=> {
        e.preventDefault()
        const price = e.target.price.value ;
        const quantity = e.target.quantity.value ;
        const description = e.target.description.value ;
        const updatedToy = {price, quantity, description} ;
        fetch(`http://localhost:5000/toys/update/${toy._id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount=== 1){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your Toy Updated Success Fully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
            }
        })
    }



    return (
        <div>
            <h1 className='text-3xl text-center'>Update <span className='text-blue-500'>{toy.name}</span> Toy</h1>
            <form className='max-w-sm mx-auto' onSubmit={handleUpdate}>
                <div className='my-4'>
                    <label className='text-2xl ' htmlFor="">Price</label>
                    <input className='border-b-4 px-5 my-2 border-b-blue-200' defaultValue={toy.price} type="text" name="price" id="" required placeholder='name'/>
                </div>
                <div className='my-4'>
                    <label className='text-2xl ' htmlFor="">Quantity</label>
                    <input className='border-b-4 px-5 my-2 border-b-blue-200' defaultValue={toy.quantity} type="text" name="quantity" id="" required placeholder='price'/>
                </div>
                <div className='my-4'>
                    <label className='text-2xl ' htmlFor="">Details</label>
                    <input className='border-b-4 px-5 my-2 border-b-blue-200' defaultValue={toy.description} type="text" name="description" id="" required placeholder='details'/>
                </div>
                <div className='my-4 text-center'>
                    <input className="btn" type="submit" value="Update Toy" />
                </div>
            </form>
        </div>
    );
};

export default Edit;