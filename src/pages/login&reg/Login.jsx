import React from 'react';

const Login = () => {



    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.password.value;
        console.log(email, pass)
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
                <div className='flex gap-4 justify-center'>
                    <button className="btn gap-2">
                        Button
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                    <button className="btn gap-2">
                        Button
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;