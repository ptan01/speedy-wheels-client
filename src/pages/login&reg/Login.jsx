import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login')

    const { loginUser, googleLogin } = useContext(AuthContext) ;
    const [error , setError] = useState('')
  

    const location = useLocation()

    const from = location.state?.form?.pathname || '/' ;

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.password.value;
        console.log(email, pass)

        loginUser(email, pass)
            .then(result => {
                const user = result.user;
                navigate(from , {replace: true})
            })
            .catch(err => {
                console.log(err.message)
                setError(err.message)
            })
    }

    const handleGoogleLogin =()=>{
        googleLogin()
        .then(result => {
            const user = result.user ;
            navigate(from, {replace : true})
        })
        .catch(err => {
            console.log(err)
            setError(err.message)
        })
    }


    return (
        <div>
            <h2 className='text-center text-3xl text-blue-500'>Please Login</h2>
            <div className='w-1/3 mx-auto mt-20 text-center'>
                <form onSubmit={handleLogin}>
                    <div className='my-5'>
                        <label className='text-2xl' htmlFor="email">Email:</label> <br />
                        <input className='border-b-4 border-b-slate-600 px-5 py-1' type="email" name="email" id="" placeholder='email' required />
                    </div>
                    <div className='my-5'>
                        <label className='text-2xl' htmlFor="password">Password:</label> <br />
                        <input className='border-b-4 border-b-slate-600 px-5 py-1' type="password" name="password" id="" placeholder='password' required />
                    </div>
                    <div className='text-center mt-5'>
                        <input className='btn text-blue-500' type="submit" value="Login" />
                    </div>
                </form>
                <button onClick={handleGoogleLogin} className="btn mt-5 gap-2">
                   With Google
                    <FaGoogle />
                </button>
                <p className='text-red-600'>{error}</p>
                <p>Don't have account ? <Link className='text-blue-500' to='/registration'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;