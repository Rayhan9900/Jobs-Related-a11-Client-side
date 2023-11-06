import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';


function Register() {

    const { createUser } = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault();

        console.log(event.currentTarget);
        const form = new FormData(event.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo')
        const email = form.get('email');
        const password = form.get('password')
        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('Login Successful')
            })
            .catch(error => {
                console.log(error)
            })

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Please Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="photo" name='photo' placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            {/* <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <Link to="/login">
                        <p>already have an account ? <button className='text-blue-500 underline'>Login</button></p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register