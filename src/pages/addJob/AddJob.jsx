import React, { useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import { data } from 'autoprefixer';
import toast from 'react-hot-toast';

function AddJob() {
    const { user } = useContext(AuthContext)



    const handleAddjob = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const jobtitle = form.jobtitle.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const category = form.category.value;
        const minimumPrice = form.minimumPrice.value;
        const maximumPrice = form.maximumPrice.value;
        const data = { email, jobtitle, deadline, description, category, minimumPrice, maximumPrice }
        console.log(data)
    }

    axios.post('http://localhost:5173/jobs', data)
        .then(res => {
            if (res.data.insertedId) {
                toast.success('My Bid Added Successfully')
            }
        })

    return (
        <div>
            <div>
                <form onSubmit={handleAddjob}>
                    {/* ***************Email************** */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="email" placeholder={user.email} readOnly className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* *********************Job Title******************** */}
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Job Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="jobtitle" placeholder="Job Title" required className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* ****************Deadline******************* */}

                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="deadline" placeholder="Deadline" required className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* ***************Description****************** */}
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="Description" required className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* **************Catetgory***************** */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group w-1/2">
                                <select className="select  select-bordered">
                                    <option defaultValue={'Web Development'}>Web Development</option>
                                    <option>Digital Marketing</option>
                                    <option>Graphics Design</option>
                                </select>
                                <input type="text" name="category"

                                />
                            </label>
                        </div>

                        {/* ****************Minimum Price****************** */}
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Minimum Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="minimumPrice" placeholder="Minimum Price" required className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* **************Maximum Price************* */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Maximum Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="maximumPrice" placeholder="Maximum Price" required className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Job" className="btn btn-block" />
                </form>
            </div >
        </div >
    )
}

export default AddJob