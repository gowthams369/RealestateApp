import React, { useState } from 'react';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    function handleChange(e) {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    function handleSignup(e) {
        e.preventDefault();
        console.log(formData);
        alert('Sign up successful');
    }

    return (
        <div className='w-full h-screen flex justify-center items-center bg-slate-200'>
            <div className='w-[90%] md:w-[30%] h-[80vh] rounded-lg bg-white p-4 flex flex-col justify-center shadow-md'>
                <h1 className='text-2xl font-medium mb-1'>Sign Up</h1>
                <p className='text-[#646464] mb-4'>Please fill in the form to create an account.</p>
                <form onSubmit={handleSignup} className='w-full'>
                    <input
                        name="username"
                        required
                        value={formData.username}
                        onChange={handleChange}
                        className='w-full mb-3 h-10 border-2 border-gray-300 rounded-xl pl-4'
                        placeholder='Enter your Name'
                        type='text'
                    />
                    <input
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className='w-full mb-3 h-10 border-2 border-gray-300 rounded-xl pl-4'
                        placeholder='Enter your Email'
                        type='email'
                    />
                    <input
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className='w-full mb-4 h-10 border-2 border-gray-300 rounded-xl pl-4'
                        placeholder='Enter your Password'
                        type='password'
                    />
                    <button
                        type="submit"
                        className='w-full py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-200'
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
