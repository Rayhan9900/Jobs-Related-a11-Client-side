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

        axios.post('http://localhost:5000/jobs', data)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('My Bid Added Successfully')
                }
            })
        console.log(data)
    }


    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex'>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <label className="input-group">
                        <input {...register("email")} type="text" defaultValue={user.email} required className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <label className="input-group">
                        <input {...register("Jobtitle")} type="text"
                            placeholder="Job Title" required className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className='flex'>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <label className="input-group">
                        <input {...register("deadline")} type="date"
                            placeholder="Deadline" required className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <label className="input-group">
                        <input {...register("description")} type="text"
                            placeholder="Description" required className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className='flex'>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Minimum Price</span>
                    </label>
                    <label className="input-group">
                        <input {...register("minimumPrice")} type="text"
                            placeholder="Minimum Price" required className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Maximum Price</span>
                    </label>
                    <label className="input-group">
                        <input {...register("maximumPrice")} type="text"
                            placeholder="Maximum Price" required className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="form-control md:w-1/2 ml-4 py-4">
                <label className="label">
                    <span className="label-text">Category</span>
                </label>
                <select className='' {...register("category")}>
                    <option value="Web Development">Web Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Graphics Design">Graphics Design</option>
                </select>
            </div>

            <input type="submit" value="Add Job" className="btn btn-block mb-5" />
        </form>

    )
}

export default AddJob