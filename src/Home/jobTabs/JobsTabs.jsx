import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobsCard from './JobsCard';
import Title from '../../components/Title';

function JobsTabs() {

    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [])

    const wdj = jobs.filter(job => job.category === 'Web Development')
    const dmj = jobs.filter(job => job.category === 'Digital Marketing')
    const gdj = jobs.filter(job => job.category === 'Graphics Designer')

    return (
        <div className=' mt-5'>
            <div className='text-center mb-8 font-bold text-cyan-600'>
                <Title heading='Popular Job Categories' />
            </div>
            <Tabs>
                <TabList>
                    <div className='flex justify-evenly text-3xl bg-lime-500'>
                        <Tab className='hover:bg-cyan-500'>Web Development</Tab>
                        <Tab className='hover:bg-sky-500'>Digital Marketing</Tab>
                        <Tab className='hover:bg-blue-500'>Graphics Design</Tab>
                    </div>
                </TabList>

                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-3 mt-4'>
                        {
                            wdj.map((job, index) => <JobsCard
                                key={index}
                                job={job}
                            />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-3 mt-4'>
                        {
                            dmj.map((job, index) => <JobsCard
                                key={index}
                                job={job}
                            />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-3 mt-4'>
                        {
                            gdj.map((job, index) => <JobsCard
                                key={index}
                                job={job}
                            />)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default JobsTabs