import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Registration = () => {


    useTitle('Register')

    const {createUser} = useContext(AuthContext)
    const [error, setError]= useState('')

    const handleRegister = (e)=> {
        e.preventDefault()
        const name = e.target.name.value ;
        const email = e.target.email.value ;
        const pass = e.target.password.value ;
        const photo = e.target.photo.value ;
        console.log(name, email, pass, photo)

        createUser(email, pass)
        .then(result => {
            const user = result.user ;
            updateProfile(user, {displayName: name , photoURL : photo})
            .then(()=> {

            })
            .catch(err=> {
                console.log(err.message)
                setError(err.message)
            })
            console.log(user)
        })
        .catch(err => {
            console.log(err.message)
            setError(err.message)
        })
    }


    return (
        <div>
            <h2 className='text-center text-4xl text-blue-600'>this is Registration</h2>

            <form onSubmit={handleRegister}>
                <div className='w-1/2 mx-auto text-center border-l-4 border-l-blue-600'>
                    <div className='my-5'>
                        <label className='text-2xl' htmlFor="name">Name:</label> <br />
                        <input className='border-b-4 border-b-slate-600 px-5 py-1' type="text" name="name" id="" placeholder='Name' />
                    </div>
                    <div className='my-5'>
                        <label className='text-2xl' htmlFor="email">Email:</label> <br />
                        <input className='border-b-4 border-b-slate-600 px-5 py-1' type="email" name="email" id="" placeholder='email' required />
                    </div>
                    <div className='my-5'>
                        <label className='text-2xl' htmlFor="password">Password:</label> <br />
                        <input className='border-b-4 border-b-slate-600 px-5 py-1' type="password" name="password" id="" placeholder='password' required />
                    </div>
                    <div className='my-5'>
                        <label className='text-2xl' htmlFor="name">Photo URL:</label> <br />
                        <input className='border-b-4 border-b-slate-600 px-5 py-1' type="text" name="photo" id="" placeholder='photo url' />
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <input className='btn text-blue-500' type="submit" value="Register" />
                </div>
            </form>
            <p className='text-center text-red-600'>{error}</p>
            <p className='text-center'>Already Have An Account ? <Link className='text-blue-500' to='/login'>Login</Link></p>
        </div>
    );
};

export default Registration;