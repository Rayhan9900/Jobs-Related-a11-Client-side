import { useContext } from 'react';
import logo from '../../assets/logo12.jpg'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider';

function Nabver() {


    const { user, logOut } = useContext(AuthContext);


    const handleSingOut = () => {
        logOut()
            .then()
            .catch()
    }

    const nabver = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addjob">Add Job</NavLink></li>
        <li><NavLink to="/myPostedJob">My Posted Job</NavLink></li>
        <li><NavLink to="/myBids">My Bids</NavLink></li>
        <li><NavLink to="/bidRequests">Bid Requests</NavLink></li>
        {/* <li><NavLink to="/login">Login</NavLink></li> */}

        {
            user ?
                <>
                    <li onClick={handleSingOut} className='mt-2 cursor-pointer'>Sign Out</li>
                    <p className=' mx-4 mt-2'>{user.displayName}</p>
                    <img src={user.photoURL} className='w-12 h-12 rounded-full' alt="" />
                </>
                :
                <Link to="/login"><li className='mt-2 cursor-pointer'>Login</li></Link>
        }

    </>


    return (
        <div className="navbar rounded-t-xl bg-gradient-to-r from-indigo-300 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {nabver}
                    </ul>
                </div>
                <img className='rounded-full w-20' src={logo} alt="" />
                <a className="btn btn-ghost text-purple-700  normal-case text-xl">To To Company</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {nabver}
                </ul>
            </div>

        </div>
    )
}

export default Nabver