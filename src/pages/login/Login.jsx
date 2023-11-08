import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc'

function Login() {

    const { signIn, signInGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        console.log(email, password);


        signIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : "/")
                toast.success('Login Successful')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const handleGoogle = () => {
        signInGoogle()
            .then(result => {
                // console.log(result.user)
            })
            .catch(error => {
                // console.log(error)
            })
    }


    return (
        <div className="hero md:min-h-screen bg-base-200 ">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Please Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className=''>Don't have an account please ? <Link to="/register"><button className='text-cyan-500 underline '>Registe</button></Link> </p>
                    <div className="divider">OR</div>

                    <button className='flex justify-center items-center gap-4 border-2 border-white py-2 text-accent' onClick={handleGoogle}> <FcGoogle size={30} /> Google</button>
                </div>
            </div>
        </div>
    )
}

export default Login