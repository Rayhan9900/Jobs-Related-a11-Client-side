import { Link } from 'react-router-dom'
import error from '../../assets/error.webp'

function ErrorPage() {
    return (
        <div>
            <Link to="/">
                <button className='text-pink-600 font-bold absolute text-4xl hover:bg-yellow-400 ' >Back To Home</button>
            </Link>
            <img className='w-full mt-4' src={error} alt="" />
        </div>
    )
}

export default ErrorPage