import React from 'react'
import Banner from '../banner/Banner'
import JobsTabs from '../jobTabs/JobsTabs'
import ClientSite from '../clientsite/ClientSite'
import Contact from '../contact/Contact'

function Home() {
    return (
        <div>
            <Banner />
            <JobsTabs />
            <ClientSite />
            <Contact />
        </div>
    )
}

export default Home