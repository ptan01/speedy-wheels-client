import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { FaBeer, FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {

    const { loginUser, googleLogin } = useContext(AuthContext) ;





    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.password.value;
        console.log(email, pass)

        loginUser(email, pass)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    const handleGoogleLogin =()=>{
        googleLogin()
        .then(result => {
            const user = result.user ;
            console.log(user)
        })
        .catch(err => {
            console.log(err)
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
                <p>Don't have account ? <Link className='text-blue-500' to='/registration'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;