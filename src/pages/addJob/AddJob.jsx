import React, { useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useForm } from "react-hook-form"

function AddJob() {

    const { user } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = (data) => {

        axios.post('https://jobs-related-server-ass-11.vercel.app/jobs', data)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('My Bid Added Successfully')
                }
            })
        console.log(data)
    }


    return (

        <form className='bg-slate-300' onSubmit={handleSubmit(onSubmit)}>
            <div className='md:flex'>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <label className="input-group">
                        <input {...register("email")} type="text" defaultValue={user.email} required className="input input-bordered input-accent w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <label className="input-group">
                        <input {...register("Jobtitle")} type="text"
                            placeholder="Job Title" required className="input input-bordered w-full input-accent" />
                    </label>
                </div>
            </div>
            <div className='md:flex'>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <label className="input-group">
                        <input {...register("deadline")} type="date"
                            placeholder="Deadline" required className="input input-bordered w-full input-accent " />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <label className="input-group">
                        <input {...register("description")} type="text"
                            placeholder="Description" required className="input input-bordered w-full input-accent" />
                    </label>
                </div>
            </div>
            <div className='md:flex'>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text">Minimum Price</span>
                    </label>
                    <label className="input-group">
                        <input {...register("minimumPrice")} type="text"
                            placeholder="Minimum Price" required className="input input-bordered w-full input-accent" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text">Maximum Price</span>
                    </label>
                    <label className="input-group">
                        <input {...register("maximumPrice")} type="text"
                            placeholder="Maximum Price" required className="input input-bordered w-full input-accent" />
                    </label>
                </div>
            </div>
            <div className="form-control md:w-1/2 md:ml-4 py-4">
                <label className="label">
                    <span className="label-text">Category</span>
                </label>
                <select className='py-4 px-4 rounded-xl border-b-4 border-accent shadow-2xl shadow-cyan-300' {...register("category")}>
                    <option value="Web Development">Web Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Graphics Design">Graphics Design</option>
                </select>
            </div>

            <input type="submit" value="Add Job" className="btn btn-block bg-pink-400 hover:bg-yellow-300 mt-10  shadow-xl shadow-cyan-400" />
        </form>

    )
}

export default AddJob