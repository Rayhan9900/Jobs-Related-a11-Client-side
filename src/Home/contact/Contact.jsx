import { MdLocationPin, MdEmail } from 'react-icons/md';
import { LuPhoneCall } from 'react-icons/lu';
import Title from '../../components/Title';


function Contact() {
    return (
        <div className='md:flex py-20 justify-around bg-blue-200'>
            <div className='pl-4'>

                <h2 className="text-sm text-green-500 ">INFORMATION</h2>
                <h2 className="text-3xl mt-4">CONTACT INFORMATION</h2>
                <p className='mt-3'>Event definition is - somthing that happens occurre How evesnt sentence. <br /> Synonym when an unknown printer took a galley.</p>
                <h2 className="text-xl mt-4">OFFICE IN <span className='text-sky-600'>NEW YORK</span></h2>

                <div className='mt-5 gap-5'>
                    <div className='flex gap-2'>
                        <MdLocationPin className='text-xl'></MdLocationPin>
                        <p>ADDRESS :Event Center park WT 22 New York</p>
                    </div>
                    <div className='flex gap-2'>
                        <LuPhoneCall />
                        <p>PHONE :+9*******54</p>
                    </div>
                    <div className='flex gap-2'>
                        <MdEmail />
                        <p>E-MAIL :info@jobs.com</p>
                    </div>
                </div>
            </div>
            <div >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text"></span>
                    </label>
                    <input type="name" name='' placeholder="Your Name*" className="input input-bordered w-full" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text"></span>
                    </label>
                    <input type="email" name='email' placeholder="Your Email*" className="input input-bordered w-full" required />
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text"></span>
                    </label>
                    <textarea className="textarea textarea-info" placeholder="Bio"></textarea>
                </div>
            </div>
        </div>
    )
}

export default Contact